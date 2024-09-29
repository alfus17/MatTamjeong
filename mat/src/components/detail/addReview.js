import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemText, Rating, Divider, Button, Dialog, Avatar, TextField, styled, Icon, IconButton, Fab } from '@mui/material';



export function AddReview ({onClose}){

    return(
        <Container maxWidth="md" sx={{ mt: 4 , height:'800px'}}>
        <Grid >   
                 <Box>
                    <Typography  color="primary" sx={{ textAlign: "center" , mb:2, fontSize:'20px'}}>
                        리뷰를 써보세요 
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    mt : 4
                }}>
                <Avatar src="https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg" />
                <Typography  color="primary" sx={{ textAlign: "center" ,  fontSize:'20px', ml :2 , mt:1}}>
                    내 닉네임
                </Typography>
                </Box>

                <Box sx={{
                    mt :4
                }}>
                <Typography  color="primary" sx={{   fontSize:'20px', ml :2 , mt:1}}>
                    가게 이름 
                </Typography>
                </Box>
                <Box sx={{
                    display : 'flex',
                    justifyContent :' right'
                    
                }}>
                    <Rating />
                </Box>

                <Box sx={{
                    mt : 1,
                    maxHeight :'1000px',
                    justifyContent : 'center'
                }}>           

                {/* text Field 데이터        */}
                
                 <TextField
                     id="reviewContnet"
                     label="review"
                     multiline
                     rows={13}
                     placeholder="리뷰를 작성하세요."
                     sx={{
                        width :'700px',
                     }}                       
                />  
                </Box>

                <Box sx={{display:'flex', justifyContent:'center'}}>
                <Button
                        variant="outlined"
                        sx={{
                            mt : 3,
                            mb: 2,
                            width: '100px',
                            height:'40px'
                        }}
                        onClick={onClose()}
                        >
                취소
                </Button>

                <Button
                        variant="outlined"
                        sx={{
                            ml: 3,
                            mt: 3,
                            mb: 2,
                            width: '100px',
                            height:'40px'
                        }}
                        >
                등록하기
                </Button>
                
                </Box>
        </Grid>
    </Container>
    );
}