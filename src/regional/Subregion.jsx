import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Subregion = () => {
    const location = useLocation();
    const { region, link } = location.state || {};
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
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
            setRecipes(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    return (
        <div
        style={{
            backgroundColor: '#FFDEE9',
            backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            color: 'white',
            paddingTop: '4rem', 
        }}
        >
        <div className="container text-center my-4">
            <h1 className="display-4">Regional Foods</h1>
            <p className="lead">Explore the taste of Indian foods</p>
            <div className="row">
                {region.map((sub, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <Link to="/subregion/regionalrecipes" className="recipe-link" style={{ textDecoration: 'none' }} state={{ subRegion: sub, recipes: recipes }}>
                            <div className="card recipe-card">
                                <img src={link[index]} className="card-img-top" alt="Region" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{sub}</h5>
                                    <p className="card-text">Discover {sub}'s cuisine</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Subregion;