
import '../styles/Hamburger.css'

export default function Hamburger({ isOpen }){

    return(
        <>
            <div className='hamburger'>
                {/* <style jsx>{`
                    .hamburger {
                        display: none
                    }
                    @media (max-width: 767px) {
                        .hamburger {
                            display: fixed;
                            padding-top: 10px;
                            margin-left: 10px;
                            z-index: 10;
                        }
                    }
                `}

                </style> */}
                <div className='burger burger1'></div>
                <div className='burger burger2'></div>
                <div className='burger burger3'></div>
                <style jsx>{`
                    .burger1 {
                        transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    }
                    .burger2 {
                        transform: ${ isOpen ? 'translateX(100%)' : 'translate(0)'};
                    }
                    .burger3 {
                        transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    }
                `}</style>
            </div>
        </>
    )
}