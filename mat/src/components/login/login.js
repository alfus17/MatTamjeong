import { Box, Container, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Login() {
    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            <Grid container justifyContent="center">
                <Paper elevation={2} sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#f5f5f5', // Light grey background
                    border: '1px solid #ddd', // Light border
                    transition: 'all 0.3s ease-in-out', // Smooth transition effect
                    '&:hover': {
                        bgcolor: '#e0e0e0', // Darker grey on hover
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increased shadow on hover
                        transform: 'scale(1.02)', // Slightly enlarge on hover
                    },
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
                        <Typography variant="body2">
                            <a>아이디가 없으신가요?</a>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Container>
    );
}

export default Login;
