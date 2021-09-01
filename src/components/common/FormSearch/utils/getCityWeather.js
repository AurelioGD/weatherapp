const API_GET_WEATHER = "https://www.metaweather.com/api/location/"
const getCityWeather = async(idCity) => {
     const rawData = await fetch(API_GET_WEATHER+idCity)
     const data = await rawData.json()
    return data
    }
export default getCityWeather