import {ReactComponent as Link} from '../svg/link.svg';
import '../styles/stylesheets/Link.css';

export default function WebLink(props) {

    return (
        <a className="web-link link" href={props.link}>
            <Link alt="web link graphic"/>
            &nbsp;WEB
        </a>
    )   
}
