import React from 'react'
import { Link } from 'react-router-dom';

function CardFooter({ title = '', items = [] }) {
    console.log(items);
    return (
        <div>
            <h3>{ title }</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to="xyz">{ item }</Link>
                    </li>
                ))}
            </ul> 
        </div>
    )
}

export default CardFooter