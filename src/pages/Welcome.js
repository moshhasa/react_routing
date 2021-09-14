import React from 'react'
import { Route } from 'react-router'

const Welcome = () => {
    return (
        <section>
             <h1> Wolcome page</h1>
             <Route path="/welcome/new-user">
                <p>Welome, new user</p>
             </Route>
        </section>
       
    )
}

export default Welcome
