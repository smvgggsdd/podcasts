import '../styles/stylesheets/Header.css';
import Title from './Title';
import Circle from './HeaderCircle';
import Triangle from './HeaderTriangle';

export default function Header() {
    return (
        <>
            <div className="header-container">
                <header className="mainHeader">
                    <Title />
                </header>
                <Circle />
                <Triangle />
            </div>
        </>
    )
}