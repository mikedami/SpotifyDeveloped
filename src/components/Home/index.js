import {Link} from 'react-router-dom';
import { useState } from 'react';
import Animation from '../Animation/index.js';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const arr = ['T','h','e',' ','f','u','t','u','r','e',' ','o','f',' ','d','i','s','c',
    'o','v','e','r','i','n','g',' ','n','e','w',' ','m','u','s','i','c'];

    return (
        <>
        <div className ="container home-page">
            <div className ="welcome-text">
                <h1>
                    Hello,
                </h1>
                <h2>
                    Welcome to Spotify Developed
                </h2>
                <h3>
                    <Animation letterClass={letterClass}
                    strArray={arr} index={15}></Animation>
                </h3>
                <h4>
                    <Link to="/music" className='mbutton'>Let's Go</Link>
                </h4>

            </div>

            <div className="particle-container">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>


        </div>
        </>
    )
}

export default Home