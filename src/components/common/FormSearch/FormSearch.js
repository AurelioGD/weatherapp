
import { Form, IconContainer, StyledInput, SubmitContainer } from './FormSearchStyles'
import cloudy from '../../assets/svgs/cloudy-day.svg'
import search from '../../assets/svgs/search.svg'
import { useState } from 'react'
import getCityWeather from './utils/getCityWeather'
const API_GET_ID_CITY = "https://www.metaweather.com/api/location/search/?query="


const setNewLocation = (searching) => {
    const item = JSON.parse(localStorage.getItem("history"))
    console.log(item)
    item.push(searching)
    localStorage.setItem("history",JSON.stringify(item))
}


const FormSearch = ({setData}) => {
    const [searching, setSearching] = useState()
    const handlerSubmit = () => {
        setNewLocation(searching)
        fetch(API_GET_ID_CITY+searching)
            .then(rawData => rawData.json())
            .then(async data => {
            if(data[0].woeid) {
                const newWeather = await getCityWeather(data[0].woeid)

                setData(newWeather)
            }
            })
    }
    return (
        <Form>
            <IconContainer>
                <img src={cloudy} alt="icon cloud"/>
            </IconContainer>
            <StyledInput placeholder="search a city..."  onChange={(e) => setSearching(e.target.value)}/>
            <SubmitContainer type="submit" onClick={handlerSubmit}>
                <img src={search} alt="icon search"/>
            </SubmitContainer>       
        </Form>
    )
}

export default FormSearch
