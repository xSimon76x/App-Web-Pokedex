import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import StatisticsPokedex from "../../components/statisticsPokedex"


test('renders content StatisticsPokedex', () => {

    const objPokemon = [{
        "id": 25,
        "name": "pikachu",
        "height": 4,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "weight": 60

    }]
    const component = render(<StatisticsPokedex objPokemon={objPokemon} />)
    console.log(component)
})

// ERROR!!! .map()