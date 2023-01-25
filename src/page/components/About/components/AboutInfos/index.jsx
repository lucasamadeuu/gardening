import { RegularText, TitleText } from "../../../../../components/Typograph";
import { InfoContainer } from "./style";

export function AboutInfos({ Time, Text }) {
    return (
        <InfoContainer>
        <TitleText fontSize="title-l" color="secondary" >{Time}</TitleText>
        <RegularText fontSize="text-m" color="base-white" > {Text} </RegularText>
        </InfoContainer>
    )
}