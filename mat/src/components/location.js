import React, { useEffect, useRef } from 'react';

const Location = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    const mapOptions = {
      center: new naver.maps.LatLng(37.49440, 127.0298),
      zoom: 13,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 여러 마커의 위치와 정보를 배열로 정의합니다.
    const markerPositions = [
      { 
        lat: 37.49440, 
        lng: 127.0298, 
        title: '코리안 치킨 클럽', 
        content: '<div><img src</div>' 
      },
      { 
        lat: 37.5013, 
        lng: 127.0374, 
        title: '한솥 도시락', 
        content: '<div><h4>식장 2</h4><p>서울 서초구 ...</p></div>' 
      },
      { 
        lat: 37.4908, 
        lng: 127.0175, 
        title: '꾸이한끼', 
        content: '<div><h4>식장 3</h4><p>서울 송파구 ...</p></div>' 
      },
    ];

    // infowindow 객체를 생성합니다.
    const infowindow = new naver.maps.InfoWindow({
      anchorSkew: true, // Infowindow가 마커에 연결될 때 기울어짐 여부
    });

    // markerPositions 배열을 순회하면서 마커와 클릭 이벤트를 생성합니다.
    markerPositions.forEach((position) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(position.lat, position.lng),
        map: map,
        title: position.title,
      });

      // 마커 클릭 이벤트를 추가합니다.
      naver.maps.Event.addListener(marker, 'click', function () {
        infowindow.setContent(position.content);
        infowindow.open(map, marker);
      });
    });
  }, []);

  return <div ref={mapElement} style={{ width: '80%', height: '400px' }} />;
};

export default Location;
