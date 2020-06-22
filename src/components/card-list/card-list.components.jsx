import React from 'react'
import {CardData} from '../card/card.component'


export default function CardList (props) {
    return (
        
  <div className="card-list">

   {props.monsters.map(monster => (
        
        <CardData key={monster.id}  monster={monster} /> 
           
    ))}
 </div>
    )
}
