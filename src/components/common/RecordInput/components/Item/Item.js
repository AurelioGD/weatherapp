import { Container, TextCity, SearchButton } from "./ItemStyles"
import getCityWeather from '../../../FormSearch/utils/getCityWeather'
const API_GET_ID_CITY = "https://www.metaweather.com/api/location/search/?query="

const Item = ({city,setData}) => {
    const handlerSearch = () =>{
        fetch(API_GET_ID_CITY+city)
            .then(rawData => rawData.json())
            .then(async data => {
            if(data[0].woeid) {
                const newWeather = await getCityWeather(data[0].woeid)

                setData(newWeather)
            }
            })
    }
    return (
        <Container>
            <TextCity>
                {city}
            </TextCity>
            <SearchButton onClick={handlerSearch}>
                Search
            </SearchButton>
        </Container>
    )
}

export default Item
