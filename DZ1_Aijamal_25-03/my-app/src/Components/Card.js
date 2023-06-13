
import React from 'react';



function Card(props) {
    const def=()=>{
        const arg=props.info.title
        props.func(arg)
    }
    return (
        <div className='card'>
            <img src={props.info.image} ></img>
            <div className='title'>{props.info.title}</div>
            <div className='description'>{props.info.description}</div>
            <button className='button' onClick={def}>{props.info.button}</button>
            <p className='content'>{props.info.content}</p>

        </div>
    );
}

export default Card;