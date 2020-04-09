import React from 'react';
import { Icon } from 'react-icons-kit'
import {gears} from 'react-icons-kit/fa/gears'

import './styles/Construction.css';


function Construction() {
  return (
    <div id="Construction">
        <Icon className="constructionIcon" icon={gears} size={300}/>
        <p>Página em construção...</p>
    </div>
  );
}

export default Construction;
