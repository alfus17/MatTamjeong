import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';

function ManagementHistory() {
  const [userInfo, setUserInfo] = useState({
    userAddress: '', // 기본값으로 빈 문자열
    bookmarkId: '', // 추가된 필드
    reviewId: '', // 추가된 필드
  });

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
  }, []);

  return (
    <Container sx={{ width: '600px', margin: '0 auto' ,mt:6}}>
      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>즐겨찾기</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {userInfo.bookmarkId || '정보 없음'}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>내가 작성한 리뷰</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {userInfo.reviewId || '정보 없음'}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default ManagementHistory;
