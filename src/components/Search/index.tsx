import { useState } from "react";
import { SearchContainer, SearchItem } from "./styled"


export const Search = () => {

    const [searchName, setSearchName] = useState();
    const [searchElement, setSearchElement ] = useState();

    const onChangeNameHandler = (event : any) => {
        setSearchName(event.target.value);
        console.log(searchName)
        }

    const onChangeElementHandler = (event : any) => {
        setSearchElement(event.target.value);
        console.log(searchElement)
        }

    return(

        <SearchContainer>
            <SearchItem>
                <label htmlFor="">Name </label>
                <input type="text" onChange={onChangeNameHandler}/>
            </SearchItem>
            <SearchItem>
                <label htmlFor="">Element</label>
                <input type="text" onChange={onChangeElementHandler}/>
            </SearchItem>
        </SearchContainer>
       
    )
}