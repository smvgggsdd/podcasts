import '../styles/stylesheets/Card.css';
import CardNumber from './CardNumber';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Description from './Description';


export default function Card(props) {
    return (
        <div className="card">
            <CardNumber number={props.number}/>
            <CardImage imageUrl={props.podcast.image} />
            <CardBody podcast={props.podcast}/>
            <Description description={props.podcast.description}/>
        </div>
    )
}