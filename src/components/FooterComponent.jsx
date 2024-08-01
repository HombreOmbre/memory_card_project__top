import gitHubLogo from '../assets/githubLogo.svg';
import '../styles/FooterComponent.scss';

export default function FooterComponent() {
    return (
        <footer className="footer-component">
            <div className="footer-component__container">
                <p>
                    Copyright<span>©</span> {new Date().getFullYear()} by HombreOmbre
                </p>
                <a href='https://github.com/HombreOmbre' target='_blank'>
                    <img className="footer-component__container__logo" alt='GitHub logo' src={gitHubLogo} />
                </a>
            </div>
        </footer>
    );
}