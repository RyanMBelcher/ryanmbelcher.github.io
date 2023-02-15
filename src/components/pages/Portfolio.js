import { Project } from '../Project';
import imageOne from '../../images/blog_homepage.png'
import imageTwo from '../../images/weather-dashboard.png'
import imageThree from '../../images/password-gen-screenshot.png'
import imageFour from '../../images/note-taker-home.png'
import imageFive from '../../images/bens-friends.png'
import imageSix from '../../images/QC_screenshot_1.png'
import '../../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div className=''>
            <h2>Portfolio</h2>
            <div className='projects-container'>
                <Project deployedLink={'https://sheltered-brushlands-54086.herokuapp.com'} repoLink={'https://github.com/RyanMBelcher/tech-blog'} name={'Tech Blog'} image={imageOne} alt={''} description={''} />
                <Project deployedLink={'https://ryanmbelcher.github.io/weather-dashboard'} repoLink={'https://github.com/RyanMBelcher/weather-dashboard'} name={'Weather Dashboard'} image={imageTwo} alt={''} description={''} />
                <Project deployedLink={'https://ryanmbelcher.github.io/random-password-generator'} repoLink={'https://github.com/RyanMBelcher/random-password-generator'} name={'Random Password Generator'} image={imageThree} alt={''} description={''} />
                <Project deployedLink={'https://secret-everglades-28595.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/note-taker'} name={'Note Taker App'} image={imageFour} alt={''} description={''} />
                <Project deployedLink={'https://safe-savannah-72452.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/bens-friends'} name={`Ben's Friends`} image={imageFive} alt={''} description={''} />
                <Project deployedLink={'https://ryanmbelcher.github.io/quiz-app/'} repoLink={'https://github.com/RyanMBelcher/quiz-app'} name={`Quiz App`} image={imageSix} alt={''} description={''} />
            </div>
        </div>
    );
};