import '../styles/Project.css'


export function Project({ repoLink, deployedLink, name, description, image, alt }) {
    return (
        <div className='project-container'>
            <div className='project-container-header'>
                <span>{name}</span>
                <span>
                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10v1h8v-1z" color="#000" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible" fill="gray" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-window-maximize" width="24" height="24" viewBox="0 0 24 24"><path d="M4,4H20V20H4V4M6,8V18H18V8H6Z" /></svg>
                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.795 3.912l-.883.883.147.146L7.117 8 4.06 11.059l-.147.146.883.883.146-.147L8 8.883l3.059 3.058.146.147.883-.883-.147-.146L8.883 8l3.058-3.059.147-.146-.883-.883-.146.147L8 7.117 4.941 4.06z" color="#000" overflow="visible" />
                    </svg>
                </span>
            </div>
            <img className='image' src={image} alt={alt} />
            <span className='project-info'>
                <a className='project-name' href={deployedLink} target='_blank'>{name}</a> <br></br>
                <a href={repoLink} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg></a>
            </span>
            <p>{description}</p>
        </div>
    );
};