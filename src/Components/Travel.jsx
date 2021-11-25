import React from "react"
import Data from "../data"
import TravelCard from "./TravelCard"

export default function Travel() {
    const cards = Data.map(item => {
        return (
            <TravelCard
                key={item.id} 
                {...item}
            />
        )
    })
    return (
        <div className="cards">
            <div className="travel-history">
                {cards}
            </div>
        </div>
    )
}