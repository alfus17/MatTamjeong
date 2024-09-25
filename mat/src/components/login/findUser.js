import { Box, Button, Container, Dialog, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";


function Find() {
  const [mode, setMode] = useState("none"); // 현재 선택된 모드를 상태로 관리
  
  // 아이디 찾기 
  const [userName ,setUserName ] = useState("")
  const [userEmail, setUserEmail] = useState("")
  console.log("유저이름 : ", userName);
  console.log("유저이메일 : ", userEmail);
  
  // 아이디 비밀번호 찾기 공용 변수 
  const [userId , setUserId] = useState("")

  // 비밀번호 찾기
  const [userPwd, setUserPwd] = useState("")

  const [IDResult , setIDResult ] = useState("");
  console.log("IDResult : ", IDResult);

  //다이얼로그
  const [open, setOpen] = useState(false); // Dialog open/close state
  // Close login dialog handler
  const handleClose = () => {
    setOpen(false);
  };

  // 모드 변경 함수
  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2, height: "1000px" }}>
      <Grid container justifyContent="center"> {/* 세로 중앙 정렬 */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#f5f5f5", // Light grey background
            border: "1px solid #ddd", // Light border
            width: "800px",
            height: "500px",
            mt: 5
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, alignItems: "center", height: "100%" }}> {/* 세로 중앙 정렬 */}
            {/* 아이디 찾기 및 비밀번호 찾기 버튼 */}
            <Button  variant="outlined"  onClick={() => handleModeChange("findId")} sx={{
                width: "120px",
                height: "50px"
            }}>
              아이디 찾기   
            </Button>
            <Button variant="outlined" onClick={() => handleModeChange("findPassword")} sx={{
                width: "120px",
                height: "50px"
            }}>
              비밀번호 찾기
            </Button>
          </Box>

          {/* 아이디 찾기 모드 */}
          {mode === "findId" && (
            <Box sx={{ margin: "0 auto", mt: 4 }}>
              <Typography variant="h6">아이디 찾기</Typography>

              {/* 찾는 아이디의 값이 없을경우 아이디 찾는 창 띄우기 */}
              <Box sx={{ mt: 4 }}>
             
              <TextField
                  id="outlined-name-input"
                  label="회원님의 이름을 입력하세요"
                  type="text"
                  fullWidth
                  onChange={(result) =>{ setUserName(result.target.value)}}
                  sx={{ width: "100%", maxWidth: "600px", mb: 4 }} // Adjust width and spacing
                />
                <TextField
                  id="outlined-email-input"
                  label="회원님의 이메일을 입력하세요"
                  type="email"
                  fullWidth
                  onChange={(result) =>{ setUserEmail(result.target.value)}}
                  sx={{ width: "100%", maxWidth: "600px", mb: 4 }} // Adjust width and spacing
                />
                <Box sx={{
                    mt : 2,
                    margin: "0 auto"
                }}>
                  {/* 아이디 찾기 제출 버튼  */}
                <Button variant="outlined"  sx={{
                width: "120px",
                height: "50px",
                display:"flex",
                margin:"0 auto"
                }}
                onClick={() => {
                  console.log("여기안에 들어옴 ")
                  axios.post('/user/findUserId', {  
                    userName :userName,
                    email : userEmail
                }).then(res =>{
                  console.log(res.data)
                  setIDResult(res.data)
                  // 쿼리했을때 아이디가 나오지 않았을 경우 
                  setOpen(true);
                  if(res.data === ""){
                    alert("유효하지 않은 정보입니다.")
                  }
                  
                }
 
                )}}
                
                >
                 아이디 찾기   
                </Button>
              
                </Box>

              </Box>
             
           
                 
            
            </Box>
          )}

          {/* 비밀번호 찾기 모드 */}
          {mode === "findPassword" && (
            <Box sx={{ margin: "0 auto", mt: 4 }}>
              <Typography variant="h6">비밀번호 찾기</Typography>
            {  <Box sx={{ mt: 4 }}>
                <TextField
                  id="outlined-name-input"
                  label="회원님의 이름을 입력하세요"
                  type="text"
                  fullWidth
                  onChange={(result) =>{ setUserName(result.target.value)}}
                  sx={{ width: "100%", maxWidth: "600px", mb: 4 }} // Adjust width and spacing
                />
                <TextField
                  id="outlined-id-input"
                  label="회원님의 아이디를 입력하세요"
                  type="text"
                  fullWidth
                  onChange={(result) =>{ setUserId(result.target.value)}}
                  sx={{ width: "100%", maxWidth: "600px", mb: 4 }} // Adjust width and spacing
                />
              </Box>
              
            }
              <Box sx={{
                    mt : 2,
                    margin: "0 auto"
                }}>
                   {/* 비밀번호 찾기 제출 버튼  */}
                <Button variant="outlined" 
                sx={{
                width: "120px",
                height: "50px",
                display:"flex",
                margin:"0 auto"
                }}
              
                
                >
                 비밀번호 찾기   
                </Button>
                </Box>
            </Box>
          )}
        </Paper>
      </Grid>
       
      <Dialog open={open} onClose={handleClose}  maxWidth={'1000px'} sx={{mb:30}}>
        <Box sx={{width:'700px' ,height:'300px'}}>
               {IDResult != "" ?<Typography sx={{fontSize:'32px' ,textAlign:'center',mt:5}}> 
                당신의 아이디는  {IDResult} 입니다.
               </Typography>:null}
               
               {IDResult != "" ?<Typography sx={{fontSize:'32px' ,textAlign:'center',mt:5}}> 
                당신의 비밀번호는  {IDResult} 입니다.
               </Typography>:null}
               <Button variant="outlined" onClick={handleClose} sx={{display:'flex', margin:'0 auto' ,mt :10 ,width:'120px', height:'50px'}}>
                닫기
               </Button>
        </Box>
      </Dialog> 
    </Container>
  );
}

export default Find;
