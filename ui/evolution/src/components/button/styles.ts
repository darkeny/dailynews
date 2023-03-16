import styled from "styled-components";

export const Button = styled.button`
    color: white;
    border: none;
    padding: 10px;
    border-radius: 0.5rem;
    float: right !important;
    background-color: #0d6efd;
    cursor: pointer;

    &:hover{
        background-color: #0a58cb;
    }

    &:disabled{
        background-color: rgba(0, 123, 255, 0.65);
        border-color: rgba(0, 123, 255, 0.65);
        color: #fff;
        pointer-events: none;
    }
`