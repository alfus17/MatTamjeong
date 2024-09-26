// import { Avatar, Box, Button, Container, Grid, Paper, Rating, TextField, Typography } from "@mui/material";


// function AddReview () {

//     return (
//         <Container maxWidth="md" sx={{ mt: 4 , height:'800px'}}>
//             <Grid >
//                 <Paper elevation={2} sx={{
//                         p: 4,
//                         borderRadius: 3,
//                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         bgcolor: '#f5f5f5', // Light grey background
//                         border: '1px solid #ddd', // Light border
//                         width: '800px',
//                         md : 3
//                     }}>
//                      <Box>
//                         <Typography  color="primary" sx={{ textAlign: "center" , mb:2, fontSize:'20px'}}>
//                             리뷰를 써보세요 
//                         </Typography>
//                     </Box>
//                     <Box sx={{
//                         display:'flex',
//                         mt : 4
//                     }}>
//                     <Avatar src="https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg" />
//                     <Typography  color="primary" sx={{ textAlign: "center" ,  fontSize:'20px', ml :2 , mt:1}}>
//                         내 닉네임
//                     </Typography>
//                     </Box>

//                     <Box sx={{
//                         mt :4
//                     }}>
//                     <Typography  color="primary" sx={{   fontSize:'20px', ml :2 , mt:1}}>
//                         가게 이름 
//                     </Typography>
//                     </Box>
//                     <Box sx={{
//                         display : 'flex',
//                         justifyContent :' right'
                        
//                     }}>
//                         <Rating />
//                     </Box>

//                     <Box sx={{
//                         mt : 10,
//                         maxHeight :'1000px',
//                         justifyContent : 'center'
//                     }}>                  
//                      <TextField
//                          id="reviewContnet"
//                          label="review"
//                          multiline
//                          rows={13}
//                          placeholder="리뷰를 작성하세요."
//                          sx={{
//                             width :'700px',
//                          }}                       
//                     />  
//                     </Box>

//                     <Box sx={{display:'flex'}}>
//                     <Button
//                             variant="contained"
//                             sx={{
//                                 mt : 3,
//                                 mb: 2,
//                                 width: '100px',
//                                 height:'40px',
//                                 color:'#674636'
//                             }}
//                             >
//                     초기화
//                     </Button>

//                     <Button
//                             variant="contained"
//                             color="#674636"
//                             sx={{
//                                 ml: 3,
//                                 mt: 3,
//                                 mb: 2,
//                                 width: '100px',
//                                 height:'40px',
//                             }}
//                             >
//                     등록하기
//                     </Button>
//                     </Box>
//                 </Paper>
//             </Grid>
//         </Container>
//     )
// }

// export default AddReview;