import React from 'react'
import ChacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (

    <Spinner/>) : (

    <section className="cards">
        {items.map(item =>(
            <ChacterItem key={item.char_id} item={item} ></ChacterItem>
        ))}
    </section>
    )
}

export default CharacterGrid
