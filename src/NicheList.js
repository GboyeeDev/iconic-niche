import { Link } from "react-router-dom";


const NicheList = ({ niche, title }) => {

    return (
        <div className="niche-list">
            <h2>{ title }</h2>
            {niche.map((mainniche) => (
                <div className="niche-preview" key={mainniche.id}>
                    <Link to={`/niche/${mainniche.id}`}>
                        <h2>{ mainniche.title }</h2>
                        <p> Written By { mainniche.author }</p>
                    </Link>
                </div>
             
            ))}
            
        </div>
    );
}
 
export default NicheList;