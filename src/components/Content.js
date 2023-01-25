import '../styles/Content.css'

export default function Content({ children }) {
    return (
        <div className='content-wrapper'>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}