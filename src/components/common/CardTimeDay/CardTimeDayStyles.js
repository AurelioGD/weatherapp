import styled from "styled-components";
import theme from '../../theme/colors'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 188px;
    height: 186px;
    border-radius: 25px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
`
const ContainerTemp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size:20px;
    font-family: "Roboto",sans-serif;
    background-color: ${props => theme[props.color]};
    border-radius: 0 0 25px 25px;
    height: 40px;
    width: 100%;
`

const Icon = styled.img`
    width: 50px;
`

const Day = styled.h3`
    font-family: "Roboto", sans-serif;
    font-weight: 800;
`

export { Container, ContainerTemp, Icon, Day }