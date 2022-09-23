import NicheList from "./NicheList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: niche, isLoading, error } = useFetch('http://localhost:8000/niche')
    
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {niche && <NicheList niche={niche} title="All Niches!!" />}
            { isLoading && <div>Loading...</div> }
        </div>
    );
}
 
export default Home;