import React from 'react';

import './index.css';


function News(props) {
    const item = props.item;

    return (
        <div key={item.id} className="news-item">
            <a href={item.tibiaurl} target="_blank" rel="noopener noreferrer">
                {item.news}
            </a>
            <img alt='tibia icon'src={require('../../Images/iconTibiaNews.png')}/>
        </div>
    );
}

export default News;
