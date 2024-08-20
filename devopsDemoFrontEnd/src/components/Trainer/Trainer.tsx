import axios from "axios";
import React, { useEffect, useState } from "react";

interface Trainer {
    trainerId: number,
    username: string,
    password: string
}

function Trainer() {
    const [trainerList, setTrainerList] = useState<Trainer[] | null> (null);

    const url = 'https://aspdemo22-f5dsewgrgma5aggs.eastus2-01.azurewebsites.net/api/trainer';

    useEffect(() => {
        async function fetchTrainer() {
            try {
                const res = await axios.get(url);
                setTrainerList(res.data);
            } catch (error) {
                console.error('Error: ', error);
            }
        }

        fetchTrainer();
    }, []);

    return (
    <>
    <div style={{margin: 0}}>
        <header>
            <h1 style={{textAlign:"center"}}>Trainer</h1>
        </header>
        <article>
            {trainerList ? <ul style={{listStyleType:"none", position:"absolute", left:"50%", width:"30%", transform: "translate(-50%)"}}>
                {trainerList.map(t =>(
                    <li key={t.trainerId} style={{border:"solid", margin:"10px"}}>
                        <h2>Name: {t.username}</h2>
                        <h2>Password: {t.password}</h2>
                    </li>
                ))}
            </ul> : <p>There are no pokemon</p>}
        </article>
    </div>
    </>
    );
}
export default Trainer;