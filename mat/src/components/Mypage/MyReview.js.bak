import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Paper, Rating } from '@mui/material';

function MyReview() {
  const [userInfo, setUserInfo] = useState({
    userAddress: '', // 기본값으로 빈 문자열
    bookmarkId: '', // 추가된 필드
    reviewId: '', // 추가된 필드
  });
  //리뷰 리스트 
  const [myReivews , setMyReviews] = useState(null)
  const [showpage , setShowPage] = useState(3);

  console.log("내 리뷰 목록",myReivews);

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      // 백엔드 API에서 사용자 정보 가져오기
      const response = await axios.get(`/user/getuserInfo/${sessionStorage.getItem("id")}`); // ID를 적절히 변경
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옴
  useEffect(() => {
    fetchUserInfo();
    axios.get(`/user/getMyReviews/${sessionStorage.getItem("id")}`).then(
      result =>{
        console.log("axios review result : ", result);
        setMyReviews(result.data)
      }
    )

  }, []);

  const handleShowMore = () => {
    setShowPage()
  };

  return (
    <Container sx={{ width: '600px', margin: '0 auto' ,mt:6}}>
    
        <Typography  variant="h6" sx={{textAlign:'center'}}>
          내가 쓴 리뷰
        </Typography>
        {myReivews?.map((review, showpage) =>         
          <Paper
          key={showpage}
          elevation={4}
          sx={{
            p:1,
            mt:3

          }}
          > 
            <Typography sx={{fontSize:'22px'}}>
              {review.storeName}
            </Typography>

            <Box sx={{display:'flex', justifyContent:'space-between', mt:2}}>
            <Typography>
              {review.matReviewContent}
            </Typography>
            <Rating name="total-rating" value={parseFloat(review.rating)} readOnly precision={0.5}/>
            </Box>
          </Paper>
        )}
         {/* 더보기 버튼 */}   
              {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button variant="outlined" onClick={handleShowMore}>더보기</Button>
              </Box> */}

        

        
 
    </Container>
  );
}

export default MyReview;
