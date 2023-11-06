import React from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}

      <div className='overlay'>
        {' '}
        {/* Create an overlay container */}
        <div className='hero'>
          {/* Your content goes here */}
          <div className='app-name'>
            <img src='/Assets/Icons/Kiwi Silhouette.png' alt='Icon' className='icon' />
            <h2>New Zealand Birds Directory</h2>
          </div>
          <div className='search-bar'>
            <img src='/Assets/Icons/Magnifying Glass.png' alt='Icon' className='icon' />
            <h2>Search</h2>
          </div>
        </div>
        <div className='body'>
          <h1>Section 3</h1>
          <p>Some text for section 3.</p>
        </div>
      </div>
    </div>
  )
}

export default App
