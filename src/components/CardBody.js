import '../styles/stylesheets/Card.css';
import CardAuthor from "./CardAuthor";
import CardEpisodes from "./CardEpisodes";
import CardTitle from "./CardTitle";
import Rss from "./Rss";
import Itunes from "./Itunes";
import WebLink from "./WebLink";

export default function CardMain(props) {
    return (
        <div className="card-main">
            <CardTitle title={props.podcast.title}/>
            <CardAuthor author={props.podcast.publisher}/>
            <CardEpisodes episodes={props.podcast.total_episodes}/>
            <div className="icons">           
                <Itunes link={props.podcast.itunes_id}/>
                <WebLink link={props.podcast.website}/>
                <Rss />
            </div>

        </div>
    )
}