import React from 'react'
import "./Main.css"
const Main = () => {
    const data = [{
        name: "Shubhangi",
        age: 21
    },
    {
        name: "Rajesh",
        age: 20
    }]
    return (
        <React.Fragment>
            <main>
                <h1>My name is {data[1].name}</h1> 
            </main>
        </React.Fragment>
    )
}

export default Main;