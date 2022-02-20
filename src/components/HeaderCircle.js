import {ReactComponent as Circle} from '../svg/circle.svg';
import '../styles/stylesheets/HeaderCircle.css';

export default function HeaderCircle() {
    return (
        <div className="header-circle">
            <Circle alt="circle graphic" width="100%" height="100%"/>
        </div>
    )
}