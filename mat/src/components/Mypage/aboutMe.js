import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../css/aboutMe.css';


function AboutMe() {

  const [userInfo, setUserInfo] = useState({
    userAddress: '', // 기본값으로 빈 문자열
    // 필요한 다른 필드도 여기에 추가
  });

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      // 백엔드 API에서 사용자 정보 가져오기
      const response = await axios.get(`/getuserInfo/${2}`); // ID를 적절히 변경
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옴
  useEffect(() => {
    fetchUserInfo();
  }, []);

  // 생년월일 포맷 변경 (11/11/11 형식)
  const formatBirthDate = (birthDate) => {
    if (!birthDate) return '정보 없음';
    const date = new Date(birthDate);
    return date.toLocaleDateString('ko-KR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
  };

  // 가입일 포맷 변경 (23/02/02 형식)
  const formatJoinDate = (joinDate) => {
    if (!joinDate) return '정보 없음';
    const date = new Date(joinDate);
    return date.toLocaleDateString('ko-KR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="user info table">
        <TableBody>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell align="left">{userInfo.userName || '정보 없음'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>아이디</TableCell>
            <TableCell align="left">{userInfo.userId || '정보 없음'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>생년월일</TableCell>
            <TableCell align="left">{formatBirthDate(userInfo.userBirth)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>이메일</TableCell>
            <TableCell align="left">{userInfo.email || '정보 없음'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>가입일</TableCell>
            <TableCell align="left">{formatJoinDate(userInfo.createAt)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell align="left">{userInfo.userAddress || '정보 없음'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AboutMe;
