import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider, Button, Dialog, Avatar, TextField, styled, Icon, IconButton, Fab } from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import AddReview from '../review/review';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useIsLoginState } from '../login/authContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#FABC3F',
    }), 
}));

function ExDetail() {
    const { storeId } = useParams(); // 받아온 가게 아이디
    const [detail, setDetail] = useState({}); // 가게 정보
    const [open, setOpen] = useState(false); // dialog 창 열고 닫기
    // const [isBookmarked, setIsBookmarked] = useState(false); // 북마크
    // 리뷰 배열
    const [kgRevivews , setKgRevivews] = useState([]);
    const [dcRevivews , setDcRevivews] = useState([]);
    const [matRevivews , setMatRevivews] = useState([]);
    // 각각의 리뷰 페이지 번호 
    const [kgRevivewsPage , setKgRevivewsPage] = useState(1);
    const [dcRevivewsPage , setDcRevivewsPage] = useState(1);
    const [matRevivewsPage , setMatRevivewsPage] = useState(1);

    // 리뷰
    const [rating ,setRating] = useState(0.0);
    const [matReviewContent, setMatReviewContent] = useState("");
    console.log("matReviewContent : ", matReviewContent)
    console.log("rating : ", rating)

    // 로그인 상태 체크
    const isLogin = useIsLoginState();
    console.log("로그인 상태 : ", isLogin);

    console.log("여기에요 ----",detail);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/Page/getDetailStore/1', { storeId });
                console.log(response.data);
                setDetail(response.data);
                setKgRevivews(response?.data?.Reviews?.kakaoReview)
                setDcRevivews(response?.data?.Reviews?.diningReview)
                setMatRevivews(response?.data?.Reviews?.MatReviews)
            
            } catch (error) {
                console.error('Error fetching store data:', error);
            }
            // // 북마크 체크 기능 보류로 인한 주석 
            // console.log("checkBook storeId :  ", detail?.StoreInfo?.storeId)
            // console.log("checkBook storeId :  ", detail?.StoreInfo?.storeId)
            // axios.post('/user/checkBookMark',{
            //     userId:sessionStorage.getItem("id"),
            //     storeId:detail?.StoreInfo?.storeId
            // }).then(
            //     result =>{
            //         console.log("북마크 체크 :" , result.data)
            //         if(result.data){
            //             setIsBookmarked(true)
            //         }
            //     }
            // )
        };

        fetchData();
    }, [storeId]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const toggleBookmark = () => {
    //     if(isBookmarked){
    //         axios.post(`/user/deleteBookMark`,{
    //             userId:sessionStorage.getItem("id"),
    //             storeId:detail?.StoreInfo?.storeId
    //     }).then(
    //         result => {
    //             console.log("북마크 취소 결과  : " , result)
    //             if(result){
    //                 setIsBookmarked(prev => !prev);
    //                 alert("북마크가 취소되었습니다.")
    //             }
    //         }
    //         )
    //     }else{
    //         axios.post(`/user/addBookMark`,{
    //             userId:sessionStorage.getItem("id"),
    //             storeId:detail?.StoreInfo?.storeId
    //     }).then(
    //         result => {
    //             console.log("북마크 등록 결과  : " , result)
    //             if(result){
    //                 setIsBookmarked(prev => !prev);
    //                 alert("북마크가 등록 되었습니다.")
    //             }
    //         }
    //         )


    //     }
        
    // };

    let avgRating = detail?.Ratings?.avgRating.toFixed(1) || 0.0;

    let dcRating = detail?.Ratings?.dcRating.toFixed(1) || 0.0;

    let kgRating = detail?.Ratings?.kgRating.toFixed(1) || 0.0;

    let matRating = detail?.Ratings?.matRating.toFixed(1) || 0.0;


    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#fb8c00ff' , mt:4, height:'1200px'}}>
            {/* 전체영역 */}
            <Box sx={{width:'100%', height:'10px'}}/>
            <Paper elevation={5} sx={{ position: 'relative', p: 2, margin: '0 auto', maxWidth: '60%', mt: 1, borderRadius: 3 }}>
            {/* Bookmark Icon at the top-left corner */}
            {/* {isLogin ? <IconButton 
                    sx={{
                        position: 'absolute',
                        top: 18, 
                        left: 15,
                        fontSize: '2rem',
                    }} 
                    onClick={toggleBookmark}
                >
                    {isBookmarked ? <BookmarkIcon sx={{ fontSize: '3rem', color: '#FFD700' }} /> : <BookmarkBorderOutlinedIcon sx={{ fontSize: '3rem', color: '#96927a' }} />}
                </IconButton> : null} */}

                <Grid container spacing={2}>
                    {/*왼쪽 영역 */}
                    
                    <Grid item xs={4}>
                        <Item sx={{ height: '500px' }} elevation={6}>
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
                    <Grid item xs={8} elevation={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid item xs={6}>
                            <Item sx={{ height: '330px' }} elevation={6}>
                                {/* 1행: 평균 별점 */}
                                <Box sx={{ textAlign: 'center', mb: 2 }}>
                                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>총 별점</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Rating name="total-rating" value={avgRating} readOnly precision={0.5} sx={{ fontSize: '2rem' }} />
                                        <Typography variant="h6" sx={{ ml: 1 }}>{avgRating}/5</Typography>
                                    </Box>
                                </Box>

                                {/* 2행: 다이닝, 카카오, 맛탐정 별점 - 수평 정렬 */}    
                                    {/* 다이닝 별점 */}
                                    <Box sx={{mt:3}}> {/* 각 박스의 너비를 33%로 설정 */}
                                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>다이닝</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Rating name="dc-rating" value={dcRating} readOnly precision={0.5} sx={{ fontSize: '1.4rem' }} />
                                            <Typography variant="h6" sx={{ml:1}}>{dcRating}/5</Typography>
                                        </Box>
                                    </Box>

                                    {/* 카카오 별점 */}
                                    <Box sx={{ flexBasis: '33%', textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>카카오</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Rating name="kg-rating" value={kgRating} readOnly precision={0.5} sx={{ fontSize: '1.4em' }} />
                                            <Typography variant="h6" sx={{ml:1}}>{kgRating}/5</Typography>
                                        </Box>
                                    </Box>

                                    {/* 맛탐정 별점 */}
                                    <Box sx={{ flexBasis: '33%', textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>맛탐정</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Rating name="mat-rating" value={matRating} readOnly precision={0.5} sx={{ fontSize: '1.4rem' }} />
                                            <Typography variant="h6" sx={{ml:1}}>{matRating}/5</Typography>
                                        </Box>
                                    </Box>                        
                            </Item>
                        </Grid>

                        {/* 메뉴 정보 */}
                        <Grid item xs={6}>
                                <Item sx={{ height: '330px' }} elevation={6}>
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
                        <Grid item xs={12} sx={{ flexGrow: 1, mt: 2 }}>
                            <Item sx={{ height: '100%' }} elevation={6}>
                                <Typography variant="h5" component="h2">가게 상세 정보</Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', mt: 3 }}>주소 : {detail.StoreInfo?.storeAddress}</Typography>
                                <Typography variant="body1" sx={{ textAlign: 'center', mt: 3 }}>영업 시간 : {detail.StoreInfo?.businessHours}</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>


            {/* 리뷰 */}
            <Grid container spacing={2} sx={{ mt: 1, width: '100%' }}>
                {/* 카카오 리뷰 */}
                <Grid item xs={4}>
                    <Item sx={{ height: '400px' }} elevation={6}>
                    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <Typography sx={{fontSize:'20px'}}>
                        카카오 리뷰
                    </Typography>
                        <List>
                            {detail.Reviews?.kakaoReview &&
                                detail.Reviews?.kakaoReview.map((review, index) => (
                                    <Box key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemText
                                                primary={
                                                    <Box
                                                        sx={{ justifyContent: 'space-between', flex: 1, height: '100%', overflowY: 'auto',borderBottom:'1px solid' }}
                                                    >                                                   
                                                        <Box sx={{display:'flex' ,justifyContent: 'space-between'}}>    
                                                        <Typography variant="subtitle1" component="span">
                                                            {review?.userId}
                                                        </Typography>
                                                        <Rating
                                                            name={`rating-${index}`}
                                                            value={review.rating}
                                                            readOnly
                                                            precision={0.5}
                                                        
                                                        />
                                                        </Box>
                                                        <Typography sx={{mt:2}}>{review.kgReviewContent}</Typography>                                                      
                                                        
                                                    </Box>
                                                }
                                            />
                                        </ListItem>
                                        {index < detail.Reviews?.kakaoReview.length - 1 && (
                                            <Divider variant="inset" />
                                        )}
                                    </Box>
                                ))}
                        </List>
                    </Box>
                    </Item>
                </Grid>

                {/* 두 번째 리뷰 */}
                <Grid item xs={4}>
                <Item sx={{ height: '400px' }} elevation={6}>
                <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <Typography sx={{fontSize:'20px'}}>
                        다이닝 리뷰
                    </Typography>
                        <List>
                            {detail.Reviews?.diningReview &&
                                detail.Reviews?.diningReview.map((review, index) => (
                                    <Box key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemText
                                                primary={
                                                    <Box
                                                        sx={{ justifyContent: 'space-between', flex: 1, height: '100%', overflowY: 'auto',borderBottom:'1px solid' }}
                                                    >                                                   
                                                        <Box sx={{display:'flex' ,justifyContent: 'space-between'}}>    
                                                        <Typography variant="subtitle1" component="span">
                                                            {review?.userId}
                                                        </Typography>
                                                        <Rating
                                                            name={`rating-${index}`}
                                                            value={review.rating}
                                                            readOnly
                                                            precision={0.5}
                                                        
                                                        />
                                                        </Box>
                                                        <Typography sx={{mt:2}}>{review.nvReviewContent}</Typography>                                                      
                                                        
                                                    </Box>
                                                }
                                            />
                                        </ListItem>
                                        {index < detail.Reviews?.diningReview.length - 1 && (
                                            <Divider variant="inset" />
                                        )}
                                    </Box>
                                ))}
                        </List>
                    </Box>
                    </Item>
                </Grid>

                {/* 세 번째 리뷰 */}
                <Grid item xs={4}>
                <Item sx={{ height: '400px' }} elevation={6}>
                    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <Typography sx={{fontSize:'20px'}}>
                        맛탐정 리뷰
                    </Typography>
                        <List>
                            {detail.Reviews?.MatReviews &&
                                detail.Reviews?.MatReviews.map((review, index) => (
                                    <Box key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemText
                                                primary={
                                                    <Box
                                                        sx={{ justifyContent: 'space-between', flex: 1, height: '100%', overflowY: 'auto',borderBottom:'1px solid' }}
                                                    >                                                   
                                                        <Box sx={{display:'flex' ,justifyContent: 'space-between'}}>    
                                                        <Typography variant="subtitle1" component="span">
                                                            {review?.userId}
                                                        </Typography>
                                                        <Rating
                                                            name={`rating-${index}`}
                                                            value={review.rating}
                                                            readOnly
                                                            precision={0.5}
                                                        
                                                        />
                                                        </Box>
                                                        <Typography sx={{mt:2}}>{review.matReviewContent}</Typography>                                                      
                                                        
                                                    </Box>
                                                }
                                            />
                                        </ListItem>
                                        {index < detail.Reviews?.MatReviews.length - 1 && (
                                            <Divider variant="inset" />
                                        )}
                                    </Box>
                                ))}
                        </List>
                    </Box>
                    </Item>
                </Grid>
                </Grid>
            </Paper>
            {isLogin ?<Fab 
                    color="primary" 
                    aria-label="add" 
                    onClick={handleClickOpen}
                    sx={{ 
                        position: 'fixed', // or 'sticky' if preferred
                        bottom: 20, // distance from the bottom of the viewport
                        right: 330,  // distance from the right side of the viewport
                        zIndex: 1000 // ensure it appears above other content
                    }}>
                    <AddIcon />
            </Fab> : null}
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
                    <Avatar src={sessionStorage.getItem("profile")} />
                    <Typography  color="primary" sx={{ textAlign: "center" ,  fontSize:'20px', ml :2 , mt:1}}>
                        {sessionStorage.getItem("id")}
                    </Typography>
                    </Box>

                    <Box sx={{
                        mt :4
                    }}>
                    <Typography  color="primary" sx={{   fontSize:'20px', ml :2 , mt:1}}>
                        {detail?.StoreInfo?.storeName} 
                    </Typography>
                    </Box>
                    <Box sx={{
                        display : 'flex',
                        justifyContent :' right'
                        
                    }}>
                        <Rating          
                        onChange={(result)=>{
                            setRating(result.target.value)
                         }}   />
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
                         onChange={(result)=>{
                            setMatReviewContent(result.target.value)
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
                            variant="outlined"
                            color="primary"
                            sx={{
                                ml: 3,
                                mt: 3,
                                mb: 2,
                                width: '100px',
                                height:'40px'
                            }}
                            onClick={()=>{
                                axios.post('/review/regMatReview', {
                                    rating:rating,
                                    matReviewContent:matReviewContent,
                                    storeId:detail.StoreInfo.storeId,
                                    userId:sessionStorage.getItem("id")
                                }).then(result => {
                                    console.log("axios result : " ,result);
                                    if(result.data){
                                        alert("리뷰가 정상적으로 등록됐습니다.")
                                    }else{
                                        alert("기존에 작성한 리뷰가 존재합니다.")
                                    }
                                })
                                window.location.reload();
                                handleClose();
                            }
                            }
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