import { ImageContainer, JobsContainer, TitleContainer } from "./style";
import { TitleText } from "../../../components/Typograph";
import Foward from '../../../assets/foward.svg'
import Back from '../../../assets/back.svg'
import Oi from '../../../assets/about.png'

const scrollableArea = document.getElementById("photos");

function scrollLeft() {
    scrollableArea.scrollBy(-100, 0);
}

function scrollRight() {
    scrollableArea.scrollBy(100, 0);
}

export function Jobs() {
    return (
        <JobsContainer>
            <TitleContainer>
                <TitleText fontSize="title-l" color="main" weight="800">Nossos últimos serviços</TitleText>
                <div>
                    <a><img src={Back} alt="back" /></a>
                    <a><img src={Foward} alt="foward" /></a>
                </div>
            </TitleContainer>
            <ImageContainer id="photos">
                <img src={Oi} alt="" />
                <img src={Oi} alt="" />
                <img src={Oi} alt="" />
                <img src={Oi} alt="" />
                <img src={Oi} alt="" />
                <img src={Oi} alt="" />
                <img src={Oi} alt="" />
            </ImageContainer>
        </JobsContainer>
    )
}