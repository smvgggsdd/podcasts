import '../styles/stylesheets/Description.css';

export default function Description(props) {
    return (
        <div className="description-container">
            <p className="description">
                {props.description}
            </p>
        </div>
    )
}