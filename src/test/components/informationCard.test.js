import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import InformationCard from "../../components/informationCard"

test('renders content InformationCard', () => {
    const counterMax = 200
    const objectPokemon = [{
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    }]

    const rutaAPI = "https://pokeapi.co/api/v2/pokemon?limit=200"
    const component = render(<InformationCard rutaAPI={rutaAPI} objectPokemon={objectPokemon} counterMax={counterMax} />)
    console.log(component)
})    