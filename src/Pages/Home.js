import React, { useState, useEffect } from 'react';

import News from '../Components/News'

import './styles/Home.css';


function Home() {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(()=>{
    fetch('https://api.tibiadata.com/v2/latestnews.json')
    .then(res => res.json())
    .then(res => {
      console.log(res.newslist.data)
      setLatestNews(res.newslist.data)
    })
  }, [])

  return (
    <div id="Home">
      {/* <div className="calendarDiv">
        <FullCalendar className="calendar" defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} contentHeight={210} height={300}/>
        <div className="events">
          <h2>Event Schedule</h2>
        </div>
      </div> */}
      <div className="latestNews">
        <h2>Últimas Notícias</h2>
        <div className="newsDiv">
          {latestNews.slice(0, 7).map((item) => <News item={item}/>)}
        </div>
      </div>
      <div className="welcomeDiv">
        <h2>Bem vindo ao Bestiary.com.br</h2>
        <p>
          O Bestiary é o mais novo site de informações do Tibia.
        </p>
        <p>
          Estamos implementando o site com o intuito de divulgar vídeos e informações sobre o jogo, contribuindo para o crescimento da comunidade e de desenvolvedores de conteúdo.
        </p>
        <p>  
          Inicialmente, o projeto está focando em detalhar as melhores maneiras de se conseguir obter os bestiaries das criaturas do Tibia.
        </p>
      </div>
    </div>
  );
}

export default Home;
