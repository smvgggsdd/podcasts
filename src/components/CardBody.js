import '../styles/stylesheets/Card.css';
import CardAuthor from "./CardAuthor";
import CardEpisodes from "./CardEpisodes";
import CardTitle from "./CardTitle";
import Rss from "./Rss";
import Itunes from "./Itunes";
import WebLink from "./WebLink";

export default function CardMain() {
    return (
        <div className="card-main">
            <CardTitle />
            <CardAuthor />
            <CardEpisodes />
            <div className="icons">           
                <Itunes />
                <WebLink />
                <Rss />
            </div>

        </div>
    )
}