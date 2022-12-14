import styled from "styled-components";

export const SearchContainer = styled.div`
       display: flex;
       margin: auto;
       border-radius: 0.5rem 2rem ;
       border: 3px solid var(--champagne);
       width: 70%;
       height: 8rem;
       
        
`
export const SearchItem = styled.div`

        padding: 1rem 2rem;
        margin: auto;

        label{
            color: var(--champagne);
            font-size: 1.8rem;
            padding: 0.5rem;
            
            
        }

        input{
            height: 1.8rem;
            border-radius: 0.5rem;
            width: 100%;
            font-size: 1.5rem;
            font-family: 'Teko', sans-serif;
            padding-left: 0.5rem;
            border-radius: 0 0.5rem ;
            border: 3px solid var(--champagne);
        }
    
`