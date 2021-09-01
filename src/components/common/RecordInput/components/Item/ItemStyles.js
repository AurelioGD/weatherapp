import styled  from "styled-components";
import theme from "../../../../theme/colors"
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
`
const TextCity = styled.h3`
    font-family: "Roboto",sans-serif;
`
const SearchButton = styled.button`
    width: 60px;
    height: 25px;
    color: #fff;
    background-color: ${theme["primary"]};
    border: none;
    font-family:"Roboto",sans-serif;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`
export { Container, TextCity, SearchButton }