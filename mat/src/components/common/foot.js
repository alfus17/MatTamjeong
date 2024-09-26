import React from 'react';
import { Container, Box, Typography, Link } from "@mui/material";


export function Foot() {
    return (
        <Container maxWidth="false" sx={{ backgroundColor: '#F5F5F5', padding: '20px', position: 'relative', bottom: 0, width: '100%' ,mt:2 }}>
            <Box sx={{ textAlign: 'left', mt:6  }}>
                <Typography variant="body1" color="text.secondary">
                    © 2024 맛탐정. Find Korea MatZip
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
                    Contact: example@email.com
                </Typography>
            <Box sx={{borderTop:'1px solid #D3D3D3', mt:3 , display:'flex'}}>
            <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
                <Link href="https://github.com/alfus17" target="_blank" color="inherit" underline="hover">
                     GitHub 장광진
                </Link> / 
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{mt:2, ml:1}}>
                <Link href="https://github.com/limhyeonseoung" target="_blank" color="inherit" underline="hover">
                    GitHub 임현승
                </Link> / 
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{mt:2, ml:1}}>
                <Link href="https://github.com/asd0916" target="_blank" color="inherit" underline="hover">
                    GitHub 양승혁
                </Link>
            </Typography>
            </Box>
            </Box>
        </Container>
    );
}
