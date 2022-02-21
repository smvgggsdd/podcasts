import {ReactComponent as RssIcon} from '../svg/rss.svg';
import '../styles/stylesheets/Link.css';

export default function Rss(props) {
    return (
        <a className={`rss link ${props.color}`} href="#">
            <span className="rss-icon">
                <RssIcon fill={props.color === 'normal' ? '#777777' : '#fc731c'}
                alt="rss graphic"/>
            </span>
            &nbsp;RSS
        </a>
    )   
}