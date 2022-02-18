import '../styles/stylesheets/Card.css';
import CardNumber from './CardNumber';
import CardImage from './CardImage';
import CardBody from './CardBody';


export default function Card() {
    return (
        <div className="card">
            <CardNumber />
            <CardImage />
            <CardBody />
        </div>
    )
}