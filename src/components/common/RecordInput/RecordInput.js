import arrow from "../../assets/svgs/right-arrow.svg"
import { Container, Title, DropDownList, Icon, ContainerDropList } from "./RecordInputStyles";
import { useState } from "react"
import Item from "./components/Item/Item";



const RecordInput = ({setData}) => {
    const [showDropList,setShowDropList] = useState(false)
    const data = JSON.parse(localStorage.getItem("history"))
    const handlerButton = () => {
        setShowDropList(!showDropList)
    }
    return (
        <Container>
            <Title>Record</Title>
            <DropDownList onClick={handlerButton} ><Icon src={arrow}/></DropDownList>
            {
                showDropList && <ContainerDropList>
                    {
                        data.map(city => <Item city={city} setData={setData}/>)
                    }
                    </ContainerDropList>
            }    
        </Container>
    );
}

export default RecordInput;
