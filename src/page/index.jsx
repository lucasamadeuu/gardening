import { Intro } from './components/Intro'
import { LandingPageContainer, MainContainer } from './style'
import  Gardener  from '../assets/gardener.svg'
import  Plant  from '../assets/plant.svg'
import { Services } from './components/Services'
import { ServicesContainer } from './components/Services/style'

const ServicesInfo = [
    {
        Title: "Algum Titulo",
        Description : "Aqui vai um pequeno texto sobre algo.",
        Image : Plant,
        Color: "main"
    },
    {
        Title: "Algum Titulo",
        Description : "Aqui vai um pequeno texto sobre algo.",
        Image : Gardener,
        Color: "secondary"
    },
    {
        Title: "Algum Titulo",
        Description : "Aqui vai um pequeno texto sobre algo.",
        Image : Gardener,
        Color: "main"
    }
]

export function LandingPage() { 
    return (
        <LandingPageContainer>
            <Intro />
            <MainContainer>
            <ServicesContainer>
            {ServicesInfo.map((info, index ) => (
                <Services 
                    key={index} 
                    Title={info.Title} 
                    Description={info.Description} 
                    Image={info.Image} 
                    Color={info.Color}
                />
            ))}
            </ServicesContainer>
            </MainContainer>
        </LandingPageContainer>
    )
}