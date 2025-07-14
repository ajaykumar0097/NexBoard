import './component.css'
import { IoSearch } from "react-icons/io5";
const Searchbox=()=>{
    return(
        <div className="search__box postion-relative d-flex align-items-center ps-2">
        <IoSearch className='search__icon'/>
        <input type="text" placeholder='Search here...' className='search__input p-3'/>
        
        </div>
    )
}
export default Searchbox