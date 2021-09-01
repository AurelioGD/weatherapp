import CardTime from "./components/common/CardTime/CardTime";
import CardTimeDay from "./components/common/CardTimeDay/CardTimeDay";
import FormSearch from "./components/common/FormSearch/FormSearch";
import Header from "./components/common/Header/Header";
import RecordInput from "./components/common/RecordInput/RecordInput";
import { ContainerInputs, ContainerCardsDay } from "./AppStyles" 
import dataDefault from './dataDefault'
import { useState } from "react"

if(!localStorage.getItem("history")) localStorage.setItem("history",JSON.stringify([]))
function App() {
  const [data,setData] = useState(dataDefault)
  const now= new Date("2021-09-01")
  console.log(now.getDate())
  return (
    <div className="App">
        <Header>Weather App</Header>
        <ContainerInputs>
          <RecordInput setData={setData}></RecordInput> 
          <FormSearch setData={setData}></FormSearch>   
        </ContainerInputs>
        <CardTime data={data.consolidated_weather[0]} city={data.title}></CardTime>
        <ContainerCardsDay>
          {
            data.consolidated_weather.map((day, index) => {if(index>0){ return <CardTimeDay temp={Math.floor(day.the_temp)} day={day.applicable_date} img={day.weather_state_abbr}></CardTimeDay>}})
          }
        </ContainerCardsDay>
        
        
    </div>
  );
}

export default App;
