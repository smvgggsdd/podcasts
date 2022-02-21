import '../styles/stylesheets/CardAuthor.css';

export default function CardAuthor(props) {
    return (
        <p className='card-author'>by <strong className={props.color}>{props.author}</strong></p>
    )
}