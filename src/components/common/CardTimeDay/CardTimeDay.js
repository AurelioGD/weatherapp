import { Container, ContainerTemp, Icon, Day } from "./CardTimeDayStyles"
const CardTimeDay = ({img="hr", day, temp}) => {
    let color;
    if(temp<15) color="primary";
    
    if(temp>15 && temp<27) color="yellow";

    if(temp>27) color="red";

    return (
        <Container>
            <Day>{day}</Day>
            <Icon src={"https://www.metaweather.com/static/img/weather/"+img+".svg"}/>
            <ContainerTemp color={color}>
                {temp}°
            </ContainerTemp>
        </Container>
    )
}

export default CardTimeDay
