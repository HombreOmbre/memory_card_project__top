import pokeballImg from '../assets/pokeball.svg';
import '../styles/HeaderCompontent.scss'

export default function HeaderComponent({score, bestScore}) {
    return (
        <header className="header-component">
            <div className="header-component__container">
                <div className="header-component__container__left-box">
                    <img className="header-component__container__left-box__img" alt="logo" src={pokeballImg} />
                    <div className="header-component__container__left-box__title">
                        Pokemon Memory Game
                    </div>
                </div>
                <div className="header-component__container__right-box">
                    <div className="header-component__container__right-box__score">
                        Score: {score}
                    </div>
                    <div className="header-component__container__right-box__score">
                        Best score: {bestScore}
                    </div>
                </div>
            </div>
        </header>
    );
}