import {useRef} from "react"
import { PetGeneratorContainer } from "./styles";

interface PetGeneratorProps {
    url: string,
    title: string
}

export function PetGenerator(props: PetGeneratorProps) {
    const { url, title } = props;
    const imageRef = useRef<HTMLImageElement>(null)

    function handleClick() {
        let timestamp = new Date().getTime(); 
        if(imageRef.current !== null){
            imageRef.current.src = `${url}?t=${timestamp}`
        }       
    }

    return (
        <PetGeneratorContainer>
            <img src={url} ref={imageRef} alt="imagem de pet" />
            <button onClick={handleClick}>{title}</button>
        </PetGeneratorContainer>
    )
}