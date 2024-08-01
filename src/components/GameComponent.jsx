import '../styles/GameComponent.scss';
import {useState} from "react";
import GameCardComponent from "./GameCardComponent.jsx";

export default function GameComponent({ pokemons, score, setScore, bestScore, setBestScore }) {
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    let shuffledArray = pokemons.length > 0 ? shuffle(pokemons) : [];

    const checkBestScore = (tmpScore) => {
        if (tmpScore > bestScore) {
            setBestScore(tmpScore);
        }
    }

    const handleCardClick = (e) => {
        if (clickedPokemons.includes(parseInt(e.target.dataset.id))) {
            checkBestScore(score);
            setClickedPokemons([])
            setScore(0);
            return;
        }

        const tmpScore = score + 1;

        if (tmpScore === pokemons.length) {
            setClickedPokemons([]);
            checkBestScore(tmpScore);
            setScore(0);
            return;
        }

        const arr = [...clickedPokemons];
        arr.push(parseInt(e.target.dataset.id));
        setClickedPokemons(arr);
        setScore(tmpScore);
    }

    return (
      <main className="game-component-container">
          <div className="game-component-container__instruction">
              Get points by clicking on an image but don&apos;t click on any more than once!
          </div>
          {
              shuffledArray.length > 0 ?
                  <div className="game-component-container__gameboard">
                      {
                          pokemons.map((pokemon) => {
                              const splitedUrl = pokemon.url.split('/');

                              return (
                                  <GameCardComponent
                                    key={splitedUrl[splitedUrl.length - 2]}
                                    func={handleCardClick}
                                    pokemonUrl={pokemon.url}
                                    id={splitedUrl[splitedUrl.length - 2]}
                                  />
                              );
                          })
                      }
                  </div> :
                  <div className='game-component-container__gameboard__loading-container'>
                      Loading...
                  </div>
          }
      </main>
  )
}