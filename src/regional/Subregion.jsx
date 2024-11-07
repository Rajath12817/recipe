import { useLocation} from "react-router-dom";
import { useEffect,useState } from "react";
import { kimage } from "../constants/constant";
import { Link } from "react-router-dom";

const Subregion = () => {
    const location = useLocation();
    const { region } = location.state || {}; // Access subdetails from state
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes()
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/recipe/getrecipe', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setRecipes(data);  // Save data to state for use in RegionalList
            console.log(data);
        } catch (error) {
            console.error("Error fetching regions:", error);
        }
    };


    return (
        <div className="container">
            <h1>Regional Foods</h1>
            <p>Explore the taste of Indian foods</p>
            {region.map((sub, index) => (
                <Link to="/subregion/regionalrecipes" key={index} style={{ textDecoration: 'none' }} state={{ subRegion: sub, recipes:recipes}}>
                    <div className="card bg-dark text-white mb-5" style={{ height: "15rem", width: "60rem", borderRadius: "20px", paddingBottom: "40px", marginBottom: "50px" }}>
                        <img src={kimage} className="card-img" alt="Region" style={{ height: "15rem", width: "60rem", borderRadius: "20px" }} />
                        <div className="card-img-overlay" style={{ borderRadius: "20px" }}>
                            <h2 className="card-title" style={{ padding: "70px 0px 0px 0px", fontFamily: "sans-serif", color: "rgb(177, 182, 189)", fontWeight: "bolder" }}>
                                {sub}
                            </h2>
                            <p className="card-text">Explore the taste of {sub}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Subregion;
