// import Layout from '../src/components/Layout/Layout'

// export default function Home() {
//   return (
//     <Layout>
//       <div style={{marginTop:200}} className="container">
     
//        <h1>Hello World</h1>
//       </div>
//     </Layout>
//   )
// }

import React from 'react'
import fetch from 'isomorphic-unfetch'
import Card from '../src/components/Card/Card';
import styles from '../pages/products/products.module.css'

const Index = props => {
  return (
    <div className={styles.row}>
       {props.result.map(n =>{
         return (
            <Card key={n.id} item={n}/>
         )
       })}


    </div>
  )
}

export default Index;

Index.getInitialProps = async ctx => {

  const url = encodeURI(`https://fakestoreapi.com/products`)
  const fetched = await fetch(url)
  const result = await fetched.json()


  return {result}
}

