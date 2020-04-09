import React from 'react';

import './index.css';


function Categories(props) {
    const item = props.item;
    const selected = Boolean(props.selected);

    return (
        <a href={'/bestiary?category='+item} className={'categories-item'+(selected ? ' categories-selected' : '')}>
            <p>{item}</p>
            <img alt={item} src={require('../../Images/categories/'+item.replace(' ', '_')+'.webp')} />
        </a>
    );
}

export default Categories;
