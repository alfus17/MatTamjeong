import { useState } from "react";
import axios from 'axios';

function Detail () {
    const [food, setFood] = useState([]);

    const fetchStoreData = async () => {
        try {
          const response = await axios.get('/store/getStore'); // Spring Boot API 경로
          setFood(response.data); // 가져온 데이터를 state에 저장
          console(response);
        } catch (error) {
          console.error('Error fetching store data:', error);
        }
      };
      fetchStoreData();
    return (
        <div>
            
        </div>


    )
}

export default Detail;