import React, { useEffect } from 'react';
import axios from "axios";

const Widgets = () => {
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:3001/api/v1/widgets');
      console.log(res);
    }

    fetchData();
  }, []);

  return (
    <div>
      Widgets
    </div>
  );
}

export default Widgets;
