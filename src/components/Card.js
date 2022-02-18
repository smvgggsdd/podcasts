import '../styles/stylesheets/Card.css';
import CardNumber from './CardNumber';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Description from './Description';


export default function Card() {
    return (
        <div className="card">
            <CardNumber />
            <CardImage />
            <CardBody />
            <Description />
        </div>
    )
}