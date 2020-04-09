import React from 'react';

import './index.css';


function Filters(props) {
    const item = props.item;
    const selected = Boolean(props.selected);

    return (
        <a href={'/bestiary?category='+item.replace(' ', '')} className={'filters-item'+(selected ? ' filters-selected' : '')} replace>
            <p>{item}</p>
        </a>
    );
}

export default Filters;
