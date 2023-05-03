import '../../styles/AboutMe.css';
import myAvatar from '../../images/synthwave.png'

export default function AboutMe() {
    return (
        <section className='about-me'>
            <div id='about'>
                <h1 id='about-header'>Ryan M Belcher</h1>
                <div id="about-content-wrapper">
                    <img id="about-content-wrapper-child" src={myAvatar} alt='avatar of me'></img>
                    <p id="about-content-wrapper-child">
                        I am a full stack web developer with a bias towards front end development. I recently earned a full stack web development certificate
                        from the University of Pennsylvania, where I developed skills in HTML, CSS, JS, OOP, MVC, ORM, SQL, MongoDB, React.JS, and
                        responsive web design.
                        <br />
                        <br />
                        I have a background in the banking and mortgage industries which helped to develop my problem solving skills which I am excited to
                        now bring to the software development world.
                        <br />
                        <br />
                        In my spare time, I enjoy running, traveling, cooking, and chilling with my wife.
                        If you want to connect, my links are below or you can reach out to me <a className='about-link' href='mailto:ryanmbelcher86@gmail.com'>here</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}