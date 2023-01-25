export function Project({ repoLink, deployedLink, name, description, image, alt }) {
    return (
        <div>
            <img src={image} alt={alt} />
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={repoLink}>Github</a>
            <a href={deployedLink}>App</a>
        </div>
    );
};