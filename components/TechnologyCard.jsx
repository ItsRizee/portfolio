import Image from "next/image";

const TechnologyCard = ({image, alt, width, height, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-20">
            <Image src={image} alt={alt} layout="responsive" width={width} height={height}/>
        </a>
    );
}

export default TechnologyCard;