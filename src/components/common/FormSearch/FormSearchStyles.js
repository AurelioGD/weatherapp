import styled from "styled-components"

const defaultStyles = styled.div`
    height: 51px;
    `

export const Form = styled(defaultStyles)`
    margin-left: 80px;
    display: flex;
    justify-content: space-between;
    width: 500px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
`

export const IconContainer = styled(defaultStyles)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1565C0;
    width: 50px;
`
export const SubmitContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1565C0;
    border: none;
    width: 70px;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`
export const StyledInput = styled.input`
    padding: 0 0 0 10px;
    font-size: 18px;
    width: 80%;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    &:focus{
        outline: none;
    }
`