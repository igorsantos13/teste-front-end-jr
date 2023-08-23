import React from 'react'
import VTEXlogo from '../../assets/header/vtexlogo.png'
import Lupa from '../../assets/header/MagnifyingGlass.png'

import box from '../../assets/header/Vector.png'
import heart from '../../assets/header/Heart.png'
import userCircle from '../../assets/header/UserCircle.png'
import ShoppingCart from '../../assets/header/ShoppingCart.png'

import './search.css'

function Search() {
  return (
    <>
    <div className='container'>
        <img src={VTEXlogo} alt='VTEX logo' />

        <div className="searchBar">
            <input type="text" placeholder='O que você está buscando?'/>
              <img className='logo' src={Lupa} alt="search" />
            {/* <button>
            </button> */}
        </div>

        <div className="icons">
            <img src={box} alt="box" />
            <img src={heart} alt="heart icon" />
            <img src={userCircle} alt="user icon" />
            <img src={ShoppingCart} alt="shopping icon" />
        </div>

    </div>
        <div className='hrLimit'>
        <hr className='border-bottom'/>
        </div>
    </>
  )
}

export default Search