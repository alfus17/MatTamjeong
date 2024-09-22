import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider, Button, Dialog, Avatar, TextField, styled, Icon, IconButton } from '@mui/material';
import axios from 'axios';
import AddReview from '../review/review';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
}));

function ExDetail() {
    const { storeId } = useParams(); // 받아온 가게 아이디
    const [detail, setDetail] = useState({}); // 가게 정보
    const [open, setOpen] = useState(false); // dialog 창 열고 닫기
    const [isBookmarked, setIsBookmarked] = useState(false); // 북마크

    console.log("여기에요 ----",detail);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/Page/getDetailStore', { storeId });
                console.log(response.data);
                setDetail(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            }
        };
        
        fetchData();
    }, [storeId]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleBookmark = () => {
        setIsBookmarked(prev => !prev);
    };

    let avgRating = detail?.Ratings?.avgRating.toFixed(1) || 0.0;

    let dcRating = detail?.Ratings?.dcRating || 0.0;

    let kgRating = detail?.Ratings?.kgRating || 0.0;

    let matRating = detail?.Ratings?.matRating || 0.0;

    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#F7EED3' , mt:2}}>
            {/* 전체영역 */}
            <Box sx={{width:'100%', height:'10px'}}/>
            <Paper elevation={5} sx={{ position: 'relative', p: 2, margin: '0 auto', backgroundColor: '#A67B5B', maxWidth: '60%', mt: 2, borderRadius: 3 }}>
            {/* Bookmark Icon at the top-left corner */}
            <IconButton 
                    sx={{
                        position: 'absolute',
                        top: 18, 
                        left: 15,
                        fontSize: '2rem',
                    }} 
                    onClick={toggleBookmark}
                >
                    {isBookmarked ? <BookmarkIcon sx={{ fontSize: '3rem', color: '#FFD700' }} /> : <BookmarkBorderOutlinedIcon sx={{ fontSize: '3rem', color: '#96927a' }} />}
                </IconButton>

                <Grid container spacing={2}>
                    {/*왼쪽 영역 */}
                    
                    <Grid item xs={4}>
                        <Item sx={{ height: '500px' }}>
                            <Box sx={{ margin: '0 auto', width: '100%' }}>                         
                                <Box
                                    component="img"
                                    src={detail.StoreInfo?.menuUrl}
                                    alt={detail.StoreInfo?.storeName}
                                    sx={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        mb: 2
                                    }}
                                />
                                <Typography variant="h5" component="h1" sx={{ mt: 1, textAlign: 'center', mb: 2 }}>
                                    {detail.StoreInfo?.storeName}
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>

                    {/* 오른쪽영역 (2개 Paper) */}
                    <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid item xs={6}>
                                <Item sx={{ height: '300px' }}>
                                    <Box sx={{display:'flex' , margin:'0 auto'}}>                                 
                                    <Typography sx={{fontSize:'20px'}}>평균 별점 :</Typography> 
                                    <Rating name="total-rating" value={(avgRating)} readOnly precision={0.5} />
                                    <Typography variant="h6">{avgRating}/5</Typography>
                                    </Box>

                                    <Box sx={{display:'flex' , margin:'0 auto'}}>                                 
                                    <Typography variant="h6">다이닝 별점 :</Typography>
                                    <Rating name="total-rating" value={(dcRating)} readOnly precision={0.5} />
                                    <Typography variant="h6">{dcRating}/5</Typography>
                                    </Box>
                                    
                                                                                                    
                                    <Box sx={{display:'flex' , margin:'0 auto'}}>                                 
                                    <Typography variant="h6">카카오 별점 :</Typography>
                                    <Rating name="total-rating" value={(kgRating)} readOnly precision={0.5} />
                                    <Typography variant="h6">{kgRating}/5</Typography>
                                    </Box>

                                    <Box sx={{display:'flex' , margin:'0 auto'}}>                                 
                                    <Typography variant="h6">맛탐정 별점 :</Typography>
                                    <Rating name="total-rating" value={(matRating)} readOnly precision={0.5} />
                                    <Typography variant="h6">{matRating}/5</Typography>
                                    </Box>

                                    <Typography variant="body1">{detail.StoreInfo?.storeAddress}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{ height: '100%' }}>
                                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>메뉴</Typography>
                                <List>
                                    {detail.StoreMenu && detail.StoreMenu.map((menuItem, index) => (
                                        <ListItem key={index} sx={{ borderBottom: '1px solid #ccc' }}>
                                            <ListItemText primary={menuItem.menuName} />
                                            <Typography variant="body1">{menuItem.price.toLocaleString()}원</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                                </Item>
                            </Grid>
                        </Grid>

                        {/* 오른쪽 아래 */}
                        <Grid item xs={12} sx={{ flexGrow: 1, overflowY: 'auto', mt: 2 }}>
                            <Item sx={{ height :'100%' }}>
                            <Typography variant="h6">가게 상세 정보</Typography>
                            {/* Add more details about the store here */}
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            {/* 리뷰 */}
            <Grid container spacing={2}>
            <Grid item  xs ={4} sx={{ p: 4, width: '100%', margin: '0 auto', mb: 4, mt: 3, borderRadius: 3 }}>
                <List>
                    {detail.MatReviews && detail.MatReviews.map((review, index) => (
                        <Box key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle1" component="span">{review.matReviewContent}</Typography>
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
            </Grid>
                
            <Grid item  xs ={8} sx={{ p: 4, width: '100%', margin: '0 auto', mb: 4, mt: 3, borderRadius: 3 }}>
            </Grid>
            </Grid>
            <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: 3, mt: 3, mb: 2, width: '100px', height: '40px' }}
                    onClick={handleClickOpen}
                >
                    등록하기
                </Button>
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
