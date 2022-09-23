import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Can not be found</p>
            <Link to="/">Go to Homepage...</Link>
        </div>
    );
}
 
export default Notfound;