import React from "react";
import style from './videos.module.css';

const Videos = () => {
    return (
        <div className={style.videos}>
            <h2>Videos</h2>
            <div className={style.videosWrapper}>
            <iframe src="https://www.youtube.com/embed/ILOA8IxD7m0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/Ja9IUKElT5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/QqwVUrymnno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={style.videosWrapper}>
            <iframe  src="https://www.youtube.com/embed/JwzmFj64y6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/FkABKFcgqNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/0-7IHOXkiV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={style.videosWrapper}>
            <iframe  src="https://www.youtube.com/embed/FtJbyI-7Igw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/zP50Ewh31E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  src="https://www.youtube.com/embed/NOletMMI0B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Videos; 