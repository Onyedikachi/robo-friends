import React from 'react';
import Card from './Card';

export const CardList = (props) => {
    const robotCards =  props.robots.map((robot, i)=><Card key={i} id={robot.id} name={robot.name} email={robot.email}/>);
    return (
        <div>
            {robotCards}
        </div>
    );
}
