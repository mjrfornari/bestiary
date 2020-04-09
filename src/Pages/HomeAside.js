import React, { useState, useEffect } from 'react';

import api from '../services/api'

import LatestVideos from '../Components/LatestVideos'

import './styles/HomeAside.css';

function HomeAside() {
  const [latestVideos, setLatestVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLatestVideos(await api.getData('/latestVideos'))
    }

    fetchData()
    
  }, [])


  return (
    <div id="HomeAside">
        <h2>Últimos Vídeos</h2>
        <div className="divLatestVideos">
          {latestVideos.slice(0, 3).map((item) => <LatestVideos item={item}/>)}
        </div>
    </div>
  );
}

export default HomeAside;
