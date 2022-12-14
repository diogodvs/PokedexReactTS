import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Search } from "../Search"
import { Body, ContainerList,  } from "./styled"


export const Corpo = () => {

  
    
    return(
        <Body>
           <Search/>
            <ContainerList>
                
                    <li>Picture</li>
                    <li>Id</li>
                    <li>Name</li>
                    <li>Element</li>
                
            </ContainerList>
        </Body>
    )
}