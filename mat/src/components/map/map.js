import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Map = () => {
  const mapElement = useRef(null);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    // 백엔드에서 Store 데이터를 가져오는 함수
    const fetchStoreData = async () => {
      try {
        const response = await axios.get('/api/stores'); // Spring Boot API 경로
        setStoreData(response.data); // 가져온 데이터를 state에 저장
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };

    fetchStoreData();
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    // 처음 위치 설정
    const mapOptions = {
      center: new naver.maps.LatLng(37.49440, 127.0298),
      zoom: 14,
    };

    // 맵 생성
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 여러 마커의 위치와 정보를 배열로 정의합니다.
    // const markerPositions = [
    //   { 
    //     lat: 37.49440, 
    //     lng: 127.0298, 
    //     title: { }, 
    //     content: { } 
    //   },
    //   { 
    //     lat: 37.5013, 
    //     lng: 127.0374, 
    //     title: '한솥 도시락', 
    //     content: '<div><h4>식장 2</h4><p>서울 서초구 ...</p></div>' 
    //   },
    //   { 
    //     lat: 37.4908, 
    //     lng: 127.0175, 
    //     title: '꾸이한끼', 
    //     content: '<div><h4>식장 3</h4><p>서울 송파구 ...</p></div>' 
    //   },
    // ];

    // infowindow 객체를 생성합니다.
    const infowindow = new naver.maps.InfoWindow({
      anchorSkew: true, // Infowindow가 마커에 연결될 때 기울어짐 여부
    });

    // storeData 배열을 순회하면서 마커와 클릭 이벤트를 생성합니다.
    storeData.forEach((store) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(store.storeLocation.lat, store.storeLocation.lng),
        map: map,
        title: store.storeName, // title을 storeName으로 설정
      });


      // 마커 클릭 이벤트를 추가합니다.
      naver.maps.Event.addListener(marker, 'click', function () {
        const content = `
          <div>
            <h4>${store.storeName}</h4>
            <p>${store.details}</p>
          </div>
        `;
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    });
  }, [storeData]); // storeData가 변경될 때마다 실행

  return <div ref={mapElement} style={{ width: '95%', height: '700px' }} />;
};

export default Map;