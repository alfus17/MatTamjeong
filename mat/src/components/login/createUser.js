import { Box, Container, Grid, Paper, TextField, Typography, Button, IconButton, Avatar } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
const avatars = [
    'https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg',
    'https://t4.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/NZ9EznOU5Dng8VHBzobu3zqzyIU.jpg',
    'https://preview.free3d.com/img/2018/04/2279509641907930122/ukq9qttq.jpg'
];


function Create() {


    // 생년월일 데이터
    const [date, setDate] = useState(null);

    // 선택한 아바타
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 6 , height:'1000px'}}>
            <Grid container justifyContent="center">
                <Paper elevation={2} sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#f5f5f5', // Light grey background
                    border: '1px solid #ddd', // Light border
                    width: '800px',
                }}>
                    <Box>
                        <Typography variant="h4" color="primary" sx={{ textAlign: "center" , mb:2}}>
                            회원 가입 
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* 아바타 선택 */}

                        <Box sx={{ mb: 9 }}>
                            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                                {avatars.map((avatar, index) => (
                                    <Grid item key={index}>
                                        <Avatar
                                            src={avatar}
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                border: selectedAvatar === avatar ? '3px groove #FE2E2E' : 'none',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.7)'
                                                }
                                            }}
                                            onClick={() => handleAvatarSelect(avatar)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                                <Typography variant="h6"   sx={{ textAlign: 'center' , mt:3}}> 프로필을 선택하세요.</Typography>
                        </Box>
                        <TextField
                            id="outlined-id-input"
                            label="아이디를 입력하세요"
                            type="text"
                            autoComplete="current-password"
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}  // Adjust width and spacing
                        />

                        <TextField
                            id="outlined-password-input"
                            label="비밀번호를 입력하세요"
                            type="password"
                            autoComplete="current-password"
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}  // Adjust width and spacing
                        />

                        <TextField
                            id="outlined-password-retype-input"
                            label="비밀번호 재입력"
                            type="password"
                            autoComplete="current-password"
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}  // Adjust width and spacing
                        />

                        <TextField
                            id="outlined-nickname-input"
                            label="닉네임 설정"
                            type="text"
                            autoComplete="current-password"
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}  // Adjust width and spacing
                        />

                        <TextField
                            id="outlined-email-input"
                            label="이메일"
                            type="text"
                            autoComplete="current-password"
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}  // Adjust width and spacing
                        />


                        {/* 생년월일 입력 */}
                        <Box sx={{ mb: 4, width: '100%', maxWidth: '400px' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="생년월일"
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            sx={{ width: '100%' }}
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <>
                                                        {params.InputProps.endAdornment}
                                                        <IconButton sx={{ ml: 1 }} aria-label="calendar" component="span">
                                                            <CalendarTodayIcon />
                                                        </IconButton>
                                                    </>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    width: '150px',
                                }}
                            >
                                회원가입
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Container>
    );
}

export default Create;
