import {ReactComponent as RssIcon} from '../svg/rss.svg';
import '../styles/stylesheets/Link.css';

export default function Rss() {
    return (
        <a className="rss link" href="#">
            <RssIcon />
            RSS
        </a>
    )   
}