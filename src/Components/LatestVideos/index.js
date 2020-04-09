import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { stopVideos } from '../../utils'


import './index.css';

const swal = withReactContent(Swal)


function LatestVideos(props) {
    const item = props.item;

    function playVideo(e, item) {
        e.preventDefault()
        swal.fire({
            html:  
                <div className="playVideo">
                    <h3>{item.title}</h3>
                    <iframe className='yt_player_iframe' title={item.title} src={'https://www.youtube.com/embed/'+item.id} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowScriptAccess allowFullScreen/>
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
        <div className="latestVideos-item">
            <button onClick={(e) => playVideo(e, item)}>
                <figure>
                    <img alt={item.title} src={'https://img.youtube.com/vi/'+item.id+'/maxresdefault.jpg'} />
                </figure>
                <span>{item.title}</span>
            </button>
            
        </div>
    );
}

export default LatestVideos;
