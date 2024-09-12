import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/aboutMe.css';
import Table from 'react-bootstrap/Table';

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
    <Table striped className='aboutMeeee'>
      <tbody>
        <h2>내 정보</h2>
        <tr>
          <td className="head">이름</td>
          <td className="body">{userInfo.userName || '정보 없음'}</td>
        </tr>
        <tr>
          <td className="head">아이디</td>
          <td className="body">{userInfo.userId || '정보 없음'}</td>
        </tr>
        <tr>
          <td className="head">생년월일</td>
          <td className="body">{formatBirthDate(userInfo.userBirth)}</td>
        </tr>
        <tr>
          <td className="head">이메일</td>
          <td className="body">{userInfo.email || '정보 없음'}</td>
        </tr>
        <tr>
          <td className="head">가입일</td>
          <td className="body">{formatJoinDate(userInfo.createAt)}</td>
        </tr>
        <tr>
          <td className="head">주소</td>
          <td className="body">{userInfo.userAddress || '정보 없음'}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AboutMe;
