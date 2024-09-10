import { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/main.css';
import Main2 from './main2';
import Slider from 'react-slick';

function Main() {
  const [store, setStore] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    // 초기화 시 기본 '강남' 데이터를 불러오는 함수
    fetchStoreByLocation('강남');
  }, []);

  // 특정 위치로 가게 데이터를 가져오는 함수
  const fetchStoreByLocation = async (location) => {
    try {
      const response = await axios.post('/store/getLCStore', { categoryName: location });
      console.log(response.data);
      setStore(response.data);
      setFilterStore(response.data);
      setSelectedLocation(location);
    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
    <>
    <Main2/>
    <div className="gangline">
      {/* 지역 선택 버튼들 */}
      <div className='buttons'>
      <button onClick={() => fetchStoreByLocation('강남')}># 강남 ,</button>
      <button onClick={() => fetchStoreByLocation('홍대')}># 홍대 ,</button>
      <button onClick={() => fetchStoreByLocation('명동')}># 명동 ,</button>
      <button onClick={() => fetchStoreByLocation('신촌')}># 신촌 ,</button>
      <button onClick={() => fetchStoreByLocation('종로')}># 종로 ,</button>
      <button onClick={() => fetchStoreByLocation('동대문')}># 동대문</button>
      </div>

      {/* 필터링된 데이터가 있을 때만 슬라이더를 보여줍니다 */}
      {selectedLocation && (
        <Slider {...settings}>
          {(filterStore.length > 0 ? filterStore : store).map((item, index) => (
            <div key={index} className="store-item">
              <ul className='slidebox'>
                <li><img src={item.storeimg} className="store-image" alt={item.storeName}/></li>
                <li>
                  <h4>{item.storeName}</h4>
                  <p>{item.storeAddress}</p>
                </li>
              </ul>
            </div>
          ))}
        </Slider>
      )}
    </div>
    </>
  );
}

export default Main;
