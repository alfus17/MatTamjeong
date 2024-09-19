
import React, { createContext, useContext, useState, useMemo } from 'react'

const userId = sessionStorage.getItem('id')
const token = sessionStorage.getItem('token')

// 로그인 컨텍스트 정의
export const IsLoginContext = createContext({ isLogin: userId !== null && token !== null ? true : false })

// 하위에서 isLogin 사용할수있도록 
export function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(userId !== null && token !== null ? true : false)
  // useMemo로 캐싱하지 않으면 value가 바뀔 때마다 state를 사용하는 모든 컴포넌트가 매번 리렌더링됨
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin])
  return <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>
}

export function useIsLoginState() {
  const context = useContext(IsLoginContext)
  if (!context) {
    throw new Error('Cannot find IsLoginProvider')
  }
  return context.isLogin
}