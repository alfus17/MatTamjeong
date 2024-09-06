import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/main.css';

function Main() {
  const [store, setStore] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    // 백엔드에서 Store 데이터를 가져오는 함수
    const fetchStoreData = async () => {
      try {
        const response = await axios.get('/store/getStore'); // Spring Boot API 경로
        setStore(response.data); // 가져온 데이터를 state에 저장
        // 처음에 강남 지역 데이터를 필터링
        filterStoreByLocation('강남')
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };
    fetchStoreData();
  }, []);

  const filterStoreByLocation = (location) => {
    setSelectedLocation(location);
    const filteredStores = store.filter(item => item.storecate === location);
    setFilterStore(filteredStores);
  }

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
    <div className="gangline">
      {/* 지역 선택 버튼들 */}
      <div className='buttons'>
      <button onClick={() => filterStoreByLocation('강남')}># 강남</button>
      <button onClick={() => filterStoreByLocation('홍대')}># 홍대</button>
      <button onClick={() => filterStoreByLocation('명동')}># 명동</button>
      <button onClick={() => filterStoreByLocation('신촌')}># 신촌</button>
      <button onClick={() => filterStoreByLocation('동대문')}># 동대문</button>
      <button onClick={() => filterStoreByLocation('종로')}># 종로</button>
      </div>

      {/* 필터링된 데이터가 있을 때만 슬라이더를 보여줍니다 */}
      {selectedLocation && (
        <Slider {...settings}>
          {(filterStore.length > 0 ? filterStore : store).map((item, index) => (
            <div key={index} className="store-item">
              <ul className='slidebox'>
                <li><img src={item.storeimg} className="store-image" alt={item.storeName} /></li>
                <li>
                  <h4>{item.storeName}</h4>
                  <p>{item.storeAddress}</p>
                  <p>{item.storeName}</p>
                </li>
              </ul>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Main;
