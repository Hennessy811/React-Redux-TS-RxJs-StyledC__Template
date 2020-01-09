import styled from "styled-components";
import { color, space, typography } from "styled-system";

export const Button =
    styled.button <
    any >
    `
    cursor: pointer;
    outline: none;
    padding: 10px 15px;
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    background: transparent;
    font-size: 16px;
    ${typography}
    ${space}
    ${color}
`;

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    ${typography}
    ${space}
    ${color}
`;
