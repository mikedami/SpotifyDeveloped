import './index.scss';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const Result = () =>{

    const navigate = useNavigate()
    
    //Grab userInput
    const location = useLocation()
    const userInput = location.state.userInput || '';
    
    const[song, setSong] = useState("")
    const[artist, setArtist] = useState("")
    const[accessToken, setAccessToken] = useState("")

    const[recommendations, setRecommendations] = useState([])

    const[dispCalled, setDispCalled] = useState(false)
    
    useEffect(() => {
        
        //Setting access token for spotify api calls
        var authParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParam)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))

        //Setting strings for user song and user artist in required format
        if(userInput.includes(' by ')){
            const[songT, artistT] = userInput.split(' by ')
            setSong(songT)
            setArtist(artistT)
        } else if(userInput.includes(' - ')){
            const[songT, artistT] = userInput.split(' - ')
            setSong(songT)
            setArtist(artistT)
        } else if(userInput.includes('- ')){
            const[songT, artistT] = userInput.split('- ')
            setSong(songT)
            setArtist(artistT)
        } else if(userInput.includes(' -')){
            const[songT, artistT] = userInput.split(' -')
            setSong(songT)
            setArtist(artistT)
        } else {
            setSong("")
            setArtist("")
            alert("Please follow the format on the search page")
            window.location="/music"
        }
        
    }, [])
    
    /*This useEffect is made to set accessToken, and user inputted song and artist. With
    empty dependency array ^, it will only run one time, when the page first renders*/

    useEffect(() =>{
        if(accessToken && !dispCalled){
            dispCall().then(rec => {
                setRecommendations(rec)
                console.log(rec)
            }).catch(error => {
                console.log(error)
            })
            setDispCalled(true)
        }
    }, [accessToken, dispCalled])
    
    /*This useEffect is made to call dispCall and get the song info to display, but
    will only run if accessToken has correctly been set. This component will re-render
    only if accessToken changes. At first run it will fail, accessToken changes, and it
    is then updated*/

    async function dispCall(){

        var userParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        //Fetching song and artist ids

        const trackData = await fetch('https://api.spotify.com/v1/search?q=' + song + 'artist:' + artist + '&type=track&limit=1', userParams)
            .then(response => response.json())

        const trackID = trackData.tracks.items[0].id
        const artistID = trackData.tracks.items[0].artists[0].id

        //Get recommendations based on song & artist ids
        
        var rec = await fetch('https://api.spotify.com/v1/recommendations?limit=8&seed_artists=' + artistID + '&seed_tracks=' + trackID, userParams)
            .then(response => response.json())
            .then(data3 => { return data3.tracks })
        
        return rec
    }


    const handleClick = (songID) => {

    }

    return(
         
        <div className='results-page'>

            <div className='header-text'>
                <h1>Since you liked <a className='userSong'>{song}</a> by <a className='userArtist'>{artist}</a>,
                 you might like these as well...</h1>
            </div>

            <div className='results-box'>
                {accessToken && recommendations && recommendations.length > 0 ? (
                    <>  
                        <Link to='/music/player'>
                            <div className='box-0' onClick={() => handleClick('songID')}>
                                <img src={recommendations[0].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[0].name} - {recommendations[0].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-1' onClick={() => handleClick('songID')}>
                                <img src={recommendations[1].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[1].name} - {recommendations[1].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-2' onClick={() => handleClick('songID')}>
                                <img src={recommendations[2].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[2].name} - {recommendations[2].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-3' onClick={() => handleClick('songID')}>
                                <img src={recommendations[3].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[3].name} - {recommendations[3].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-4' onClick={() => handleClick('songID')}>
                                <img src={recommendations[4].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[4].name} - {recommendations[4].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-5' onClick={() => handleClick('songID')}>
                                <img src={recommendations[5].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[5].name} - {recommendations[5].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-6' onClick={() => handleClick('songID')}>
                                <img src={recommendations[6].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[6].name} - {recommendations[6].album.artists[0].name}</p>
                            </div>
                        </Link>
                        <Link to='/music/player'>
                            <div className='box-7' onClick={() => handleClick('songID')}>
                                <img src={recommendations[7].album.images[0].url} className='img-0'></img>
                                <p className='text-0'>{recommendations[7].name} - {recommendations[7].album.artists[0].name}</p>
                            </div>
                        </Link>
                    </>
                ) : (
                    <></>
                )}
            </div>

        </div>
    )
}

export default Result