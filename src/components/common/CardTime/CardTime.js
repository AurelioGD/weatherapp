import { Container, Title, InfoDay, Text, Img, ContainerTemp } from "./CardTimeStyles";

const CardTime = ({srcImg="hc.svg",data,city}) => {
    let color;
    let temp = Math.floor(data.the_temp)
    if(temp<15) color="primary";
    
    if(temp>15 && temp<27) color="yellow";

    if(temp>27) color="red";
    return (
        <Container>
            <Title>{city}</Title>
            <InfoDay>
                <Text>Today</Text>
                <Img src={"https://www.metaweather.com/static/img/weather/"+data.weather_state_abbr+".svg"}/>
                <ContainerTemp color={color}>
                    <Text>{Math.floor(data.the_temp)}°</Text>
                </ContainerTemp>
            </InfoDay>
        </Container>
    )
}

export default CardTime;
