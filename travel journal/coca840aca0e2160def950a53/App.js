import React from "react"
import Card from "./Card"
import Navbar from "./Navbar"
import data from "./data"
console.log(data)
const cards = data.map ((item,index) => (
    <Card
    key={item.id}
    index={index} 
    img={item.imageUrl}
    country={item.location}
    mapsUrl={item.googleMapsUrl}
    startDate={item.startDate}
    endDate={item.endDate}
    description={item.description}
    location={item.title}
    />
))
console.log(cards)
export default function App() {
    return (
    <div>
        <Navbar />
        {cards}
    </div>
    )
}