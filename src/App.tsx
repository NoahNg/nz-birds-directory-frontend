import React from 'react'
import './App.css'
import Filters from './Filters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Sort from './Sort'

function App() {
  return (
    <div className='App' data-testid='app'>
      <div className='overlay' data-testid='overlay'>
        {' '}
        <div className='hero'>
          <div className='app-name' data-testid='appName'>
            <img src='/Assets/Icons/Kiwi Silhouette.png' alt='Icon' className='icon' />
            <h2>New Zealand Birds Directory</h2>
          </div>
          <div className='search-bar' data-testid='searchBar'>
            <FontAwesomeIcon icon={icon({ name: 'magnifying-glass' })} className='icon' />
            <h2>Search</h2>
          </div>
        </div>
        <div className='body' data-testid='body'>
          <Filters />
          <div className='display'>
            <div className='sort'>
              <div className='sort-left'>
                <h2>50 Birds</h2>
                <button className='reset-button'>RESET</button>
              </div>
              <Sort />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
