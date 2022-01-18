import React from "react";
import './car_list.css'

import Card from "../card/card";
 const CardList = (props)=>{
   return  <div className="card-list">
               {props.monsters.map((monster) => {
                 return <Card monster = {monster} key={monster.id}/>;
               })}
           </div>
   
}

export default CardList;