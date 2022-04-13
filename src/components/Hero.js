import React from 'react';

export default function Hero(props) {

    return(
        <section>
            <h1 id={props.id}>{props.text} {props.numberForTitle}</h1>
        </section>
    )
}