import ApiCall from "./ApiCall.jsx";
import {useEffect, useState} from "react";
import '../styles/GameCardComponent.scss';
import icon from '../assets/questionMark.svg';

export default function GameCardComponent({func, pokemonUrl, id}) {
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        ApiCall.getPokemon(pokemonUrl, setPokemonData);
    }, [pokemonUrl]);

    return (
        <div className="game-card" onClick={func} data-id={id}>
            {
                Object.keys(pokemonData).length > 0 ?
                    <div className='game-card__box' data-id={id}>
                        <img className='game-card__box__img' alt={pokemonData.name} src={pokemonData.image} data-id={id} />
                        <div className='game-card__box__name' data-id={id}>
                            {pokemonData.name.split('')[0].toUpperCase() + pokemonData.name.split('').splice(1).join('')}
                        </div>
                    </div>
                    :
                    <div className='game-card__box'>
                        <div className='game-card__box__img__empty'>
                            <img className='game-card__box__img__empty__icon' alt='Question mark' src={icon} />
                        </div>
                        <div className='game-card__box__name__empty'>
                            Loading...
                        </div>
                    </div>
            }
        </div>
    );
}