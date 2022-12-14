import styled from "styled-components";

export const Body = styled.div`

    background: var(--verde-700);
    height: 100vh;
    font-family: 'Teko', sans-serif;
    padding: 3rem;
 
`;


export const ContainerList = styled.div`

    display: flex;
    width: 70%;
    list-style: none;
    justify-content: space-around;
    margin: 2.5rem auto;
    border: 1px solid var(--verde-100);
    height: 2rem;
    align-items: center;
    font-size: 1.3rem;
    color: var(--verde-100);
    border-radius: 0.8rem 0.2rem ;



    li{
        width: 25%;
        padding-left: 1rem;
        
    }

`

    