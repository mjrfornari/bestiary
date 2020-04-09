import React from 'react';
import { Icon } from 'react-icons-kit'
import {ic_play_circle_outline} from 'react-icons-kit/md/ic_play_circle_outline'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { stopVideos } from '../../utils'

import './index.css';

const swal = withReactContent(Swal)


function BestiaryItem(props) {
    const item = props.item;
    const index = props.index;
    const category = props.category;

    function playVideo(e, item) {
        e.preventDefault();
        swal.fire({
            html:  
                <div className="playVideo">
                    <h3>{item.name}</h3>
                    <iframe className='yt_player_iframe' title={item.title} src={'https://www.youtube.com/embed/'+item.videoId} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowScriptAccess allowFullScreen/>
                </div>,
            buttons: false,
            width: '80vw',
            heightAuto: true,
            confirmButtonText: 'Fechar'
        }).then(result => {
            stopVideos()
        })
    }

    return (
        <a href={'/bestiary-detail?category='+category+'&id='+index} className="bestiary-item">
            <div className="row1">
                <p>{item.name}</p>
                <img src={'/images/monsters/'+item.name.replace(' ', '')+'.gif'} alt={item.name} onError={(e)=>{e.target.onerror = null; e.target.src="/images/monsters/NoImage.png"}}/>
            </div>
            <div className="row2">
                <div className="row2Wrapper">
                    <img src={require('../../Images/bestiary/XP_Boost.gif')} alt="level"/>
                    <p>{item.recommendedLevel}</p>
                </div>
                <div className="row2Wrapper">
                    <img src={require('../../Images/bestiary/Charm.png')} alt="charm"/>
                    <p>{item.points}</p>
                </div>
            </div>
            <div className="row3">
                <button onClick={(e) => playVideo(e, item)}>
                    <Icon className="playIcon" icon={ic_play_circle_outline} size={50}/>
                </button>
            </div>

            
            
            {/* <img alt={item} src={require('../../Images/categories/'+item.replace(' ', '_')+'.webp')} /> */}
        </a>
    );
}

export default BestiaryItem;
