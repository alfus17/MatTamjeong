import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css';
import { Container, Grid, Box, InputBase, IconButton, Paper, Divider } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function Header() { 
    return (
        <Container maxWidth="lg">
            <Grid container alignItems="center">
                {/* Left Section: Logo */}
                <Grid item xs={3} style={{ textAlign: 'left' }}>
                    <Box>
                        <Link to="/">
                            <img 
                                src={"/img/icon.png"} 
                                alt="Logo" 
                                style={{ cursor: 'pointer', width:"150px", height:"150px" }}
                                 
                            />
                        </Link>
                    </Box>
                </Grid>
                
                {/* Center Section: Search bar */}
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>                   
                        <InputBase
                            sx={{ 
                              ml: 2,
                              flex: 1 

                              }}
                            placeholder="맛집 검색"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>                  
                </Grid>

                {/* Right Section: Empty Grid or additional content */}
                <Grid item xs={3}>
                    {/* You can add right-side content here if needed */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Header;
