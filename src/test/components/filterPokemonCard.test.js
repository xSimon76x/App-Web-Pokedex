import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import FilterPokemonCard from "../../components/filterPokemonCard"

test('renders content FilterPokemonCard', () => {
    const objectPokemon = [{
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    }]
    const component = render(<FilterPokemonCard objectPokemon={objectPokemon} />)
    console.log(component)
})         