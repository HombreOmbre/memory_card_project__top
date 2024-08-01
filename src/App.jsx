import {useEffect, useState} from "react";
import ApiCall from "./components/ApiCall.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import GameComponent from "./components/GameComponent.jsx";
import './styles/App.scss';

export default function App() {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

    const [pokemons, setPokemons] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const offset = Math.floor(Math.random() * 500);
        ApiCall.getPokemonsArray(pokemonUrl, setPokemons, offset);
    },[]);

    return (
        <div className='app-container'>
            <HeaderComponent
                score={score}
                bestScore={bestScore}
            />
            <GameComponent
                pokemons={pokemons}
                score={score}
                setScore={setScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
            />
            <FooterComponent />
        </div>
    );
}
