import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions, Avatar, TextField } from '@mui/material';
import axios from 'axios';
// import AddReview from '../../review/review';

function ExDetail() {
    const { storeId } = useParams();
    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false); // Dialog open state
    console.log("detail : ", detail);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/Page/getDetailStore', { storeId });
                console.log("useEffect :",response.data);
                setDetail(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            }
        };
        
        fetchData();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const averageRating = detail.Ratings ? detail.Ratings.avgRating.toFixed(1) : '0';
    console.log(detail.data);
    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            <Grid container spacing={4}>
                {/* 가게 정보 */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src={detail.StoreInfo?.menuUrl}
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

                {/* 메뉴 및 별점 */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 , height:'400px'}}>
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

                    <Box sx={{ mt: 2 }}>
                        <Paper elevation={1} sx={{ p: 2 }}>
                            <Typography variant="body1">
                                {detail.StoreInfo?.storeAddress}
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

            {/* 리뷰 섹션 */}
            <Box sx={{ mt: 4 }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        리뷰
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ ml: 3, mt: 3, mb: 2, width: '100px', height: '40px' }}
                        onClick={handleClickOpen}
                    >
                        등록하기
                    </Button>
                </Box>

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

            {/* Dialog 컴포넌트 */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{height:'800px'}} >
            <Container maxWidth="md" sx={{ mt: 4 , height:'800px'}}>
            <Grid >
               
                     <Box>
                        <Typography  color="primary" sx={{ textAlign: "center" , mb:2, fontSize:'20px'}}>
                            리뷰를 써보세요 
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        mt : 4
                    }}>
                    <Avatar src="https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg" />
                    <Typography  color="primary" sx={{ textAlign: "center" ,  fontSize:'20px', ml :2 , mt:1}}>
                        내 닉네임
                    </Typography>
                    </Box>

                    <Box sx={{
                        mt :4
                    }}>
                    <Typography  color="primary" sx={{   fontSize:'20px', ml :2 , mt:1}}>
                        가게 이름 
                    </Typography>
                    </Box>
                    <Box sx={{
                        display : 'flex',
                        justifyContent :' right'
                        
                    }}>
                        <Rating />
                    </Box>

                    <Box sx={{
                        mt : 1,
                        maxHeight :'1000px',
                        justifyContent : 'center'
                    }}>           

                    {/* text Field 데이터        */}
                    
                     <TextField
                         id="reviewContnet"
                         label="review"
                         multiline
                         rows={13}
                         placeholder="리뷰를 작성하세요."
                         sx={{
                            width :'700px',
                         }}                       
                    />  
                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt : 3,
                                mb: 2,
                                width: '100px',
                                height:'40px'
                            }}
                            onClick={handleClose}
                            >
                    취소
                    </Button>

                    <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                ml: 3,
                                mt: 3,
                                mb: 2,
                                width: '100px',
                                height:'40px'
                            }}
                            >
                    등록하기
                    </Button>
                    
                    </Box>
            </Grid>
        </Container>
            </Dialog>
        </Container>
        
    );
}

export default ExDetail;
