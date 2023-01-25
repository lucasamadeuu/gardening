import { RegularText, TitleText } from "../../../components/Typograph";
import { ImageContainer, ServiceContainer, ServicesContainer, TextContainer } from "./style";

export function Services({ Title, Description, Image, Color }) {
    return (
        <ServiceContainer>
            <ImageContainer color={Color}>
                <img src={Image} alt="foto" />
            </ImageContainer>
            <TextContainer>
                <TitleText fontSize="text-l" color={Color}>{Title}</TitleText>
                <RegularText color="text" weight='600'>{Description}</RegularText>
            </TextContainer>
        </ServiceContainer>
    )
}