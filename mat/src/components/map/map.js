import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Map = () => {
  const mapElement = useRef(null);
  // store에 관한 DATA 저장
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

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    // 처음 위치 설정
    const mapOptions = {
      center: new naver.maps.LatLng(37.49440, 127.0298),
      zoom: 17,
    };

    // 맵 생성
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // infowindow 객체를 생성합니다.
    const infowindow = new naver.maps.InfoWindow({
      anchorSkew: true, // Infowindow가 마커에 연결될 때 기울어짐 여부
    });

    // store 배열을 순회하면서 마커와 클릭 이벤트를 생성합니다.(id 기준으로)
    store.forEach((storeItem) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(storeItem.storeLocationLat, storeItem.storeLocationLng),
        map: map,
        title: storeItem.storeName, // title을 storeName으로 설정
      });

      // 마커 클릭 이벤트를 추가합니다.
      naver.maps.Event.addListener(marker, 'click', function () {
        const content = `
          <div>
            <h4>${storeItem.storeName}</h4>
            <p>${storeItem.details}</p>
          </div>
        `;
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    });
  }, [store]); // store가 변경될 때마다 실행

  return <div ref={mapElement} style={{ width: '30%', height: '700px' }} />;
};

export default Map;