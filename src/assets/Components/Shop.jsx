import './Shop.css'
import CARD from './Card.jsx'
import {CARD_CONCEPTS} from '../../data.js'

export default function Shop(){

    return(
        <div className='shopContainer'>
        <div className='shopwrapper'>
        <h1 className="shop-heading">
      <span className="large-shop">SEEDS</span>
      <span className="small-shop">seeds</span>
  </h1>
  </div>
        <div className='card'>
        <CARD {...CARD_CONCEPTS [0]}/>
        <CARD {...CARD_CONCEPTS [1]}/>
        <CARD {...CARD_CONCEPTS [2]}/>
        <CARD {...CARD_CONCEPTS [3]}/>
        <CARD {...CARD_CONCEPTS [4]}/>
        <CARD {...CARD_CONCEPTS [5]}/>
      </div>
      </div>
    );
}