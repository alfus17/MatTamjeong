import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material'; // 별점 표시를 위한 MUI Rating 컴포넌트

const Map = (props) => {
  const mapElement = useRef(null);
  const store = props.storeData;
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate hook

  let width = props.width === undefined ? '100%' : props.width;
  let height = props.height === undefined ? '700px' : props.height;

  useEffect(() => {
    const { naver } = window;
    if (!naver || !store || store.length === 0) return;

    // 기본 맵 옵션 설정
    const mapOptions = {
      center: new naver.maps.LatLng(store[0].storeLocationLat, store[0].storeLocationLng),
      zoom: 16,
    };

    // 맵 생성
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 가게 이름, 메뉴 이미지, 별점을 마커처럼 표시
    store.forEach((storeItem) => {
      const content = document.createElement('div');
      content.style.position = 'absolute';
      content.style.padding = '5px 10px';
      content.style.backgroundColor = '#fff';
      content.style.border = '2px solid #333';
      content.style.borderRadius = '10px'; // 둥근 테두리로 마커 느낌 추가
      content.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      content.style.fontFamily = 'Arial, sans-serif';
      content.style.fontSize = '12px';
      content.style.color = '#333';
      content.style.textAlign = 'center';
      content.style.cursor = 'pointer';
      content.style.transform = 'translateY(-100%)'; // 마커가 위치를 가리키도록 이동

      // 가게 이름
      const storeName = `<strong>${storeItem.storeName}</strong>`;
      
      // 메뉴 이미지
      const menuImage = storeItem.menuUrl 
        ? `<img src="${storeItem.menuUrl}" alt="menu" style="width: 100px; height: 70px; margin-top: 5px; object-fit: cover; border-radius: 8px;" />`
        : ''; // 메뉴 이미지가 있을 경우만 표시

      // 별점 (MUI의 별점 대신 HTML로 별점 표시)
      const ratingStars = storeItem.rating 
        ? `<div style="margin-top: 5px;"><strong>Rating: ${storeItem.rating}/5</strong></div>`
        : '';

      content.innerHTML = `${storeName} ${menuImage} ${ratingStars}`;

      // 마커처럼 보이는 아래 삼각형 부분 추가
      const triangle = document.createElement('div');
      triangle.style.width = '0';
      triangle.style.height = '0';
      triangle.style.borderLeft = '10px solid transparent';
      triangle.style.borderRight = '10px solid transparent';
      triangle.style.borderTop = '15px solid #333'; // 마커 아래 부분 삼각형
      triangle.style.position = 'absolute';
      triangle.style.left = '50%';
      triangle.style.bottom = '-15px';
      triangle.style.transform = 'translateX(-50%)';

      content.appendChild(triangle); // 삼각형을 마커에 추가

      // hover 스타일 추가
      content.addEventListener('mouseenter', () => {
        content.style.backgroundColor = '#f0f0f0';
        content.style.transform = 'translateY(-105%) scale(1.05)';
        content.style.transition = 'transform 0.3s ease';
      });

      content.addEventListener('mouseleave', () => {
        content.style.backgroundColor = '#fff';
        content.style.transform = 'translateY(-100%) scale(1)';
      });

      // 클릭 시 navigate로 이동
      content.addEventListener('click', () => {
        navigate(`/store/${storeItem.storeId}`);
      });

      const position = new naver.maps.LatLng(storeItem.storeLocationLat, storeItem.storeLocationLng);

      const overlay = new naver.maps.OverlayView();
      overlay.onAdd = function () {
        const panes = this.getPanes();
        panes.overlayLayer.appendChild(content);
      };

      overlay.draw = function () {
        const projection = this.getProjection();
        const positionPoint = projection.fromCoordToOffset(position);

        content.style.left = positionPoint.x + 'px';
        content.style.top = positionPoint.y + 'px';
      };

      overlay.setMap(map);
    });
  }, [store, navigate]);

  return <div ref={mapElement} style={{ width: width, height: height }} />;
};

export default Map;
