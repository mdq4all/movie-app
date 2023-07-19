import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";

const Search = () => {

    const navigate = useNavigate();

    const query = useQuery();
    const search = query.get("search") || ""
   
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <form className="flex justify-center pb-10" onSubmit={handleSubmit}>
        <div className="relative">
            <input 
                type="text" 
                name="serach" 
                placeholder="Search movies"
                value={search}
                onChange={(e) => {
                   const value = e.target.value
                   navigate(`/?search=${value}`);

                }}
                className="rounded-lg h-8 p-4 pr-10 focus:outline-none focus:ring focus:border-blue-600" />
        </div>
    </form>
  )
}

export default Search
