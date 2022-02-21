import '../styles/stylesheets/CardTitle.css';

export default function CardTitle(props) {
    return (
        <h3 className={`card-title ${props.color}`}>{props.title}</h3>
    )
}