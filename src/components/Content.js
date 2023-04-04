import '../styles/Content.css'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function Content() {
    return (
        <div className='content-wrapper'>
            <div className='content'>
                <AboutMe />
                <Portfolio />
                <Contact />
                <Resume />
            </div>
        </div>
    )
}