import {ReactComponent as Link} from '../svg/link.svg';
import '../styles/stylesheets/Link.css';

export default function WebLink() {

    return (
        <a className="web-link link" href="#">
            <Link />
            WEB
        </a>
    )   
}
