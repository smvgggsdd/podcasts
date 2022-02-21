import '../styles/stylesheets/CardImage.css';

export default function CardImage(props) {
    return (
        <div className="image-container">
            <img className={`card-image ${props.color}`} src={props.imageUrl} alt={`${props.alt}'s logo'`} />
        </div>
    )
}