import {ReactComponent as Apple} from '../svg/apple.svg';
import '../styles/stylesheets/Link.css';

export default function Itunes(props) {
    return (
        <a className="itunes link" href={`htttps://itunes.apple.com/us/podcast/id${props.link}`}>
            <Apple />
            ITUNES
        </a>
    )   
}