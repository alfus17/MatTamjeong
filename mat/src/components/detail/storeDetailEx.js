import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // storeId를 받기 위해 useParams 사용
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider } from '@mui/material';
import axios from 'axios';

function ExDetail() {
    // const { storeId } = useParams(); // URL에서 storeId 추출
    const [store, setStore] = useState({});

    // useEffect(() => {
    //     // storeId로 가게 상세 정보를 불러오는 함수
    //     const fetchData = async (id) => {
    //         try {
    //             const response = await axios.post('/DetailPage/getDetailStore', { storeId : id });
    //             console.log(response.data);
    //             setStore(response.data);  // response 데이터를 store에 저장
    //         } catch (error) {
    //             console.error('Error fetching store data:', error);
    //         }
    //     };
        
    //     fetchData(storeId);  // 컴포넌트가 로드될 때 storeId로 데이터 불러옴
    // }, [storeId]);
        // url상에 파라미터 없으면 스토어 아이디 기본 1로 지정
        const {storeId =9} = useParams();
        console.log(storeId);
        const [storeDetails, setStoreDetails] = useState(null);
    
        useEffect(() => {
            const fetchStoreDetails = async () => {
              try {
                const response = await axios.post(`/DetailPage/getDetailStorasdfasdfe`,{storeId : storeId}).then(result =>{
                    console.log(result.data);
                });
                console.log(response.data);
                setStoreDetails(response.data);
              } catch (error) {
                console.error('Error fetching store details:', error);
              }
            };
            
            fetchStoreDetails();
        }, [storeId]);
    

    // 별점 평균 계산 - 데이터가 있는 경우에만 계산
    const averageRating = store.reviews && store.reviews.length > 0
        ? (store.reviews.reduce((acc, review) => acc + review.rating, 0) / store.reviews.length).toFixed(1)
        : 0;
    console.log(storeId);
    console.log(store);
    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            {/* 가게 정보와 메뉴를 포함하는 그리드 레이아웃 */}
            <Grid container spacing={4}>
                {/* 왼쪽: 가게 이미지와 이름 */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src={store.storeInfo.storeimg}  // storeInfo가 있는 경우에만 접근
                                alt={store.name}
                                sx={{
                                    width: '100%',
                                    maxHeight: 500, // 최대 높이 조정
                                    minHeight: 390, // 최소 높이 추가
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    mb: 2
                                }}
                            />
                            <Typography variant="h5" component="h1" sx={{ mt: 1 }}>
                                {store.storeName}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* 오른쪽: 메뉴와 별점 */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            메뉴
                        </Typography>
                        <List>
                            {store.menu && store.menu.map((menuItem, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={menuItem.name} /> {/* 메뉴 이름 */}
                                    <Typography variant="body1">
                                        {menuItem.price.toLocaleString()}원 {/* 메뉴 가격 */}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>

                        {/* 총 별점 표시 */}
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', marginLeft: "30px" }}>
                            <Typography variant="h6" component="p" sx={{ mr: 2 }}>
                                총 별점:
                            </Typography>
                            <Rating name="total-rating" value={parseFloat(averageRating)} readOnly precision={0.5} />
                            <Typography variant="h6" component="p" sx={{ ml: 2 }}>
                                {averageRating}/5
                            </Typography>
                        </Box>
                    </Paper>

                    {/* 가게 주소 섹션 */}
                    <Box sx={{ mt: 4 }}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                            <Typography variant="body1">
                                서울 강남시 더조은 학원 502-152번지
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

            {/* 리뷰 리스트 */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    리뷰
                </Typography>
                <Paper elevation={1} sx={{ p: 8 }}>
                    <List>
                        {store.reviews && store.reviews.map((review, index) => (
                            <Box key={index}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" component="span">
                                                    {review.user}
                                                </Typography>
                                                <Rating name={`rating-${index}`} value={review.rating} readOnly precision={0.5} />
                                            </Box>
                                        }
                                        secondary={review.comment}
                                    />
                                </ListItem>
                                {index < store.reviews.length - 1 && <Divider variant="inset" />}
                            </Box>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Container>
    );
}

export default ExDetail;
