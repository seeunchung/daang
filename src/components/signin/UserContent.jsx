import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // 세션 스토리지에서 로그인 상태를 가져오기
  const storedLoginStatus = sessionStorage.getItem('isLogin');
  const [isLogin, setIsLogin] = useState(storedLoginStatus === 'true');

  useEffect(() => {
    // 컴포넌트가 마운트될 때 세션 스토리지의 로그인 상태를 가져와 설정
    const storedLoginStatus = sessionStorage.getItem('isLogin');
    if (storedLoginStatus) {
      setIsLogin(storedLoginStatus === 'true');
    }
  }, []);

  const login = () => {
    setIsLogin(true);
     // 로그인 상태를 세션 스토리지에 저장
    sessionStorage.setItem('isLogin', 'true')
  };

  const logout = () => {
    setIsLogin(false);
     // 로그아웃 시 세션 스토리지의 로그인 상태를 제거
      sessionStorage.removeItem('isLogin');
  };

  return (
    <UserContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
