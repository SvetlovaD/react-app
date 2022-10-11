import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Profile from './components/main/profile/profile';
import Nav from './components/main/nav/nav';
import Footer from './components/footer/footer';
import Messages from './components/main/messages/messages';
import Videos from './components/main/videos/videos';
import Friends from './components/main/friends/friends';
import NewsFeed from './components/main/news feed/news';

function App() {
  return (
    <BrowserRouter>
    <div className='Body'>
        <Header />
        <Main>
        <Nav/>
        
        <Routes>
        <Route exact path="" element = {<Profile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/news' element={<NewsFeed/>}/>
        <Route path='/videos' element={<Videos/>}/>
        </Routes>
    
        </Main>
        <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
