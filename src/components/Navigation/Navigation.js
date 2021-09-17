import React from 'react'
import styles from './Navigation.module.css'
import Link from 'next/link'

const Navigation = () => {
    return (
         <nav className={styles.nav}>
            <ul>
               <li>
                  <Link href="/">
                     <a >Home</a>
                  </Link>
               
               </li>
               <li>
                 <Link href="/cart">
                     <a >Cart</a>
                 </Link>
               </li>
               <li>
                   <Link href="/about">
                     <a >About US</a>
                   </Link>
               </li>
               <li>
                  <Link href="/contact">
                     <a >Contact</a>
                  </Link>
               </li>
            </ul>
        </nav>
        
    );
};

export default Navigation;
