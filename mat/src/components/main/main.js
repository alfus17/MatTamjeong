import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Container, Grid, Paper, IconButton, Typography, Tabs, Tab } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Map from '../map/map';
import { Rating } from '@mui/material';
import { set } from 'date-fns';

function Main() {
  const [store, setStore] = useState([]); // 가게 리스트
  const [visibleStores, setVisibleStores] = useState(4); // 보여줄 가게 수
  const [selectedLocation, setSelectedLocation] = useState('강남');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tab, setTab] = useState('two');
  const [totalPages, setTotalPages] = useState(1);
  const [filterStore, setFilterStore] = useState([]); // 추가: filterStore 초기화
  const navigate = useNavigate();
  // 페이지
  const [page, setPage] = useState(1);


  console.log(page)

  useEffect(() => {
    fetchStoreByLocation(selectedLocation, page);
  }, [selectedLocation, page]);

  const fetchStoreByLocation = async (location, pageNumber) => {
    try {
      console.log(pageNumber,location);
      const response = await axios.post(`/store/getLCStore/${pageNumber}`, { categoryName: location });
      console.log('Axios Response:', response);
      console.log('Response Data:', response.data);

      // 첫 페이지라면 새로운 데이터로 덮어쓰기, 아니면 추가
      if (pageNumber === 1) {
        setStore(response.data.storeList);
      } else {
        setStore((prevStore) => [...prevStore, ...response.data.storeList]);
      }
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };



  const handleShowMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }

  };

  const handleImageClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const handleNextSlide = () => {
    if (currentSlide < store.length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleOnChange = (event, newValue) => {
    setTab(newValue);
  };

  // 별점 데이터
  let avgRating = store?.Ratings?.avgRating.toFixed(1) || 0.0;

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Tabs value={tab} onChange={handleOnChange}>
          <Tab value="one" label="지도로 보기" />
          <Tab value="two" label="맛집 추천" />
          <Tab value="three" label="리스트로 보기" />
        </Tabs>
      </Box>

      <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#FFEEA9' }}>
        {/* 첫번째 탭 */}
      {tab === 'one' && (
        <>
         <Box sx={{width:'100%', height:'10px'}}/>
         <Card elevation={3} sx={{  maxWidth: "100%", margin: "0 auto" , mt:2 , mb:4 ,borderRadius: 3}}>
         <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: '  0px', // 버튼들 위에 여백 추가
                  gap:'30px',  
                  mt:2 
                 
                }}
              >
                 <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('강남',page);
                }}>
                  <Typography sx={{fontWeight:'bold'}}>강남</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('홍대',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>홍대</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('명동',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>명동</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('신촌',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>신촌</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('종로',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>종로</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('동대문',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>동대문</Typography></Button>     
        </Box>
         <Card elevation={3} sx={{ maxWidth: "100%", margin: "0 auto", mt: 1, mb: 4, borderRadius: 3 }}>
         <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
           <Map storeData={store} height="700px" /> {/* 지도를 크게 표시 */}
         </Box>
       </Card>
       </Card>
       </>
      )}



       {/* 두번쨰탭 */}
      {tab === 'two' && (
        <>
        <Box sx={{width:'100%', height:'10px'}}/>
          <Card elevation={3} sx={{  maxWidth: "60%", margin: "0 auto" , mt:2 , mb:4 ,borderRadius: 3}}>
            <Box sx={{maxWidth:'100%', margin:'0 auto'}}>
              <Map storeData={store} height="450px" />
            </Box>                     
        {/* 맵과 슬라이드 사이에 여백 추가 */}
        <Box sx={{ mt:1}}> {/* 여백을 50px로 설정 */}
          <Grid>                     
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: '  0px', // 버튼들 위에 여백 추가
                  gap:'30px',   
                 
                }}
              >
   
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('강남',page);
                }}>
                  <Typography sx={{fontWeight:'bold'}}>강남</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('홍대',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>홍대</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('명동',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>명동</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('신촌',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>신촌</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('종로',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>종로</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('동대문',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>동대문</Typography></Button>     
     
              </Box>

              {selectedLocation && (
                <Box sx={{ width: "100%", overflow: "hidden", position: "relative", mt:2}}> {/* 슬라이더 영역 */}
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
                      <Box key={index} sx={{  padding: 2, display: 'flex', alignItems: 'center' }}
                          onClick={() => handleImageClick(item.storeId)}
                      > {/* 슬라이드의 너비를 25%로 설정 */}
                        <img
                          src={item.menuUrl}
                          alt={item.storeName}                         
                          style={{ width: '180px', height: '150px', objectFit: 'cover', marginRight: '16px' }} // 이미지 크기 및 마진
                        />
                        <Box>
                          <Typography variant="h6">{item.storeName}</Typography>
                          <Typography variant="body2">{item.storeAddress}</Typography>
                          <Rating name="total-rating" value={parseFloat(avgRating)} readOnly precision={0.5} />
                          <Typography variant="h6" component="p" sx={{ ml: 2 }}>
                                {avgRating}/5
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
          </Grid>
        </Box>
      </Card>
      </>
      )};

       {/* 세번째 탭 */}
       {tab === 'three' && (
          <Card elevation={3} sx={{ maxWidth: "80%", margin: "0 auto", mt: 2, mb: 4, borderRadius: 3 }}>
            <Box sx={{ maxWidth: '100%', margin: '0 auto', p: 2 }}>
              {/* 버튼 추가 */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', mb: 2 }}>
              <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('강남',page);
                }}>
                  <Typography sx={{fontWeight:'bold'}}>강남</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('홍대',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>홍대</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('명동',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>명동</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('신촌',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>신촌</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('종로',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>종로</Typography>
                </Button>
                <Button  sx={{}} onClick={() =>{ 
                setPage(1);
                fetchStoreByLocation('동대문',page);
                }}>
                <Typography sx={{fontWeight:'bold'}}>동대문</Typography></Button>     
              </Box>
              {/* 가게 리스트 한 줄에 하나씩 표시, slice로 5개씩 보여줌 */}
              <Box>
                {(filterStore.length > 0 ? filterStore : store)
                  .slice(0, visibleStores)  // 처음에 5개만 보여주고, 더보기 클릭 시 추가로 보여줌
                  .map((item, index) => (
                  <Paper key={index} sx={{ mb: 3, p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor:'#FEFFD2'}}>
                    <img
                      src={item.menuUrl}
                      alt={item.storeName}
                      onClick={() => handleImageClick(item.storeId)}
                      style={{ width: '200px', height: '150px', objectFit: 'cover', marginRight: '16px' , cursor:'pointer'}}
                    />
                    <Box>
                      <Typography sx={{fontSize:'24px' , fontWeight:'bold'}}>{item.storeName}</Typography>
                      <Typography >{item.storeAddress}</Typography>
                      <Box sx={{display:'flex' , mt:2}}>
                      <Rating name="total-rating" value={parseFloat(avgRating)} readOnly precision={0.5} />
                      <Typography sx={{ml:1 , fontSize:'24px'}}>
                        {avgRating}/5
                      </Typography>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>

              {/* 더보기 버튼 */}
              {visibleStores < store.length && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button variant="contained" onClick={handleShowMore}>더보기</Button>
                </Box>
              )}
            </Box>
          </Card>
        )}
      </Container>
    </>
  );
}

export default Main;
