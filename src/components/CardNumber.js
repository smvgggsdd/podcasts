import '../styles/stylesheets/CardNumber.css';
import {ReactComponent as Circle} from '../svg/circle.svg';

export default function CardNumber(props) {
    return (
        <div className="card-circle">
            <span className="card-number">{props.number}</span>
        </div>
    )
}