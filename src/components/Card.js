import '../styles/stylesheets/Card.css';
import CardNumber from './CardNumber';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Description from './Description';
import React, { useState } from 'react';


export default function Card(props) {
    const [color, setColor] = useState('normal');
    function handleClick() {
        setColor(color === 'normal' ? 'inverted' : 'normal');
    }
    return (
        <div className="card" onClick={handleClick}>
            <CardNumber number={props.number}/>
            <CardImage alt={props.podcast.title} imageUrl={props.podcast.image} color={color} />
            <CardBody color={color} podcast={props.podcast}/>
            <Description description={props.podcast.description}/>
        </div>
    )
}