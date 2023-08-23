import React from 'react'
import ShieldCheck from '../../assets/header/ShieldCheck.png'
import CreditCard from '../../assets/header/CreditCard.png'
import Truck from '../../assets/header/Truck.png'
import './info.css'


function Info(props) {
  return (
    <div>
      <div className='flexContainer'>
        <div className='info'>
          <img src={ShieldCheck} alt='shieldCheck' />
          <p>Compra <b>100% segura</b></p>
        </div>

        <div className='info'>
          <img src={Truck} alt='creditCard' />
          <p><b>Frete grátis</b> acima de R$ 200</p>
        </div>

        <div className='info'>
          <img src={CreditCard} alt='truck' />
          <p><b>Parcele</b> suas compras</p>
        </div>

      </div>

    <div className='hrLimit'>
        <hr className='border-bottom'/>
    </div>
    </div>

    
  )
}

export default Info