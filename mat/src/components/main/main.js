import { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/main.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import {  Box, Button, Container, Grid, Paper } from '@mui/material';
import Map from '../map/map';

function Main() {
  const [store, setStore] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate hook

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

  const handleImageClick = (storeId) => {
    // 클릭 시 해당 가게 ID로 StoreDetails 페이지로 이동
    navigate(`/store/${storeId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true, // 중앙 모드 활성화
    centerPadding: "0px", // 슬라이드 양쪽 여백 설정
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
     <Container disableGutters maxWidth={false}> {/* Container 여백 제거 및 최대 넓이로 */}
      <Grid item xs={12} md={6}>
        <Paper  elevation={3} sx={{ 
          p: 2, 
          maxWidth:"70%",
          margin:"0 auto"
        }}>
          <Box>
     <Map  storeData={store} height="600px" />
     </Box>
     </Paper>
     </Grid>
      <Grid>
        <Paper sx={{
          marginTop:"50px"
        }}>
          
    <div className="gangline">
      {/* 지역 선택 버튼들 */}
      <div className='buttons'>
      <Button onClick={() => fetchStoreByLocation('강남') }># 강남 </Button>
      <Button onClick={() => fetchStoreByLocation('홍대')}># 홍대 ,</Button>
      <Button onClick={() => fetchStoreByLocation('명동')}># 명동 ,</Button>
      <Button onClick={() => fetchStoreByLocation('신촌')}># 신촌 ,</Button>
      <Button onClick={() => fetchStoreByLocation('종로')}># 종로 ,</Button>
      <Button onClick={() => fetchStoreByLocation('동대문')}># 동대문</Button>
      </div>
      
      {selectedLocation && (
        <Slider {...settings}>
          {(filterStore.length > 0 ? filterStore : store).map((item, index) => (
            <div key={index} className="store-item">
              <ul className='slidebox'>
              <li>
                    <img 
                      src={item.storeimg} 
                      className="store-image" 
                      alt={item.storeName} 
                      onClick={() => handleImageClick(item.storeId)} // 클릭 이벤트 추가
                    />
                  </li>
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
    </Paper>
    </Grid>
    </Container>
    </>
  );
}

export default Main;
