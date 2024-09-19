import { Box, Container, Grid, Paper, TextField, Typography, Button, IconButton, Avatar } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

// Sample avatars
const avatars = [
    'https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg',
    'https://t4.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/NZ9EznOU5Dng8VHBzobu3zqzyIU.jpg',
    'https://preview.free3d.com/img/2018/04/2279509641907930122/ukq9qttq.jpg'
];

function Create() {
    // State for form inputs
    const [date, setDate] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");

    // Validation messages
    const [errors, setErrors] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    // Handle avatar selection
    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    // Handle input changes and validate
    const EnrollChange = (e) => {
        const { id, value } = e.target;

        // Regular expressions for validation
        const usernameRegex = /^[a-z]{6,20}$/; // Lowercase letters only, 6-20 characters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/; // At least one lowercase, one uppercase, one special character, 8-30 characters

        // Update state and validate
        switch (id) {
            case "username":
                setUsername(value);
                if (!usernameRegex.test(value)) {
                    setErrors((prev) => ({ ...prev, username: "아이디는 소문자 6자에서 20자 사이여야 합니다." }));
                } else {
                    setErrors((prev) => ({ ...prev, username: "" }));
                }
                break;
            case "password":
                setPassword(value);
                if (!passwordRegex.test(value)) {
                    setErrors((prev) => ({ ...prev, password: "비밀번호는 최소 하나의 소문자, 대문자, 특수기호가 포함되어야 하며, 8자에서 30자 사이여야 합니다." }));
                } else {
                    setErrors((prev) => ({ ...prev, password: "" }));
                }
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                if (value !== password) {
                    setErrors((prev) => ({ ...prev, confirmPassword: "비밀번호가 일치하지 않습니다." }));
                } else {
                    setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                }
                break;
            case "nickname":
                setNickname(value);
                break;
            default:
                break;
        }
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
                    bgcolor: '#f5f5f5',
                    border: '1px solid #ddd',
                    width: '800px',
                }}>
                    <Box>
                        <Typography variant="h4" color="primary" sx={{ textAlign: "center" , mb:2}}>
                            회원 가입
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* Avatar selection */}
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
                                            onClick={() => setSelectedAvatar(avatar)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="h6" sx={{ textAlign: 'center' , mt:3}}> 프로필을 선택하세요.</Typography>
                        </Box>
                        <TextField
                            id="username"
                            label="아이디를 입력하세요"
                            type="text"
                            value={username}
                            onChange={EnrollChange}
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}
                            error={!!errors.username}
                            helperText={errors.username}
                        />

                        <TextField
                            id="password"
                            label="비밀번호를 입력하세요"
                            type="password"
                            value={password}
                            onChange={EnrollChange}
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}
                            error={!!errors.password}
                            helperText={errors.password}
                        />

                        <TextField
                            id="confirmPassword"
                            label="비밀번호 재입력"
                            type="password"
                            value={confirmPassword}
                            onChange={EnrollChange}
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                        />

                        <TextField
                            id="nickname"
                            label="닉네임 설정"
                            type="text"
                            value={nickname}
                            onChange={EnrollChange}
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}
                        />
 						<TextField
                            id="outlined-email-input"
                            label="이메일"
                            type="text"
                            autoComplete="current-password"
                            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}  // Adjust width and spacing
                        />

                        {/* Date of Birth */}
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
