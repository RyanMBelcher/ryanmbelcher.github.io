import { Project } from '../Project';

export default function Portfolio() {
    return (
        <div>
            <h2>Portfolio</h2>
            <Project deployedLink={'https://sheltered-brushlands-54086.herokuapp.com'} repoLink={'https://github.com/RyanMBelcher/tech-blog'} name={'Tech Blog'} image={''} alt={''} description={''} />
            <Project deployedLink={'https://ryanmbelcher.github.io/weather-dashboard'} repoLink={'https://github.com/RyanMBelcher/weather-dashboard'} name={'Weather Dashboard'} image={''} alt={''} description={''} />
            <Project deployedLink={'https://ryanmbelcher.github.io/random-password-generator'} repoLink={'https://github.com/RyanMBelcher/random-password-generator'} name={'Random Password Generator'} image={''} alt={''} description={''} />
            <Project deployedLink={'https://secret-everglades-28595.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/note-taker'} name={'Note Taker App'} image={''} alt={''} description={''} />
            <Project deployedLink={'https://safe-savannah-72452.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/bens-friends'} name={`Ben's Friends`} image={''} alt={''} description={''} />
        </div>
    );
};