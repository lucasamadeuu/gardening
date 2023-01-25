import styled from "styled-components";

export const ButtonContainer = styled.button`
    all: unset;
    background-color: rgba(92, 92, 92, 0.5);
    border-radius: 15px;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors["base-white"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: ${({ theme }) => theme.textSizes["text-m"]};
    font-weight: 600;
    width: 190px;
    height: 50px;
    transition: .4s;
    cursor: pointer;

    &:hover{
        background-color: rgba(92, 92, 92, 0.7);
    }
`;
