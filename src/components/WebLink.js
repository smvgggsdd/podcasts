import {ReactComponent as Link} from '../svg/link.svg';
import '../styles/stylesheets/Link.css';

export default function WebLink(props) {

    return (
        <a className={`web-link link ${props.color}`} href={props.link}>
            <Link fill={props.color === 'normal' ? '#777777' : '#fc731c'}
             alt="web link graphic"/>
            &nbsp;WEB
        </a>
    )   
}
