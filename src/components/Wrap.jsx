import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './main/Header';
import MainPage from './main/MainPage';
import Footer from './main/Footer';
import DstaMainPage from './dsta/DstaMainPage';
import DstaWrite from './dsta/DstaWrite.jsx';
import DstaDetail from './dsta/DstaDetail.jsx';
import DstaEdit from './dsta/DstaEdit.jsx';
import DmunityMainPage from './dmunity/DmunityMainPage'
import DmunityDetail from './dmunity/DmunityDetail'
import DmunityWrite from './dmunity/DmunityWrite'
import DmunityEdit from './dmunity/DmunityEdit'
import Dmap from './dmap/DmapMainPage'
import MyPage from './mypage/MyPageMainPage'
import MyPageEdit from './mypage/MyPageEdit'
import Login from './signin/Login'
import SignUp from './signup/SignUp'
import SignUpComplete from './signup/SignUpComplete'

export default function Wrap() {
  return (
    <div id='wrap'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="dsta" element={<DstaMainPage />} />
            <Route path='dsta-detail' element={<DstaDetail />} />
            <Route path='dsta-write' element={<DstaWrite />} />
            <Route path='dsta-edit' element={<DstaEdit />} />
            <Route path='dmunity' element={<DmunityMainPage />} />
            <Route path='dmunity-detail' element={<DmunityDetail />} />
            <Route path='dmunity-write' element={<DmunityWrite />} />
            <Route path='dmunity-edit' element={<DmunityEdit />} />
            <Route path='dmap' element={<Dmap />} />
            <Route path='mypage' element={<MyPage />} />
            <Route path='mypage-edit' element={<MyPageEdit />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='signup-complete' element={<SignUpComplete />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}