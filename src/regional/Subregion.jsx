import { useLocation } from "react-router-dom";

const Subregion = () => {
    const location = useLocation();
    const { region } = location.state || {}; // Access subdetails from state

    return (
        <div>
            <h2>Subregion Details</h2>
            <p>{region}</p> {/* Render subdetails as needed */}
        </div>
    );
};

export default Subregion;
