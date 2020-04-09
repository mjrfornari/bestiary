import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit'
import {ic_search} from 'react-icons-kit/md/ic_search'

import api from '../services/api'

import Categories from '../Components/Categories'
import Filters from '../Components/Filters'
import BestiaryItem from '../Components/BestiaryItem'

import './styles/Bestiaries.css';


function Bestiaries() {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState([]);
  const [bestiaryItems, setBestiaryItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [searchedMonster, setSearchedMonster] = useState(false);

  useEffect(()=>{
    setCategories([
      'Amphibic', 
      'Aquatic', 
      'Bird', 
      'Construct', 
      'Demon', 
      'Dragon', 
      'Elemental', 
      'Extra Dimensional', 
      'Fey', 
      'Giant', 
      'Human',
      'Humanoid',
      'Lycanthrope',
      'Magical', 
      'Mammal',
      'Plant',
      'Reptile',
      'Slime',
      'Undead',
      'Vermin'
    ])

    setFilters([
      'Fast Respawn',
      'World Change',
      'Free Charms',
      'Eventos Anuais',
      'Boss Charms'
    ])
  }, [])

  useEffect(() => {
    async function fetchData() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const category = urlParams.get('category')
      const searchMonster = urlParams.get('searchMonster')

      if (category) {
        let items = await api.getData('/bestiaries/'+category)
        if ((items || []).length > 1) items.sort((a,b) => a.categorySequence - b.categorySequence)
        setBestiaryItems(items || [])
        setSelectedCategory(category)
        document.getElementById('listBestiariesDiv').scrollIntoView();
      }

      if (searchMonster) {
        let items = await api.getData('/bestiaries')
        let monsters = Object.values(items)
        let categories = Object.getOwnPropertyNames(items)
        console.log(categories)
        let filteredItems = monsters.reduce((accumulator, actual, index) => {
          return accumulator.concat(
            actual.filter((monster) => {
              monster.category = categories[index]
              return ((monster.name.toUpperCase().indexOf(searchMonster.toUpperCase()) > -1) || (monster.extraMonsters.toUpperCase().indexOf(searchMonster.toUpperCase()) > -1))
            })
          )
        }, [])
        console.log(filteredItems)
        setBestiaryItems(filteredItems || [])
        setSearchedMonster(searchMonster)
        document.getElementById('listBestiariesDiv').scrollIntoView();
      }
    }

    fetchData()

  }, [])

  return (
    <div id="Bestiaries">
      <h2>Bestiary</h2>
      <div className="categoriesDiv">
        <h3>Categorias</h3>
        <div className="listCategoriesDiv">
          {categories.map((item) => <Categories item={item} selected={selectedCategory === item}/>)}
        </div>
        <h3>Filtros</h3>
        <div className="listFiltersDiv">
          <form className="search">
            <input name="searchMonster"/>
            <button className="buttonSearchMonster" >
              <Icon className="iconSearchMonster" icon={ic_search} size={25}/>
            </button>
          </form>
          {filters.map((item) => <Filters item={item} selected={selectedCategory === item.replace(' ', '')}/>)}
        </div>
      </div>
      {
        (selectedCategory || searchedMonster) ?
        (<div id="listBestiariesDiv" className="listBestiariesDiv">
          {(bestiaryItems.length > 0) ? bestiaryItems.map((item, index) => <BestiaryItem item={item} index={index} category={selectedCategory || item.category}/>) : (<p className="noMonsters">Ainda estamos produzindo vídeos para essa categoria ou o nome pesquisado nao foi encontrado.</p>)}
        </div>) :
        (<></>)
      }
      
    </div>
  );
}

export default Bestiaries;
