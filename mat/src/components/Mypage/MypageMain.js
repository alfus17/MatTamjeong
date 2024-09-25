import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Container, Grid, Paper, Typography } from '@mui/material'; // Import Material-UI Button

const MypageMain = () => {

  const [userInfo, setUserInfo] = useState({
    userAddress: '',
  });

  const [profileImage, setProfileImage] = useState('');

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`/user/getuserInfo/${sessionStorage.getItem("id")}`); // Fixed template literal
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          {/* Left section: Profile */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ width: '230px', height: '230px', mt: 4 }} />
                
                <Typography variant="h5" component="h1" sx={{ mt: 5 }}>
                    {userInfo.nickName || '정보없음'}
                </Typography>

                <Typography variant="h5" component="h1" sx={{ mt: 3}}>
                    {userInfo.email || '정보없음'}
                </Typography>

                <Box sx={{ display: 'flex', mt: 13 }}>
                  <Button variant="outlined" component="a" href='/mypageMain/aboutMe' sx={{ mr: 2 }}>
                    내프로필
                  </Button>
                  <Button variant="outlined" component="a" href='/mypageMain/passwordConfirm' sx={{ mr: 1 }}>
                    정보수정
                  </Button>
                  <Button variant="outlined" component="a" href='/mypageMain/ManagementHistory' sx={{}}>
                    이력관리
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Right section: Outlet */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Box>
                <Outlet />  
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MypageMain;
