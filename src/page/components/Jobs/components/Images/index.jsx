import { ImageContainer } from "./style";

export function Images({ image }) {
    return (
        <ImageContainer>
            <img src={image} alt="foto do trabalho" />
        </ImageContainer>
    )
}