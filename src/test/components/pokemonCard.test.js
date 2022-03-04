import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import PokemonCard from "../../components/pokemonCard"

test('renders content PokemonCard', () => {

    const rutaAPI = "https://pokeapi.co/api/v2/pokemon"
    const component = render(<PokemonCard rutaAPI={rutaAPI} />)
    console.log(component)
})    