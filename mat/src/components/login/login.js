import { Box, Container, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate(); // useNavigate hook 사용

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
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            sx={{ width: '500px', mb: 2 }}  // Adjust width and spacing
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
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography variant="body2" sx={{
                            '&:hover': {
                                cursor:"pointer",
                                color:'#0d6efd',
                                animation: 'textclip 2s linear infinite'
                             },
                        }}
                        onClick={()=>{
                            navigate("/Create"); // useNavigate로 경로 이동
                        }}
                        >
                            아이디가 없으신가요?
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
}

export default Login;
