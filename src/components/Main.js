import '../styles/stylesheets/Main.css';
import Card from './Card';
import React, {useState, useEffect} from 'react';

export default function Main() {
    const [data, setData] = useState([]);
    let count = 1;
    const getData =()=>{
        fetch('sample-api-response.json', {
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson.podcasts)
        }); 
    }
    useEffect(()=>{
        getData()
    }, []);
    return (
        <main className="main">
            <ul>
                {data.slice(0, 5).map((data) => <li key={data.id}><Card number={count++} podcast={data} /></li>)}
            </ul>
        </main>

    )
}