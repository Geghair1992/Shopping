import React from 'react'
import styles from './Card.module.css'
import Link from "next/link"

const Card = props => {
    return (
        <div className={styles.card}>
         <img src={props.item.image}/>
         <h2>{props.item.title}</h2>
         <h3>{props.item.price} $</h3>
         <Link href={`/products/[id]`} as={`/products/${props.item.id}`}>
            <a>Details</a>
         </Link>
            
        </div>
    )
}

export default Card;
