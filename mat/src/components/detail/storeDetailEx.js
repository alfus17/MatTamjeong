import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider } from '@mui/material';
import axios from 'axios';

function ExDetail() {
    const { storeId } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/DetailPage/getDetailStore', { storeId });
                console.log(response.data);
                setDetail(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            }
        };
        
        fetchData();
    }, [storeId]);

    const averageRating = detail.Ratings ? detail.Ratings.avgRating.toFixed(1) : '0';

    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src={detail.StoreInfo?.storeimg} // `storeimg`는 예시, 실제 데이터에 맞게 수정
                                alt={detail.StoreInfo?.storeName}
                                sx={{
                                    width: '100%',
                                    maxHeight: 500,
                                    minHeight: 390,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    mb: 2
                                }}
                            />
                            <Typography variant="h5" component="h1" sx={{ mt: 1 }}>
                                {detail.StoreInfo?.storeName}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            메뉴
                        </Typography>
                        <List>
                            {detail.StoreMenu && detail.StoreMenu.map((menuItem, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={menuItem.menuName} />
                                    <Typography variant="body1">
                                        {menuItem.price.toLocaleString()}원
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>

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

                    <Box sx={{ mt: 4 }}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                            <Typography variant="body1">
                                {detail.StoreInfo?.storeAddress}
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    리뷰
                </Typography>
                <Paper elevation={1} sx={{ p: 8 }}>
                    <List>
                        {detail.MatReviews && detail.MatReviews.map((review, index) => (
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
                                        secondary={review.matReviewContent}
                                    />
                                </ListItem>
                                {index < detail.MatReviews.length - 1 && <Divider variant="inset" />}
                            </Box>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Container>
        
    );
}

export default ExDetail;
