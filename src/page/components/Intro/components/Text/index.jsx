import { RegularText, TitleText } from "../../../../../components/Typograph";
import { Button } from "../Button";
import { TextsContainer } from "./style";

const Texts = {
    Title : "ALGUMA FRASE RELAÇÃO AOS TRABALHOS",
    Subtitle: "alguma frase de efeito falando algo que intrige o usuário a realmente navegar pelo site (ideal que tenha esse tamanho)"
}

export function Text() {
    return (
        <TextsContainer>
            <div>
            <TitleText fontSize="title-lx" weight="400">{Texts.Title}</TitleText>
            <RegularText fontSize="text-m">{Texts.Subtitle}</RegularText>
            </div>
            <Button />
        </TextsContainer>
    )
}