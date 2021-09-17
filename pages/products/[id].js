import React from 'react'
import fetch from 'isomorphic-unfetch'
import styles from './products.module.css'

const Single = props => {
    return (
        <div className={styles.single}>
            <img src={props.result.image}/>
            <h1>{props.result.title}</h1>
            <h2>{props.result.price}</h2>
            <p>{props.result.description}</p>
        </div>
    )
}

export default Single;

Single.getInitialProps = async ctx => {
    const url = encodeURI(`https://fakestoreapi.com/products/${ctx.query.id}`)
    const fetched = await fetch(url);
    const result = await fetched.json();

    return {result}

}