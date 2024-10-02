import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, Paper, Typography, Rating } from '@mui/material';

function MyReview() {
  const [userInfo, setUserInfo] = useState({
    userAddress: '',
    bookmarkId: '',
    reviewId: '',
  });

  const [myReviews, setMyReviews] = useState([]);
  const [showpage, setShowPage] = useState(3);

  const navigate = useNavigate(); // Use navigate hook for navigation

  // Fetch user reviews
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`/user/getuserInfo/${sessionStorage.getItem("id")}`);
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const result = await axios.get(`/user/getMyReviews/${sessionStorage.getItem("id")}`);
      setMyReviews(result.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // 리뷰 삭제
  const deleteReview = async (reviewId) => {
    const confirmed = window.confirm("리뷰를 삭제하시겠습니까?");
    if (confirmed) {
      try {
        await axios.delete(`/review/delete/${reviewId}`);
        // Refresh reviews after deletion
        fetchReviews();
      } catch (error) {
        console.error('리뷰 삭제 오류:', error);
      }
    }
  };

  useEffect(() => {
    fetchUserInfo();
    fetchReviews();
  }, []);

  // Navigate to store detail page
  const handleStoreClick = (storeId) => {
    navigate(`/store/${storeId}`); // Assuming the route for store detail is '/store/:storeId'
  };

  return (
    <Container sx={{ width: '600px', margin: '0 auto', mt: 6 }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        내가 쓴 리뷰
      </Typography>
      {myReviews?.map((review) => (
        <Paper
          key={review.matReviewId}
          elevation={4}
          sx={{ p: 1, mt: 3 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* 가게 이름 클릭 */}
            <Typography 
              sx={{ fontSize: '22px', cursor: 'pointer', color: 'black' }}
              onClick={() => handleStoreClick(review.storeId)}
            >
              {review.storeName}
            </Typography>
            {/* 삭제버튼 */}
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteReview(review.matReviewId)}
            >
              삭제
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography>
              {review.matReviewContent}
            </Typography>
            <Rating name="total-rating" value={parseFloat(review.rating)} readOnly precision={0.5} />
          </Box>
        </Paper>
      ))}
    </Container>
  );
}

export default MyReview;
