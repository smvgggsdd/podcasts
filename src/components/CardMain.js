import CardAuthor from "./CardAuthor";
import CardEpisodes from "./CardEpisodes";
import CardTitle from "./CardTitle";

export default function CardMain() {
    return (
        <div className="card-main">
            <CardTitle />
            <CardAuthor />
            <CardEpisodes />
        </div>
    )
}