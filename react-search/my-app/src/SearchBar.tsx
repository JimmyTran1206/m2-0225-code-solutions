import '../public/search-solid.svg'
import './SearchBar.css'

type Props={
  searchTerm: string;
  handleSearch:(arg0:string)=>void
}
export function SearchBar({searchTerm,handleSearch}:Props){
  return (
    <>
    <div className='search-container'>
      <img src="search-solid.svg" alt="" className='search-icon'/>
      <input type="text" placeholder='Search items' value={searchTerm} onChange={(e)=>handleSearch(e.target.value)} />
    </div>
    </>
  )
}
