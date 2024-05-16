import './Home.css'
import background from './background.png';
import logo from './Logo-medium.png'
import google from './google_play.png'
import apple from './app_store.svg'
import { useState } from 'react';

function Home() {
    const [ourMission, setOurMission] = useState(false)

    function handleClick() {
        setOurMission(!ourMission)
    }

    const appStoreUrl = ""
    const playStoreUrl = ""

    if (ourMission) {
        return (<div className="background-container" style={{ backgroundImage: `url(${background})` }}>
            <div className='panel-container-mission'>
                <div className='panel-wrapper-mission'>
                    <img className='panel-logo' src={logo} alt="Logo" width="70" />

                    <span className="panel-title">Our mission</span>

                    <div>
                        <p className="panel-body">
                            <span style={{ fontWeight: 'bold' }}>Luxurious Club Experience:</span> Socialice offers exclusive access to top-tier clubs, redefining the club scene with glamorous parties and sophisticated gatherings that exude excitement and elegance.
                        </p>
                        <p className="panel-body">
                            <span style={{ fontWeight: 'bold' }}>Authentic Connections:</span> Socialice fosters genuine connections beyond the glitz, providing a welcoming environment where members can meet like-minded individuals and forge lasting relationships.
                        </p>
                        <p className="panel-body">
                            <span style={{ fontWeight: 'bold' }}>Convenience and Support:</span> Feel confident attending events alone with Socialice's convenient support through our exclusive WhatsApp group chat. Connect, chat, and arrange meetups beforehand for a supported and comfortable club experience.
                        </p>
                    </div>

                    <span
                        onClick={handleClick}
                        className="panel-mission">DOWNLOAD</span>
                </div>
            </div>
        </div >)
    }

    return (<div className="background-container" style={{ backgroundImage: `url(${background})` }}>
        <div className='panel-container'>
            <div className='panel-wrapper'>
                <img src={logo} alt="Logo" width="70" />

                <div className='panel-header'>
                    <span className="panel-title">End your sadness.</span>
                    <span className="panel-subtitle">Meet people with the same vibes.</span>
                </div>

                <div className='panel-stores'>
                    <a href={appStoreUrl}><img src={apple} height='50' /></a>
                    <a href={playStoreUrl}><img src={google} height='75' /></a>
                </div>

                <span
                    onClick={handleClick}
                    className="panel-mission">OUR MISSION</span>
            </div>
        </div>
    </div>)
}

export default Home