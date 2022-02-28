import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.bgcolor || "transparent"};
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 3px 1px #dfdfdf;
    padding: 0.25rem 2rem;
    margin: 4rem;
    color: ${props => props.color || "#6e6e6e"};
`;

export {Button}