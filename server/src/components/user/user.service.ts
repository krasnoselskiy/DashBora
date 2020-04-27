import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

import { User } from './interfaces/user.interface';
import { RegisterDTO, LoginDTO } from '../auth/dto/auth-dto';
import { UserDTO } from './dto/user.dto';
import { ObjectId } from 'mongodb';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
  ) { }

  private sanitizeUser(user: User) {
    return user.depopulate('password');
  }

  async create(userDTO: RegisterDTO) {
    const { username } = userDTO;
    const user = await this.userModel.findOne({ username });

    if (user) {
      throw new HttpException('User already exsists',
        HttpStatus.BAD_REQUEST)
    }

    const createdUser = new this.userModel(userDTO);
    await createdUser.save();

    return this.sanitizeUser(createdUser);
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username, password } = userDTO;
    const user = await this.userModel.findOne({ username });

    if (!user) {
      throw new HttpException('Invalid credentials',
        HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials',
        HttpStatus.UNAUTHORIZED);
    }
  }

  async findUserById(userID) {
    const user = await this.userModel
      .findById(userID)
      .select('-password')
      .exec();

    if (!user) throw new HttpException('User does not exist!',
      HttpStatus.UNAUTHORIZED);

    return user;
  }

  async findByPayload(payload: any) {
    const { username } = payload;
    return await this.userModel.findOne({ username });
  }

  async addProperty(userID, property, propertyType) {
    const obj = {};
    obj[propertyType] = [];

    obj[propertyType].push(property)

    const updatedUser = await this.userModel
      .findOneAndUpdate(
        { _id: userID },
        {
          $addToSet: obj
        },
        { new: true }
    ).select('-password');

    return updatedUser;
  }

  async removeProperty(userID, widgetID, property) {
    const propObjectId = new ObjectId(widgetID);
    const obj = {};
    obj[property] = {
      '_id': propObjectId
    };

    const updatedUser = await this.userModel
      .findOneAndUpdate(
        { _id: userID },
        { $pull: obj },
        { new: true }
      ).select('-password');

    return updatedUser;
  }

  async updateUserTeam(userDTO: UserDTO): Promise<User> {
    const { _id, teams } = userDTO;
    const team_id = '2211221212121';

    const updatedUser = await this.userModel.findOneAndUpdate(
      { _id: _id },
      { $push: { teams: team_id } },
      function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
        }
      });

    return updatedUser;
  }
}
