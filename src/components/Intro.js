import myAvatar from '../images/synthwave.png'

export default function Intro() {
    return (
        <container id='header-container'>
            <h1>Ryan M Belcher</h1>
            <img src={myAvatar} alt='avatar of me' id='my-avatar'></img>
            <p id='my-intro'> Greetings and welcome to my portfolio! My name is Ryan Belcher and I am a full stack web developer.
            Please take a look around and hit me up if you have any questions.</p>
        </container>
    )
}