import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'; // Import TextField from Material-UI
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { Box, Container, Typography } from '@mui/material';

function PasswordConfirm() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/checkUser/${2}/${password}`);
      if (response.data) {
        navigate('/MypageMain/editMe'); // 비밀번호가 맞으면 editMe로 이동
      } else {
        alert('비밀번호가 틀렸습니다');
        setPassword(''); // 비밀번호 틀렸을 시 칸 초기화
      }
    } catch (error) {
      console.error('Error validating password:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container sx={{ width: '500px' }}>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" component="h1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            비밀번호 확인
          </Typography>

          {/* TextField와 Button을 같은 행에 배치 */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 8, justifyContent: 'center' }}>
            <TextField
              id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              sx={{
                width: '70%',
                mr: 2, // 오른쪽에 여백 추가
              }}
            />
            <Button type="submit" variant="contained" sx={{ height: '56px' }}>
              확인
            </Button>
          </Box>
        </Box>
      </Container>
    </form>
  );
}

export default PasswordConfirm;
