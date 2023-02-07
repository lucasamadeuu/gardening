import { RegularText } from "../../../../../components/Typograph";
import { ContactInfoContainer, ContactLink } from "./style";

export function ContactInfo({ image, link, text }) {
    return (
        <ContactInfoContainer>
            <ContactLink href={link}>
                <img src={image} alt="contact" />
                <RegularText color="base-white">{text}</RegularText>
            </ContactLink>
        </ContactInfoContainer>
    )

}