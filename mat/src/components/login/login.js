import { Box, Container, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from 'axios';
import React, { useState } from 'react';
import { Create } from "@mui/icons-material";


function Login({onClose,setSession}) {
    const [id, setId] = useState('');  // ID 상태 관리
    const [password, setPassword] = useState('');  // Password 상태 관리

    console.log("id : ",id);
    console.log("password : ",password);

    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            <Grid container justifyContent="center">
                <Box elevation={2} sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                            Login <VpnKeyIcon />
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField 
                            id="outlined-id-input"
                            label="ID"
                            type="text"
                            autoComplete="current-password"
                            sx={{ width: '500px', mb: 2 }}  // Adjust width and spacing
                            onChange={(result) =>{ setId(result.target.value)}}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            sx={{ width: '500px', mb: 2 }}  // Adjust width and spacing
                            onChange={(result) =>{ setPassword(result.target.value)}}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                sx={{ 
                                    mt: 2, 
                                    mb: 2,
                                    width: '150px',
                                }}
                                onClick={ async() => {
                                    try {
                                        const response = await axios.get(`/user/checkUser/${id}/${password}`).then(result =>{
                                            console.log(result)
                                            // 로컬스토리지에 저장
                                            localStorage.setItem('token', result.data.token)
                                            // 로컬스토리지 토큰 아이템 삭제 방법
                                            // localStorage.removeItem('token')
                                            setSession(localStorage.getItem("token"))
                                            } 
                                        );
                                        console.log("로그인 성공")
                                       // 서버로부터 받은 응답 처리
                                        // 로그인로직 구현 

                                    } catch (error) {
                                        console.error('Error during login:', error);
                                        alert('로그인 실패!');
                                    }
                                    
                                    // 로그인 확인 이후 창 닫기 부분
                                    onClose();
                                }
                                    
                                }
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography variant="body2">
                            {/* 요기에는 회원가입 구문 추가 하기   */}
                            <a >아이디가 없으신가요?</a> 
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
}

export default Login;
