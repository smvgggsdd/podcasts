import '../styles/stylesheets/CardEpisodes.css';

export default function CardEpisodes(props) {
    return (
        <p className="card-episodes">{props.episodes} episodes</p>
    )
}