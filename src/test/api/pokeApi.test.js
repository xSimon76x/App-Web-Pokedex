import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import { PokeApi } from "../../api/pokeApi"


test('renders content PokeApi', () => {

    const rutaAPI = "https://pokeapi.co/api/v2/pokemon?limit=200"
    const component = render(PokeApi(rutaAPI))
    console.log(component)
})

// ERROR!!! call hooks()