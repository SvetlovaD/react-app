import React from "react";
import style from './news.module.css';
import like from '../profile/img/like.png';


const News = (props) => {
    return(
        <div className={style.newsContainer}>
            <div className={style.newsDesc}>
                <img src={props.avatar} alt="" className={style.avatar}/>
                <div>
                <p className={style.newsName}>{props.name}</p>
                <p className={style.newsDate}>{props.date}</p>
                </div>
            </div>
            <p className={style.newsText}>{props.text}</p>
            <div>
                <img src={props.img} alt="" className={style.newsPhoto}/>
            </div>
            <Counter likes={props.likes}/>
        </div>
    )
}


const NewsFeed = (props) => {

    let newsItem = props.news.map(item => <News avatar={item.avatar} name={item.name} date={item.date} text={item.text} img={item.img} likes={item.likes}/>)

    return (
        <div className={style.newsFeed}>
            <h2>News Feed</h2>
            {newsItem}
        </div>
    )
}


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.likes
          }
    }

    clickForward = (e) => {
        this.setState({count: this.state.count + 1})
    };


    render (){
        return (
            <div className={style.newsLikes}>
                <img src={like} alt="" className={style.likes} onClick={this.clickForward}/>
                <p className={style.likesText}>{this.state.count}</p>
            </div>
        )
    }
}

export default NewsFeed;