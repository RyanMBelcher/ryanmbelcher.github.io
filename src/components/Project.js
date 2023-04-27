import React from 'react';
import '../styles/Project.css'


export function Project({ repoLink, deployedLink, name, description, image, alt }) {
    return (
        <div className='project-container'>
            <div className='project-container-header'>
                <span className='project-title'>{name}</span>
            </div>
            <img className='image' src={image} alt={alt} />
            <span className='project-info'>
                <a href={deployedLink} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.948.042c-.413-.028-.817-.042-1.214-.042-8.6 0-13.497 6.557-15.278 11.833l4.727 4.727c5.428-1.944 11.817-6.66 11.817-15.168 0-.44-.017-.89-.052-1.35zm-11.277 14.178l-2.883-2.883c1.221-2.859 4.691-8.945 12.199-9.32-.251 5.775-4.041 9.932-9.316 12.203zm5.471 1.538c-.547.373-1.09.71-1.628 1.011-.187.891-.662 1.842-1.351 2.652-.002-.576-.162-1.156-.443-1.738-.495.225-.966.418-1.414.588.66 1.709-.012 2.971-.915 4.154 1.296-.098 2.656-.732 3.728-1.805 1.155-1.155 1.967-2.823 2.023-4.862zm-11.82-6.469c-.579-.28-1.158-.438-1.732-.441.803-.681 1.744-1.153 2.626-1.345.314-.552.667-1.097 1.039-1.633-2.039.055-3.708.867-4.864 2.023-1.071 1.071-1.706 2.433-1.804 3.728 1.184-.904 2.446-1.576 4.155-.914.173-.471.366-.944.58-1.418zm7.738.663c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c.391.392.391 1.024 0 1.415s-1.024.39-1.414-.001zm4.949-4.951c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.049 0 2.829.781.781 2.048.781 2.829 0 .78-.78.78-2.047-.001-2.829zm-1.908 1.911c-.273-.273-.273-.718 0-.99.271-.273.717-.273.99 0 .272.272.271.717 0 .99-.274.272-.718.272-.99 0zm-15.132 12.666l-.906-.906 5.208-5.188.906.906-5.208 5.188zm4.979 1.857l-.906-.906 3.636-3.664.906.906-3.636 3.664zm-6.042 2.565l-.906-.906 6.448-6.438.906.906-6.448 6.438z" /></svg> Deployed Link</a> <br></br>
                <a href={repoLink} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg> GitHub</a>
            </span>
            <p>{description}</p>
        </div>
    );
};