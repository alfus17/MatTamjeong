import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/passwordConfirm.css';

function PasswordConfirm() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/checkUser/${2}/${password}`);
      if (response.data) {
        navigate('/MypageMain/editMe'); // 비밀번호가 맞으면 editMe로 이동
      } else {
        alert('비밀번호가 틀렸습니다');
        setPassword(''); // 비밀번호 틀렸을 시 칸 초기화
      }
    } catch (error) {
      console.error('Error validating password:', error);
    }
  };

  return (
    <div className="password-confirm-container">
      <h2>비밀번호 확인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default PasswordConfirm;
