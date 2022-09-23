import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNiche = () => {
    // This is the useState for title form
    const [title, setTitle] = useState('');

    // This is the useState for body form
    const [body, setBody] = useState('');

    // This is the useState for author form
    const [author, setAuthor] = useState('Gboyega');

    // For showing the user Adding blog is in progress so we use reuseable hook
    const [isLoading, setIsLoading] = useState(false);

    // to route back to homepage
    const history = useNavigate();

    // To submit the form fields to the database(Json) and to also make POST request to update in the database when new niche is created.
    const handleSubmit = (e) => {
        e.preventDefault();
        const nich = { title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/niche', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nich)
        }).then(() => {
            console.log('New Niche Added');
            setIsLoading(false);
            history('/');
        })
    }

    return (
        <div className="create">
            <h2> Add a new Niche</h2>
            <form onSubmit={handleSubmit}>
                <label>Niche title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Niche body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Niche author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Gboyega">Gboyega</option>
                    <option value="Moyo">Moyo</option>
                </select>
                { !isLoading && <button>Add Niche</button> }
                { isLoading && <button disabled>Adding Niche...</button> }
            </form>
        </div>
    );
}
 
export default NewNiche;