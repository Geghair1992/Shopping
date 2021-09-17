import React from 'react'
import Navigation from '../Navigation/Navigation'

const Layout = props => {
    return (
        <div>
            <Navigation/>
              <main>
                   {props.children}              

              </main>


            <h3>&copy;2020</h3>
            
        </div>
    )
}

export default Layout;
