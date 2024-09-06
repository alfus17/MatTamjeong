import React, { useState } from 'react';
import '../css/main.css';
import Location from './location';

function Main() {
  // 지도에 표시할 위치 정보를 저장하는 state
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // 각 이미지에 대한 위치 정보 설정
  const locations = [
    { 
      lat: 37.49440, // 좌표
      lng: 127.0298, 
      title: '코리안 치킨 클럽', 
      content: '<div>코리안 치킨 클럽</div>', // 상세 정보 넣는곳
      img: '/img/food1.jpg' // 이미지 파일 ( Main 에 있는 이미지)
    },
    { 
      lat: 37.5013, 
      lng: 127.0374, 
      title: '한솥 도시락', 
      content: '<div>한솥 도시락</div>',
      img: '/img/food2.jpg'

      
    },
    { 
      lat: 37.4908, 
      lng: 127.0175, 
      title: '꾸이한끼', 
      content: '<div>꾸이한끼</div>',
      img: '/img/food3.jpg'
    },
  ];

  // 이미지 클릭 시 호출되는 함수
  const handleImageClick = (index) => {
    // 같은 이미지를 클릭하면 상태를 초기화 (지도 숨김)
    if (selectedImageIndex === index) {
      setSelectedLocation(null);
      setSelectedImageIndex(null);
    } else {
      // 다른 이미지를 클릭하면 해당 위치 정보로 업데이트
      setSelectedLocation(locations[index]);
      setSelectedImageIndex(index);
    }
  };

  return (
<div className='mainout'>
    <div className="container">
      <div className="images">
        {locations.map((location, index) => (
          <img 
            key={index} 
            src={location.img} 
            alt={location.title} 
            onClick={() => handleImageClick(index)} 
            style={{ cursor: 'pointer' }} 
          />
        ))}
      </div>

      {/* 사용자가 이미지를 클릭했을 때만 Location 컴포넌트를 렌더링 */}
      {selectedLocation && (
        <div className="map-container">
          <Location 
            lat={selectedLocation.lat} 
            lng={selectedLocation.lng} 
            title={selectedLocation.title} 
            content={selectedLocation.content} 
          />
        </div>
      )}
    </div>
</div>
  );
}

export default Main;
