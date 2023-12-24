import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logoBW.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faMusic, faUser, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return(
        <div className='navbar'>
            <Link className='logo' to='/'>
                <p className='subtext'>Spotify Developed</p>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='white' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='ai-link' to='/music'>
                    <FontAwesomeIcon icon={faWandMagicSparkles} color='white' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='white' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="blank" rel="nonrefference" href="https://www.linkedin.com/in/mike-damiano-80a197221/">
                        <FontAwesomeIcon icon={faLinkedin} color='white'/>
                    </a>
                </li>
                <li>
                    <a target="blank" rel="nonrefference" href="https://github.com/mikedami">
                        <FontAwesomeIcon icon={faGithub} color='white'/>
                    </a>
                </li>
                <li>
                    <a target="blank" rel="nonrefference" href="https://open.spotify.com/user/mike12football">
                        <FontAwesomeIcon icon={faSpotify} color='white'/>
                    </a>
                </li>
            </ul>
        </div>
    ) 
}

export default Sidebar