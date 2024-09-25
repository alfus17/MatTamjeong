import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Find() {
  const [mode, setMode] = useState("none"); // 현재 선택된 모드를 상태로 관리
  
  // 아이디 찾기 
  const [userName ,setUserName ] = useState("")
  const [userEmail, setUserEmail] = useState("")
  
  // 아이디 비밀번호 찾기 공용 변수 
  const [userId , setUserId] = useState("")

  // 비밀번호 찾기
  const [userPwd, setUserPwd] = useState("")


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
                <Button variant="outlined" onClick={() =>{}} sx={{
                width: "120px",
                height: "50px",
                display:"flex",
                margin:"0 auto"
                }}>
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
                  id="outlined-id-input"
                  label="회원님의 아이디를 입력하세요"
                  type="text"
                  fullWidth
                  onChange={(result) =>{ setUserId(result.target.value)}}
                  sx={{ width: "100%", maxWidth: "600px", mb: 4 }} // Adjust width and spacing
                />
              </Box>

              <Box sx={{
                    mt : 2,
                    margin: "0 auto"
                }}>
                   {/* 아이디 찾기 제출 버튼  */}
                <Button variant="outlined" onClick={() => {console.log(1)}} sx={{
                width: "120px",
                height: "50px",
                display:"flex",
                margin:"0 auto"
                }}>
                 비밀번호 찾기   
                </Button>
                </Box>
            </Box>
          )}
        </Paper>
      </Grid>
    </Container>
  );
}

export default Find;
