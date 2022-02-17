import '../styles/stylesheets/Card.css';
import CardNumber from './CardNumber';
import CardImage from './CardImage';
import CardMain from './CardMain';


export default function Card() {
    return (
        <div className="card">
            <CardNumber />
            <CardImage />
            <CardMain />
        </div>
    )
}