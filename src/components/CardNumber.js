import '../styles/stylesheets/CardNumber.css';
import {ReactComponent as Circle} from '../svg/circle.svg';

export default function CardNumber() {
    return (
        <div className="card-circle">
            <Circle />
            <span className="card-number">1</span>
        </div>
    )
}