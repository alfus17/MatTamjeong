import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider, Button, Dialog, Avatar, TextField, styled } from '@mui/material';
import axios from 'axios';
import AddReview from '../review/review';
import { useIsLoginState } from '../login/authContext';

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
    const { storeId } = useParams();
    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);
    console.log("detail", detail==null)

    const [userinfo, setUserinfo] =  useState({});

    // const []

    // 로그인 상태 체크
    const isLogin = useIsLoginState();
    console.log("로그인 상태 : ", isLogin);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/Page/getDetailStore', { storeId });
                console.log(response.data);
                setDetail(response.data);
            } catch (error) {
                console.error('Error fetching store data:', error);
            }

            // TODO 여기 유저 아이디 session 스토리지에서 가져와서 체크 이후 유저인포 가져오기 
            // if()
            try{
                // const userRespons = await axios.post('/Page/getDetailStore', { storeId });
                // console.log(response.data);
                // setUserinfo(response.data);

            }catch (error){
                console.error('Error fetching user data:', error);
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

    const averageRating = detail.Ratings ? detail.Ratings.avgRating.toFixed(1) : '0';

    return (
        

        <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#F7EED3' }}>
            {/* 전체영역 */}
            <Paper elevation={5} sx={{ display: 'flex', p: 2, margin: '0 auto', backgroundColor: '#A67B5B', maxWidth: '60%', mt: 2, borderRadius: 3 }}>
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
                                        maxHeight: 500,
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
                                    <Typography variant="h6">총 별점:</Typography>
                                    <Rating name="total-rating" value={parseFloat(averageRating)} readOnly precision={0.5} />
                                    <Typography variant="h6">{averageRating}/5</Typography>
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
            <Paper elevation={2} sx={{ p: 4, width: '60%', margin: '0 auto', mb: 4, mt: 3, borderRadius: 3 }}>
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
                { isLogin?
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: 3, mt: 3, mb: 2, width: '100px', height: '40px' }}
                    onClick={handleClickOpen}
                >
                    등록하기
                </Button>
                :null}
            </Paper>

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
