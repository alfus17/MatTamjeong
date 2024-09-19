import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

function EditMe() {
  const [userInfo, setUserInfo] = useState({
    nickName: '',
    email: '',
    password: ''
  });

  const [originalInfo, setOriginalInfo] = useState({});

  useEffect(() => {
    // 처음 마운트 시 사용자 정보 가져오기
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`/getuserInfo/${2}`); // ID는 적절히 변경
        setOriginalInfo(response.data); // 원본 데이터를 저장
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (field) => {
    if (!userInfo[field]) {
      alert("변경할 정보를 입력하세요");
      return;
    }

    if (userInfo[field] === originalInfo[field]) {
      alert("현재와 동일한 정보입니다");
      setUserInfo({
        ...userInfo,
        [field]: ''  // 해당 필드를 빈 값으로 초기화
      });
      return;
    }

    try {
      const response = await axios.post(`/updateUserInfo`, { userId: 2, field, value: userInfo[field] });
      if (response.data.success) {
        alert("수정이 완료되었습니다");
        setOriginalInfo({ ...originalInfo, [field]: userInfo[field] });

        // 입력 필드를 초기화
        setUserInfo({
          ...userInfo,
          [field]: ''  // 해당 필드를 빈 값으로 초기화
        });

        // 화면을 새로고침
        window.location.reload(); // 페이지를 새로고침하여 변경사항 적용
      } else {
        alert("수정에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  const handleReset = () => {
    setUserInfo({
      nickName: '',
      email: '',
      password: ''
    });
  };

  return (
    <Container sx={{width:'70%'}}>
      <Typography variant="h4" component="h2" gutterBottom  color="primary" sx={{mt :8 , textAlign:'center'}}>
            내 정보 수정하기
       </Typography>

      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 , mt:8}}>
        <TextField
          name="nickName"
          label="닉네임"
          variant="outlined"
          value={userInfo.nickName}
          onChange={handleInputChange}
          fullWidth
        />
        <Button onClick={() => handleSubmit('nickName')} variant="contained">
          수정
        </Button>
      </Box>

      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 ,mt:6}}>
        <TextField
          name="email"
          label="이메일"
          type='email'
          variant="outlined"
          value={userInfo.email}
          onChange={handleInputChange}
          fullWidth
        />
        <Button onClick={() => handleSubmit('email')} variant="contained">
          수정
        </Button>
      </Box>

      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 ,mt:6}}>
        <TextField
          name="password"
          label="비밀번호"
          type='password'
          variant="outlined"
          value={userInfo.password}
          onChange={handleInputChange}
          fullWidth
        />
        <Button onClick={() => handleSubmit('password')} variant="contained">
          수정
        </Button>
      </Box>
    </Container>

  );
}

export default EditMe;
