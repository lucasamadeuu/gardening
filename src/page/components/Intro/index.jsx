import { Header } from "../Header";
import { Text } from "./components/Text";
import { IntroContainer } from "./style";

export function Intro() {
    return (
        <IntroContainer>
            <Header />
            <Text />
        </IntroContainer>
    )
}