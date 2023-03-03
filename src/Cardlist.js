import React from 'react';
import Card from './Card';
import { robots } from './robots';
import App from './App';

const Cardlist = ({robots}) => {
    //const cardArray = robots.map((username, i) =>{
        return (
            <div> 
                {
                    robots.map((username, i) =>{
                        return(
                            <Card 
                                key={i} 
                                id = {robots[i].id} 
                                name = {robots[i].name} 
                                username = {robots[i].username} 
                                email = {robots[i].email}
                            />
                        );
                    })
                }
            </div>
        );
}


export default Cardlist;