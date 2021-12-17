import "./SearchBar.css";
import {FcSearch} from 'react-icons/fc';
import {MdClear} from 'react-icons/md'
import {useState} from 'react'


function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("")
    const handleFilter = (evt) =>{
        const searchText = evt.target.value;
        setWordEntered(searchText)
        const newFilteredData = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchText.toLowerCase())
        });
        if(searchText === ""){
            setFilteredData([])
        }else{
           setFilteredData(newFilteredData) 
        }
        
    }
    const clearInput = ( ) =>{
        setFilteredData([]);
        setWordEntered('')
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className="searchIcon">
                    {wordEntered.length === 0 ?<FcSearch/> : <MdClear id="clearBtn" onClick={clearInput}/>}
                    </div>
            </div>
            {filteredData.length !==0 && (
              <div className="dataResult">
                {filteredData.map((value,key)=>{
                    return <a target="_blank" href="#" className="dataItem">{value.title}</a>
                })}
            </div>   
            )}
           
        </div>
    )
}

export default SearchBar
