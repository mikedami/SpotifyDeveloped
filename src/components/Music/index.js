import './index.scss';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";


const Music = () => {

    const[userInput, setUserInput] = useState('')
    const[placeHolder, setPlaceHolder] = useState(true)
    const navigate = useNavigate()

    const tagCloud = React.useMemo( () => <TagCloud className='Sphere'
    options={TagCloudOptions => ({radius: 400, maxSpeed: "fast", initSpeed: "fast", keep:true})}
>
        {[
            "Bass",
            "EDM",
            "R&B",
            "Rap",
            "Rock",
            "House",
            "Jazz",
            "Wubs",
            "Pop",
            "Country",
            "Latin",
            "Techno",
            "Folk",
            "Indie",
            "Classical",
        ]}
    </TagCloud>, []);

    const change = event =>{
        const text = event.target.value
        setUserInput(event.target.value)
        setPlaceHolder(text == '')
    }

    const enterHandle = (event) => {
        event.preventDefault()
        navigate('/music/results', {state: {userInput}})
    }


    return (
        <div className="search-page">
            <div className="search">
                <form onSubmit={enterHandle}>
                    <input className='search-box'
                        onChange={change} 
                        value={userInput}
                        placeholder={placeHolder ? 'What song do you enjoy?' : ''}
                    />
                </form>
            </div>

            <p className="text">Something like: </p>


            <div className="suggestion">
                <div className="suggestion-box">
                    <ul className="suggestion-box-list">
                        <li className="suggestion-box-list-item">Escape by John Summit</li>
                        <li className="suggestion-box-list-item">Codeine Crazy - Future</li>
                        <li className="suggestion-box-list-item">Bad Blood by Taylor Swift</li>
                        <li className="suggestion-box-list-item">Supersonic - Skrillex</li>
                    </ul>
                </div>
            </div>

            {tagCloud}

        </div>
    )
    
}

export default Music