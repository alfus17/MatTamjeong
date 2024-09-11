import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

/*  
    맵 컴포넌트 사용시 파라미터 종류
    width             : 지도 가로
    height            : 지도 세로
    locationCategory  : 지도에 나오게할 음식점 카테고리 

    예시 ) 
    <Map  width="100%" height="700px  locationCategory="강남"  />

*/
const Map = (props) => {
  const mapElement = useRef(null);
  // store에 관한 DATA 저장
  const [store, setStore] = useState([]);

  // 파라미터로 넓이 높이 안줄경우 기본값 세팅 
  let width  =  props.width == undefined ?'100%' : props.width ;
  let height  =  props.height == undefined ?'700px'  : props.height ;

  useEffect(() => {
    // 백엔드에서 Store 데이터를 가져오는 함수
    const fetchStoreData = async () => {
      try {

        // 파라미터에 지역 태그 없을 경우 기본으로 강남으로 설정
        const location = props.locationCategory == undefined ? "강남" : props.locationCategory;
        
        // 서버에 태그를 기준으로 데이터 쿼리 
        const response = await axios.get('/store/getLCStore '); // Spring Boot API 경로
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
    // TODO 추후에 기본 위치들 배열로 다시 세팅
    const mapOptions = {
      center: new naver.maps.LatLng(37.49440, 127.0298),
      zoom: 14,
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

  return <div ref={mapElement} style={{ width: {width }, height: {height} }} />;
};

export default Map;