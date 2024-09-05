import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';  // react-slick import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/gang.css';

function Gang() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    // 백엔드에서 Store 데이터를 가져오는 함수
    const fetchStoreData = async () => {
      try {
        const response = await axios.get('/store/getStore'); // Spring Boot API 경로
        setStore(response.data); // 가져온 데이터를 state에 저장
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };
    fetchStoreData();
  }, []);

  // react-slick 슬라이더 설정
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 넘길 슬라이드 수
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="gangline">
      <Slider {...settings}>
        {store.map((item, index) => (
          <div key={index} className="store-item">
            <ul className='slidebox'>
              <li><img src={item.storeimg} className="store-image" alt={item.storeName} /></li>
              <li>
                <p>{item.storeName}</p>
                <p>{item.storeAddress}</p>
                <p>{item.storeName}</p>
              </li>
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gang;
