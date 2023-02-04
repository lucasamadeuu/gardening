import { RegularText } from "../../../../../components/Typograph";
import { ContactInfoContainer } from "./style";

export function ContactInfo({ image, text }) {
    return(
        <ContactInfoContainer>
            <img src={image} alt="contact" />
            <RegularText color="base-white">{text}</RegularText>
        </ContactInfoContainer>
    )
    
}