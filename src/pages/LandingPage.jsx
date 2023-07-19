import { useDebounce } from "@uidotdev/usehooks";
import MoviesGrid from "../components/MoviesGrid"
import useQuery from "../hooks/useQuery";

const LandingPage = () => {

  const query = useQuery();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      {/* {el key=search destruye el componente y evita reiniciar los estados} */}
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  )
}

export default LandingPage
