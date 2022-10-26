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
import NewsFeed from './components/main/news/news';
import PostsContainer from './components/main/profile/postContainer';
import ChatContainer from './components/main/messages/messagesContainer';
import FriendsContainer from './components/main/friends/friendsContainer';
import NewsContainer from './components/main/news/newsContainer';
import Login from './components/login/login';
import MainContainer from './components/main/mainContainer';

function App(props) {
  return (
    <div className='Body'>
        <Header />
        <Main>
        {/* <Route path='/login*' element={<Login/>}/> */}
        <Nav/>
        <Routes>
        <Route path='' element={<PostsContainer />}/> 
        <Route path='react-app/profile' element={<PostsContainer />}/>
        <Route path='react-app/messages/*' element={<ChatContainer />}/>
        <Route path='react-app/friends/*' element={<FriendsContainer />}/>
        <Route path='react-app/news' element={<NewsContainer/>}/>
        <Route path='react-app/videos' element={<Videos/>}/>
        </Routes>
    
        </Main>
        <Footer/>
    </div>
    
  );
}

export default App;
