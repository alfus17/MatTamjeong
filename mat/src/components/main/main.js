import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Container, Grid, Paper, IconButton, Typography, Rating, Tabs, Tab } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Map from '../map/map';

function Main() {
  const [store, setStore] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  const [visibleStores, setVisibleStores] = useState(4);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tab, setTab] = useState('two');
  const [page, setPage] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    fetchStoreByLocation('강남', 1); // 처음에 강남 데이터를 불러옴
  }, []);

  const fetchStoreByLocation = async (location, page) => {
    page =1;
    console.log(`Fetching stores for location: ${location}, page: ${page}`);
    try {
      const response = await axios.post(`/store/getLCStore/${page}`, {
        categoryName: { categoryName: location }
      });
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error fetching store data:', error.response ? error.response.data : error.message);
    }
  };

  const handleShowMore = () => {
    setVisibleStores((prevVisible) => prevVisible + 4);
  };

  const handleImageClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const handleNextSlide = () => {
    if (currentSlide < (filterStore.length > 0 ? filterStore : store).length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const averageRating = store.length > 0 ? (store.reduce((acc, item) => acc + item.avgRating, 0) / store.length).toFixed(1) : '0';

  const handleOnChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Tabs
          value={tab}
          textColor="primary"
          onChange={handleOnChange}
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="지도로 보기" sx={{ mr: 20, fontWeight: 'bold', fontSize: '18px' }} />
          <Tab value="two" label="맛집 추천" sx={{ mr: 20, fontWeight: 'bold', fontSize: '18px' }} />
          <Tab value="three" label="리스트로 보기" sx={{ fontWeight: 'bold', fontSize: '18px' }} />
        </Tabs>
      </Box>
      <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#FFEEA9' }}>
        {tab === 'one' && (
          <>
            <Box sx={{ width: '100%', height: '10px' }} />
            <Card elevation={3} sx={{ maxWidth: "100%", margin: "0 auto", mt: 2, mb: 4, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '0px', gap: '30px', mt: 2 }}>
                <Button onClick={() => fetchStoreByLocation('강남')}>
                  <Typography sx={{ fontWeight: 'bold' }}>강남</Typography>
                </Button>
                <Button onClick={() => fetchStoreByLocation('홍대')}>
                  <Typography sx={{ fontWeight: 'bold' }}>홍대</Typography>
                </Button>
                <Button onClick={() => fetchStoreByLocation('명동')}>
                  <Typography sx={{ fontWeight: 'bold' }}>명동</Typography>
                </Button>
                <Button onClick={() => fetchStoreByLocation('신촌')}>
                  <Typography sx={{ fontWeight: 'bold' }}>신촌</Typography>
                </Button>
                <Button onClick={() => fetchStoreByLocation('종로')}>
                  <Typography sx={{ fontWeight: 'bold' }}>종로</Typography>
                </Button>
                <Button onClick={() => fetchStoreByLocation('동대문')}>
                  <Typography sx={{ fontWeight: 'bold' }}>동대문</Typography>
                </Button>
              </Box>
              <Card elevation={3} sx={{ maxWidth: "100%", margin: "0 auto", mt: 1, mb: 4, borderRadius: 3 }}>
                <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
                  <Map storeData={store} height="700px" />
                </Box>
              </Card>
            </Card>
          </>
        )}

        {tab === 'two' && (
          <>
            <Box sx={{ width: '100%', height: '10px' }} />
            <Card elevation={3} sx={{ maxWidth: "60%", margin: "0 auto", mt: 2, mb: 4, borderRadius: 3 }}>
              <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
                <Map storeData={store} height="450px" />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '0px', gap: '30px' }}>
                    <Button onClick={() => fetchStoreByLocation('강남')}>
                      <Typography sx={{ fontWeight: 'bold' }}>강남</Typography>
                    </Button>
                    <Button onClick={() => fetchStoreByLocation('홍대')}>
                      <Typography sx={{ fontWeight: 'bold' }}>홍대</Typography>
                    </Button>
                    <Button onClick={() => fetchStoreByLocation('명동')}>
                      <Typography sx={{ fontWeight: 'bold' }}>명동</Typography>
                    </Button>
                    <Button onClick={() => fetchStoreByLocation('신촌')}>
                      <Typography sx={{ fontWeight: 'bold' }}>신촌</Typography>
                    </Button>
                    <Button onClick={() => fetchStoreByLocation('종로')}>
                      <Typography sx={{ fontWeight: 'bold' }}>종로</Typography>
                    </Button>
                    <Button onClick={() => fetchStoreByLocation('동대문')}>
                      <Typography sx={{ fontWeight: 'bold' }}>동대문</Typography>
                    </Button>
                  </Box>
                  {selectedLocation && (
                    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", mt: 2 }}>
                      <IconButton onClick={handlePrevSlide} sx={{ position: 'absolute', left: 0, top: '50%', zIndex: 1 }} disabled={currentSlide === 0}>
                        <ArrowBackIosIcon />
                      </IconButton>
                      <Box sx={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentSlide * 25}%)`,
                      }}>
                        {(filterStore.length > 0 ? filterStore : store).map((item, index) => (
                          <Box key={index} sx={{ padding: 2, display: 'flex', alignItems: 'center' }} onClick={() => handleImageClick(item.storeId)}>
                            <img
                              src={item.menuUrl}
                              alt={item.storeName}
                              style={{ width: '180px', height: '150px', objectFit: 'cover', marginRight: '16px' }}
                            />
                            <Box>
                              <Typography variant="h6">{item.storeName}</Typography>
                              <Typography variant="body2">{item.storeAddress}</Typography>
                              <Rating name="total-rating" value={parseFloat(averageRating)} readOnly precision={0.5} />
                              <Typography variant="h6" component="p" sx={{ ml: 2 }}>{averageRating}/5</Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                      <IconButton onClick={handleNextSlide} sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 1 }} disabled={currentSlide >= (filterStore.length > 0 ? filterStore : store).length - 4}>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Box>
                  )}
                </Grid>
              </Box>
            </Card>
          </>
        )}

        {tab === 'three' && (
          <Card elevation={3} sx={{ maxWidth: "80%", margin: "0 auto", mt: 2, mb: 4, borderRadius: 3 }}>
            <Box sx={{ maxWidth: '100%', margin: '0 auto', p: 2 }}>
              {/* 리스트로 보기 내용 추가 */}
            </Box>
          </Card>
        )}
      </Container>
    </>
  );
}

export default Main;
