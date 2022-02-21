import {ReactComponent as Apple} from '../svg/apple.svg';
import '../styles/stylesheets/Link.css';

export default function Itunes(props) {
    return (
        <a className={`itunes link ${props.color}`} href={`htttps://itunes.apple.com/us/podcast/id${props.link}`}>
            <span className={`apple ${props.color}`}>
                <Apple fill={props.color === 'normal' ? '#777777' : '#fc731c'} 
                alt="iTunes apple graphic"/>
            </span>
            &nbsp;ITUNES
        </a>
    )   
}