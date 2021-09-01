import styled from "styled-components";
import theme from "../../theme/colors"
const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 50px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
    z-index: 100;
`
const Title = styled.h2`
    font-family: "Roboto",sans-serif;
    margin-left: 10px;
`
const DropDownList = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 100%;
    background-color: ${theme["primary"]};
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`
const Icon = styled.img`
    width: 25px;
`
const ContainerDropList = styled.div`
    background-color: #fff;
    position: absolute;
    width: 230px;
    height: 400px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
    top: 55px;
    left: 50px;
    z-index: 150;
`
export { Container, Title, DropDownList, Icon, ContainerDropList }