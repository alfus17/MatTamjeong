import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Container, Dialog, DialogContent, Grid, Paper, Typography } from '@mui/material'; // Added Dialog component

const MypageMain = () => {
  const [userInfo, setUserInfo] = useState({
    userAddress: '',
  });

  const [profileImage, setProfileImage] = useState('');
  const [hovered, setHovered] = useState(false); // Track hover state
  const [open, setOpen] = useState(false); // Track dialog state

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`/user/getuserInfo/${sessionStorage.getItem("id")}`);
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    setProfileImage(sessionStorage.getItem("profile"));
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAvatarClick = () => {
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleIconSelect = async (url) => {
    setProfileImage(url); // 아이콘 업데이트
    sessionStorage.setItem("profile", url); // 변경정보 저장
    await updateUserProfileImage(url); // 업데이트 함수 호출
    handleClose(); // 창 닫기
    window.location.reload(); // 화면 새로고침
};

const updateUserProfileImage = async (newImagePath) => {
  const userId = sessionStorage.getItem("id"); // Get user ID from session storage
  try {
      const response = await axios.post('/user/updateUserInfo', {
          userId: userId,
          field: 'img_path', // Assuming this is the field name for the image path
          value: newImagePath
      });
      if (response.data.success) {
          console.log("Image path updated successfully!");
      } else {
          console.error("Failed to update image path:", response.data.message);
      }
  } catch (error) {
      console.error("Error updating image path:", error);
  }
};

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          {/* Left section: Profile */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleAvatarClick}
                  sx={{
                    position: 'relative',
                    width: '230px',
                    height: '230px',
                    cursor: 'pointer',
                    '&:hover .overlay': { opacity: 1 }, // Show gray overlay on hover
                  }}
                >
                  <Avatar sx={{ width: '230px', height: '230px', mt: 4 }} src={profileImage} />

                  {/* Gray overlay */}
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray overlay
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%', // Keep it circular
                      opacity: 0, // Initially hidden
                      transition: 'opacity 0.3s ease-in-out',
                      mt: 4,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                      }}
                    >
                      아이콘 변경
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h5" component="h1" sx={{ mt: 5 }}>
                  {userInfo.nickName || '정보없음'}
                </Typography>

                <Typography variant="h5" component="h1" sx={{ mt: 3 }}>
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

      {/* Dialog for icon selection */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            아이콘 선택
          </Typography>
          <Grid container spacing={2}>
            {/* Three selectable icons */}
            <Grid item xs={4}>
              <Avatar
                src='https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg'
                sx={{ width: 100, height: 100, cursor: 'pointer' }}
                onClick={() => handleIconSelect('https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg')}
              />
            </Grid>
            <Grid item xs={4}>
              <Avatar
                src='https://t4.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/NZ9EznOU5Dng8VHBzobu3zqzyIU.jpg'
                sx={{ width: 100, height: 100, cursor: 'pointer' }}
                onClick={() => handleIconSelect('https://t4.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/NZ9EznOU5Dng8VHBzobu3zqzyIU.jpg')}
              />
            </Grid>
            <Grid item xs={4}>
              <Avatar
                src='https://preview.free3d.com/img/2018/04/2279509641907930122/ukq9qttq.jpg'
                sx={{ width: 100, height: 100, cursor: 'pointer' }}
                onClick={() => handleIconSelect('https://preview.free3d.com/img/2018/04/2279509641907930122/ukq9qttq.jpg')}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MypageMain;
