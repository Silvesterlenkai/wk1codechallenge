import React from 'react'
import Display from './components/display/Display'
import Search from './components/search/Search'
import "./Style.css"
function App() {
  return (
    <>
     <h1 className='header'>Bank of Flatiron</h1>
      <Search/>
      <Display/>
    </>
  )
}

export default App

 
