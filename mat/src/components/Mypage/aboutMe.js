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

  return (
    <Table striped className='aboutMeeee'>
      <tbody>
        <h2>내 정보</h2>
        <tr>
          <td className="head">아이디</td>
          <td className="body">{userInfo.userId || '정보 없음'}</td>
        </tr>
        <tr>
          <td className="head">생년월일</td>
          <td className="body">2024-09-10</td>
        </tr>
        <tr>
          <td className="head">이메일</td>
          <td className="body">asd@asd.com</td>
        </tr>
        <tr>
          <td className="head">가입일</td>
          <td className="body">2024-09-09</td>
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