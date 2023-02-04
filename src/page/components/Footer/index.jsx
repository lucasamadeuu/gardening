import { ContentContainer, CreditsContainer, FooterContainer, ImageContainer, TextsContainer } from "./style";
import { RegularText, TitleText } from "../../../components/Typograph";
import Email from "../../../assets/email.svg"
import WhatsApp from "../../../assets/whatsapp.svg"
import FooterImage from "../../../assets/footer.png"
import { ContactContainer } from "./components/ContactInfo/style";
import { ContactInfo } from "./components/ContactInfo";

const ContactInfos = [
    {
        Image: Email,
        Text: "exemplo.de.email@gmail.com",
    },
    {
        Image: WhatsApp,
        Text: "+55 (11) 91292-1253",
    }
]

export function Footer() {
    return (
        <FooterContainer>
            <ContentContainer>
                <TextsContainer>
                    <div>
                        <TitleText fontSize="title-l" color="secondary"> Se interessou? </TitleText>
                        <RegularText color="base-white" weight="500"> entre em contato conosco </RegularText>
                    </div>
                    <ContactContainer>
                        {ContactInfos.map((info, index) => (
                            <ContactInfo
                                image={info.Image}
                                text={info.Text}
                            />
                        ))}
                    </ContactContainer>
                </TextsContainer>
                <ImageContainer>
                    <img src={FooterImage} alt="" />
                </ImageContainer>
            </ContentContainer>
            <CreditsContainer>
                <a href="https://github.com/lucasamadeuu" target="_blank">
                    <RegularText weight="600" color="secondary"><span className="footer">by</span> Lucas Amadeu</RegularText>
                </a>
            </CreditsContainer>
        </FooterContainer>
    )
}