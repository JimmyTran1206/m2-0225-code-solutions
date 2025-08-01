import { useState } from "react";
import { Items } from "./Items";
import { SearchBar } from "./SearchBar";

type Props = {
  inputData: string[]
}

let data:string[]=[];

export function SearchableList({inputData}:Props){
  const [searchTerm, setSearchTerm]=useState<string>('');
  if(!searchTerm){
    data=inputData;
  }else{
    const searchItems=inputData.filter((element)=>element.includes(searchTerm));
    data = searchItems.length===0? ['No items match the filter']:searchItems;
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleSearch={setSearchTerm} />
      <Items items={data} />
    </>
  )
}
