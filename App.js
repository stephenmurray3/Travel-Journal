import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })
    
    return (
        <div>
            <Header />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}