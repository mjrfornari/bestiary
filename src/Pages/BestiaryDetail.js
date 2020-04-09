import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit'
import {back} from 'react-icons-kit/entypo/back'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import api from '../services/api'
import { stopVideos } from '../utils'

import './styles/BestiaryDetail.css';

const swal = withReactContent(Swal)


function BestiaryDetail() {
  const [bestiaryDetail, setBestiaryDetail] = useState({ name: '', title: ''});

  function playVideo(e, item) {
    e.preventDefault()
    swal.fire({
        html:  
            <div className="playVideo">
                <h3>{item.title}</h3>
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

  useEffect(() => {
    async function fetchData() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const category = urlParams.get('category')
      const id = urlParams.get('id')
      if (category) {
        let items = await api.getData('/bestiaries/'+category)
        setBestiaryDetail(items[Number(id)])
      }
    }


    fetchData()

  }, [])

  return (
    <div id="BestiaryDetail">
      <div className="detailHeader">
        <h2>{bestiaryDetail.name}</h2>
        <img
          src={'/images/monsters/'+bestiaryDetail.name.replace(' ', '')+'.gif'} 
          alt={bestiaryDetail.name} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src="/images/monsters/NoImage.png"
          }}
        />
        <button onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}><Icon icon={back} size={25}/></button>
      </div>
      {bestiaryDetail.videoId ? 
          (<div className="bestiaryVideo">
              <button onClick={(e) => playVideo(e, bestiaryDetail)}>
                  <figure>
                      <img alt={bestiaryDetail.title} src={'https://img.youtube.com/vi/'+bestiaryDetail.videoId+'/maxresdefault.jpg'} />
                  </figure>
              </button>  
          </div>) 
        : 
          (<span>Video em desenvolvimento...</span>)
      }
      <div className="details">
        <p><strong>Quantidade:</strong> {bestiaryDetail.quantity}</p>
        <p><strong>Pontos de Charm:</strong> {bestiaryDetail.points}</p>
        <p><strong>Recomendação:</strong> {bestiaryDetail.recommendation}</p>
        <p><strong>Level Recomendado:</strong> {bestiaryDetail.recommendedLevel}</p>
        <p><strong>Maneira de Hunt:</strong> {}</p>
        <p><strong>Pontos do Respawn:</strong> {bestiaryDetail.respawnPoints}</p>
        <p><strong>Analysis:</strong> {bestiaryDetail.analysis}</p>
        <p><strong>Observações:</strong> {bestiaryDetail.ps}</p>
        <p><strong>Loots Raros:</strong> {bestiaryDetail.rareLoots}</p>
        <p><strong>Profitável:</strong> {bestiaryDetail.profitable}</p>
        <p><strong>Quest de Acesso:</strong> {bestiaryDetail.accessQuest}</p>
      </div>
    </div>
  );
}

export default BestiaryDetail;
