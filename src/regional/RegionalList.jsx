import { kimage } from "../constants/constant";
import { Link } from "react-router-dom";
// import Subregion from "./Subregion";

const RegionalList = ({ details }) => {
    return (
        <div className="container">
            {details.map((region, index) => (
                <Link to="/subregion" key={index} style={{ textDecoration: 'none' }} state={{ region: region.region }} >
                    <div className="card bg-dark text-white mb-5" style={{ height: "15rem", width: "60rem", borderRadius: "20px", paddingBottom: "40px", marginBottom: "50px" }}>
                        <img src={kimage} className="card-img" alt="Region" style={{ height: "15rem", width: "60rem", borderRadius: "20px" }} />
                        <div className="card-img-overlay" style={{ borderRadius: "20px" }}>
                            <h2 className="card-title" style={{ padding: "70px 0px 0px 0px", fontFamily: "sans-serif", color: "rgb(177, 182, 189)", fontWeight: "bolder" }}>
                                {region.name}
                            </h2>
                            <p className="card-text">Explore the taste of {region.name}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RegionalList;
