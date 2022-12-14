import styled from 'styled-components'

export const Navbar = styled.header`
    background: var(--red-poke);
    display: flex;
    justify-content: space-around;

    div{
        width: 80% ;
        height: 5rem;
        display: flex;
        justify-content: space-between;
     

            img{
            margin-left: 2rem ;
            padding: 0.5rem;
            margin-right: 1rem;
        }

            #profile{
            border-radius: 50%;
        }
    }
   

    

`