import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NicheDetails = () => {
    // to connect the niche in the blog list to their IDs
    const { id } = useParams();
    // to load the niche details
    const { data: niche, error, isLoading } = useFetch('http://localhost:8000/niche/' + id);
    // to return back to homepage
    const history = useNavigate();

    // to delete blogs
    const handleDelete = () => {
        fetch('http://localhost:8000/niche/' + niche.id, {
            method: 'DELETE'
        }).then(() => {
            history('/');
        })
    }


    return (
        <div className="niche-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {niche && (
                <article>
                    <h2>{ niche.title }</h2>
                    <p>Written By { niche.author }</p>
                    <div>{ niche.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default NicheDetails;