import { AboutContainer, ImageContainer, TextContainer, TextContainerSplit } from "./style";
import AboutImage from '../../../assets/about.png'
import { RegularText, TitleText } from "../../../components/Typograph";
import { AboutInfoContainer } from "./components/AboutInfos/style";
import { AboutInfos } from "./components/AboutInfos";

const AboutInfo = {
    Title: "SOBRE NÓS",
    Text: "Aqui vai vir um texto relativamente grande explicando um pouco sobre você e como funciona seu trabalho, aqui é onde faz o cliente se interessar pelo seu trabalho e continuar no site. to enrolando pra ter um tamanho ideia pra eu ter uma ideia de como tem q ficar no design.",
    SecondText: "Ideia que tenha mais um paragrafo pra ficar melhor na visualização ai ja vai ficar bem bacana. Enrolando mais um pouco pra ver como fica. tem q ficar desse tamanho aqui. mais um pouco só. agora ficou bom de verdade"
}

const AboutStatistic = [
    {
        Time: "10",
        Text: "anos de experiência"
    },
    {
        Time: "50",
        Text: "bota outra coisa aqui"
    },
    {
        Time: "32+",
        Text: "aqui outra coisa tbm"
    }
]

export function About() {
    return (
        <AboutContainer>
            <ImageContainer>
                <img src={AboutImage} alt="about-image" />
            </ImageContainer>
            <TextContainer>
                <TextContainerSplit>
                    <TitleText fontSize="title-l" color="secondary" weight="800">SOBRE NÓS</TitleText>
                    <RegularText color="base-background" weight="500">{AboutInfo.Text}</RegularText>
                    <RegularText color="base-background" weight="500">{AboutInfo.SecondText}</RegularText>
                </TextContainerSplit>
                <AboutInfoContainer>
                    {AboutStatistic.map((item, key) => (
                        <AboutInfos key={key} Time={item.Time} Text={item.Text} />
                    ))}
                </AboutInfoContainer>
            </TextContainer>
        </AboutContainer>
    )
}