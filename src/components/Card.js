import '../styles/stylesheets/Card.css';
import CardNumber from './CardNumber';
import CardImage from './CardImage';
import CardBody from './CardBody';
import Description from './Description';


export default function Card(props) {
    return (
        <div className="card">
            {/* {props.id} */}
            <CardNumber />
            <CardImage />
            <CardBody />
            <Description />
        </div>
    )
}