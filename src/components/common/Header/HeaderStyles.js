import styled from "styled-components";
import theme from "../../theme/colors"

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lobster",cursive;
    font-size: 28px;
    color: #fff;
    width: 100%;
    height: 80px;
    background-color: ${theme["primary"]};
`


export {Container}