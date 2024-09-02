import React, { useEffect, useRef } from 'react';

const Location = ({ lat, lng, title, content }) => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    const mapOptions = {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 16,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 마커 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map,
      title: title,
    });

    // infowindow 생성
    const infowindow = new naver.maps.InfoWindow({
      anchorSkew: true,
      content: content,
    });

    // 마커 클릭 시 infowindow 표시
    naver.maps.Event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }, [lat, lng, title, content]);

  return <div ref={mapElement} style={{ width: '800px', height: '600px' }} />;
};

export default Location;
