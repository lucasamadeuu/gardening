import { JobsContainer, TitleContainer } from "./style";
import { TitleText } from "../../../components/Typograph";
import Foward from '../../../assets/foward.svg'
import Back from '../../../assets/back.svg'
import Oi from '../../../assets/about.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"
import { Images } from "./components/Images";

var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
            },
        },
    ],
};

const images = [
    {
        image: Oi
    },
    {
        image: Oi
    },
    {
        image: Oi
    },
    {
        image: Oi
    },
    {
        image: Oi
    }
]

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
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Images
                        image={image.image}
                        key={index}
                    />
                ))}
            </Slider>
        </JobsContainer>
    )
}