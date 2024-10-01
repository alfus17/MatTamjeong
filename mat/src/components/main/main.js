import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Container, Grid, Paper, IconButton, Typography, Tabs, Tab, Icon } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Map from '../map/map';
import { Rating } from '@mui/material';
import { set } from 'date-fns';
import { CateButton } from './button';
import StarIcon from '@mui/icons-material/Star';

function Main() {
  const [store, setStore] = useState([]); // 가게 리스트
  const [selectedLocation, setSelectedLocation] = useState('강남');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tab, setTab] = useState('two');
  const [totalPages, setTotalPages] = useState(1);
  const [filterStore, setFilterStore] = useState([]); // 추가: filterStore 초기화
  const navigate = useNavigate();
  // 페이지
  const [page, setPage] = useState(1);

  const locations = ['강남', '홍대', '명동', '신촌', '종로', '동대문'];

  console.log(page)
  
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


  useEffect(() => {
    fetchStoreByLocation(selectedLocation, page);
  }, [selectedLocation, page]);



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

  let dcRating = store?.Ratings?.dcRating.toFixed(1) || 0.0;

  let kgRating = store?.Ratings?.kgRating.toFixed(1) || 0.0;

  let matRating = store?.Ratings?.matRating.toFixed(1) || 0.0;

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Tabs value={tab} onChange={handleOnChange}>
          <Tab value="one" label="지도로 보기" sx={{fontWeight:'bold', mr:20 , fontSize:'20px'}}/>
          <Tab value="two" label="맛집 추천" sx={{fontWeight:'bold', mr:20,fontSize:'20px'}}/>
          <Tab value="three" label="리스트로 보기" sx={{fontWeight:'bold',fontSize:'20px'}} />
        </Tabs>
      </Box>

      <Container disableGutters maxWidth={false} >
        <Box sx={{ backgroundColor: '#fb8c00ff' ,height:'100%'}}>
        {/* 첫번째 탭 */}
      {tab === 'one' && (
        <>
         <Box sx={{width:'100%', height:'10px'}}/>
         <Card elevation={3} sx={{  maxWidth: "100%", margin: "0 auto" , mt:2  ,borderRadius: 3}}>
         <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: '  0px', // 버튼들 위에 여백 추가
                  gap:'30px',  
                  mt:2 
                 
                }}
              >
        <CateButton  locations={locations} fetchStoreByLocation={fetchStoreByLocation} setPage={setPage}/> 
        </Box>
         <Card elevation={3} sx={{ maxWidth: "100%", margin: "0 auto", mt: 1,borderRadius: 3 }}>
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
            <Box sx={{ width: '100%', height: '10px' }} />
            <Card elevation={3} sx={{ maxWidth: '60%', margin: '0 auto', mt: 2, mb: 4, borderRadius: 3 }}>
              <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
                <Map storeData={store} height="450px" />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', mt: 2 }}>
                  <CateButton  locations={locations} fetchStoreByLocation={fetchStoreByLocation} setPage={setPage}/>
                  </Box>

                  {selectedLocation && (
                    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', mt: 2 }}>
                      <IconButton
                        onClick={handlePrevSlide}
                        sx={{ position: 'absolute', left: 0, top: '50%', zIndex: 1 }}
                        disabled={currentSlide === 0}
                      >
                        <ArrowBackIosIcon />
                      </IconButton>

                      <Box
                        sx={{
                          display: 'flex',
                          transition: 'transform 0.5s ease-in-out',
                          width: `${store.length * 33.33}%`,
                          transform: `translateX(-${currentSlide * 30}%)`, // 슬라이드 이동
                        }}
                      >
                        {store.map((item, index) => (
                          <Box
                            key={index}
                            sx={{ padding: 2, width: '33.33%',display:'flex'}} // Each slide takes up 33.33% of the width
                            onClick={() => handleImageClick(item.storeId)}
                          >
                            <img
                              src={item.menuUrl}
                              alt={item.storeName}
                              style={{ width: '180px', height: '150px', objectFit: 'cover', marginRight: '16px' }}
                            />
                            <Box sx={{ width: '100%' ,ml:1}}>
                            <Typography 
                                sx={{ 
                                  fontSize: '18px', 
                                  lineHeight: '1.2em', 
                                  height: '1.2em', // 최대 2줄로 제한
                                  overflow: 'hidden', 
                                  textOverflow: 'ellipsis', 
                                  display: '-webkit-box', 
                                  WebkitLineClamp: 2, 
                                  WebkitBoxOrient: 'vertical' 
                                }}
                              >
                                {item.storeName}
                              </Typography>
                            <Box sx={{mt:2, display:'flex' ,flexDirection:'column'}}>

                              <Box sx={{display:'flex',mt:0.3}}>
                              <Typography sx={{fontFamily:'Do Hyeon'}}>카카오</Typography>
                              <StarIcon sx={{color:'#dd3333',ml:2,}} />
                              <Typography sx={{ml:0.5 , fontSize:'20px' ,fontFamily:'Jua',color:'#fa7e0a',lineHeight:'26px'}}>{item.kgRating.toFixed(1) || 0.0}</Typography>
                              </Box>

                              <Box sx={{display:'flex', mt:1}}>
                              <Typography sx={{fontFamily:'Do Hyeon'}}>다이닝</Typography>
                              <StarIcon sx={{color:'#dd3333', ml:2}} />
                              <Typography sx={{ml:0.5, fontSize:'20px',fontFamily:'Jua',color:'#fa7e0a',lineHeight:'26px'}}>{item.dcRating.toFixed(1) || 0.0}</Typography>
                              </Box>

                              <Box sx={{display:'flex', mt:1}}>
                              <Typography sx={{fontFamily:'Do Hyeon'}}>맛탐정</Typography>
                              <StarIcon sx={{color:'#dd3333', ml:2}} />
                              <Typography sx={{ml:0.5, fontSize:'20px',fontFamily:'Jua',color:'#fa7e0a',lineHeight:'26px'}}>{item.matRating.toFixed(1) || 0.0}</Typography>
                              </Box>
                              
                            </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>

                      <IconButton
                        onClick={handleNextSlide}
                        sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 1 }}
                        disabled={currentSlide >= Math.ceil(store.length / 3) - 1}
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Box>
                  )}
                </Grid>
              </Box>
            </Card>
          </>
        )}

        {/* 세번째 탭 */}
        {tab === 'three' && (
          <>
           <Box sx={{ width: '100%', height: '10px' }} />
          <Card elevation={3} sx={{ maxWidth: "80%", margin: "0 auto", mt: 2, mb: 4, borderRadius: 3 }}>
          <Box sx={{ maxWidth: '100%', margin: '0 auto', p: 2 }}>
            {/* 지역 버튼 */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', mb: 2 }}>
            <CateButton  locations={locations} fetchStoreByLocation={fetchStoreByLocation} setPage={setPage}/>
            </Box>
            
            {/* 가게 리스트 표시 */}
            <Box>
              {(filterStore.length > 0 ? filterStore : store).map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    borderTop:'1px solid #D3D3D3',
                    p: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // 작은 화면에서는 세로 배치
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  {/* 가게 이미지 */}
                  <Box sx={{ width: { xs: '100%', md: '16%' }, mb: { xs: 2, md: 0 } }}>
                    <img
                      src={item.menuUrl}
                      alt={item.storeName}
                      onClick={() => handleImageClick(item.storeId)}
                      style={{
                        width: '200px',
                        height: '150px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                      }}
                    />
                  </Box>

                  {/* 가게 정보 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ml: 2 }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                      {item.storeName}
                    </Typography>
                    <Typography sx={{mt:6}}>{item.storeAddress}</Typography>
                  </Box>

                  {/* 맛탐정 별점 */}
                  <Box sx={{textAlign:'center',mr:4}}>
                  <Typography variant='h6'>맛탐정</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 'auto',
                      ml: 2,
                      mt:2
                    }}
                  >                 
                    <Rating
                      name="total-rating"
                      value={parseFloat(item.matRating)}
                      readOnly
                      precision={0.5}
                    />
                    <Typography sx={{  fontSize: '24px', ml:2,fontFamily:'Jua',color:'#fa7e0a' }}>
                      {item.matRating.toFixed(1) || 0.0}
                    </Typography>
                  </Box>
                  </Box>

                  {/* 카카오별점 */}
                  <Box sx={{textAlign:'center' ,mr:4}}>
                  <Typography variant='h6'>카카오</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 'auto',
                      ml: 2,
                      mt:2
                    }}
                  >                 
                    <Rating
                      name="total-rating"
                      value={parseFloat(item.kgRating)}
                      readOnly
                      precision={0.5}
                    />
                    <Typography sx={{ ml: 2, fontSize: '24px',fontFamily:'Jua',color:'#fa7e0a' }}>
                      {item.kgRating.toFixed(1) || 0.0}
                    </Typography>
                  </Box>
                  </Box>

                  {/* 다이닝별점 */}
                  <Box sx={{textAlign:'center'}}>
                  <Typography variant='h6'>다이닝</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 'auto',
                      ml: 2,
                      mt:2
                    }}
                  >                 
                    <Rating
                      name="total-rating"
                      value={parseFloat(item.dcRating)}
                      readOnly
                      precision={0.5}
                    />
                    <Typography sx={{ ml: 2, fontSize: '24px',fontFamily:'Jua',color:'#fa7e0a'}}>
                      {item.dcRating.toFixed(1) || 0.0}
                    </Typography>
                  </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* 더보기 버튼 */}
            {page < totalPages && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button variant="contained" onClick={handleShowMore}>더보기</Button>
              </Box>
            )}
          </Box>
        </Card>
        </>
        )}
        <Box sx={{width:'100%', height:'20px'}}></Box>
        </Box>
      </Container>
    </>
  );
}

export default Main;