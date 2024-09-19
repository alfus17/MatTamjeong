import React, { createContext, useState } from 'react';

// Context 생성
export const AuthContext = createContext();

// Context Provider 정의
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [userInfo, setUserInfo] = useState(null); // 유저 정보 관리

  // 로그인 함수 (예시)
  const login = (userData) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
  };

  // 로그아웃 함수 (예시)
  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
