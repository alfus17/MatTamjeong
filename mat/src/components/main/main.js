import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Container, Grid, Paper, IconButton, Typography, Rating } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Map from '../map/map';

function Main() {
  const [store, setStore] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드를 관리할 상태
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
      setCurrentSlide(0); // 새로 데이터가 로드되면 슬라이드를 처음으로 설정
    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };

  const handleImageClick = (storeId) => {
    // 클릭 시 해당 가게 ID로 StoreDetails 페이지로 이동
    navigate(`/store/${storeId}`);
  };

  const handleNextSlide = () => {
    if (currentSlide < (filterStore.length > 0 ? filterStore : store).length - 4) {
      setCurrentSlide(currentSlide + 1); // 슬라이드를 다음으로 이동
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1); // 슬라이드를 이전으로 이동
    }
  };

  // 별점 가데이터
  const averageRating = store.Ratings ? store.Ratings.avgRating.toFixed(1) : '0';

  return (
    <>
      <Container disableGutters maxWidth={false}> {/* Container 여백 제거 및 최대 넓이로 */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 2, maxWidth: "50%", margin: "0 auto" }}>
            <Box>
              <Map storeData={store} height="450px" />
            </Box>
          </Card>
        </Grid>
        
        {/* 맵과 슬라이드 사이에 여백 추가 */}
        <Box sx={{ marginTop: "13px" }}> {/* 여백을 50px로 설정 */}
          <Grid>
            <Paper sx={{ maxWidth: "70%", margin: "0 auto", padding: 2 }}>
              {/* 지역 선택 버튼들 */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: '  0px', // 버튼들 위에 여백 추가
                  gap:'30px',   
                 
                }}
              >
                <Button  sx={{width:'80px', height:'40px', fontSize:'16px'}} onClick={() => fetchStoreByLocation('강남')}># 강남</Button>
                <Button  sx={{width:'80px', height:'40px', fontSize:'16px'}} onClick={() => fetchStoreByLocation('홍대')}># 홍대</Button>
                <Button  sx={{width:'80px', height:'40px', fontSize:'16px'}} onClick={() => fetchStoreByLocation('명동')}># 명동</Button>
                <Button  sx={{width:'80px', height:'40px', fontSize:'16px'}} onClick={() => fetchStoreByLocation('신촌')}># 신촌</Button>
                <Button  sx={{width:'80px', height:'40px', fontSize:'16px'}} onClick={() => fetchStoreByLocation('종로')}># 종로</Button>
                <Button  sx={{width:'80px', height:'40px', fontSize:'16px'}} onClick={() => fetchStoreByLocation('동대문')}># 동대문</Button>
              </Box>

              {selectedLocation && (
                <Box sx={{ width: "100%", overflow: "hidden", position: "relative", marginTop: "20px" }}> {/* 슬라이더 영역 */}
                  <IconButton
                    onClick={handlePrevSlide}
                    sx={{ position: 'absolute', left: 0, top: '50%', zIndex: 1 }}
                    disabled={currentSlide === 0}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>

                  <Box sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 25}%)`, // 슬라이드를 이동시키는 트랜스폼
                  }}>
                    {(filterStore.length > 0 ? filterStore : store).map((item, index) => (
                      <Box key={index} sx={{  padding: 2, display: 'flex', alignItems: 'center' }}> {/* 슬라이드의 너비를 25%로 설정 */}
                        <img
                          src={item.menuUrl}
                          alt={item.storeName}
                          onClick={() => handleImageClick(item.storeId)}
                          style={{ width: '180px', height: '150px', objectFit: 'cover', marginRight: '16px' }} // 이미지 크기 및 마진
                        />
                        <Box>
                          <Typography variant="h6">{item.storeName}</Typography>
                          <Typography variant="body2">{item.storeAddress}</Typography>
                          <Rating name="total-rating" value={parseFloat(averageRating)} readOnly precision={0.5} />
                          <Typography variant="h6" component="p" sx={{ ml: 2 }}>
                                {averageRating}/5
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <IconButton
                    onClick={handleNextSlide}
                    sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 1 }}
                    disabled={currentSlide >= (filterStore.length > 0 ? filterStore : store).length - 4}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              )}
            </Paper>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Main;
