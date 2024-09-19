import React, { useEffect, useRef } from 'react';

const Map = (props) => {
  const mapElement = useRef(null);
  const store = props.storeData;

  let width = props.width === undefined ? '100%' : props.width;
  let height = props.height === undefined ? '700px' : props.height;

  useEffect(() => {
    const { naver } = window;
    // naver 객체나 store 배열이 유효한지 확인
    if (!naver || !store || store.length === 0) return;

    // 기본 맵 옵션 설정 (store[0]이 있을 때만 설정)
    const mapOptions = {
      center: new naver.maps.LatLng(store[0].storeLocationLat, store[0].storeLocationLng), // 초기 좌표 설정
      zoom: 14,
    };

    // 맵 생성
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    const infowindow = new naver.maps.InfoWindow({
      anchorSkew: true,
    });

    // 마커 생성 및 클릭 이벤트 추가
    store.forEach((storeItem) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(storeItem.storeLocationLat, storeItem.storeLocationLng),
        map: map,
        title: storeItem.storeName,
      });

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
  }, [store]);

  return <div ref={mapElement} style={{ width: width, height: height }} />;
};

export default Map;
