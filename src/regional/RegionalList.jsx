// import { kimage } from "../constants/constant";
import { Link } from "react-router-dom";

const RegionalList = ({ details }) => {
    return (
        <div className="container d-flex flex-column align-items-center">
            {details.map((region, index) => (
                <Link to="/subregion" key={index} style={{ textDecoration: 'none' }} state={{ region: region.region,link : region.link }} >
                    <div
                        className="card text-white mb-5 shadow"
                        style={{
                            height: "18rem",
                            width: "55rem",
                            borderRadius: "15px",
                            overflow: "hidden",
                            transition: "transform 0.3s, box-shadow 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.02)";
                            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                        }}
                    >
                        <img
                            src={region.url}
                            className="card-img"
                            alt="Region"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                opacity: 0.7,
                                filter: "brightness(0.7)",
                            }}
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                borderRadius: "15px",
                                padding: "20px",
                            }}
                        >
                            <h2
                                className="card-title text-center"
                                style={{
                                    fontFamily: "'Pacifico', cursive",
                                    color: "#FFD700",
                                    fontSize: "2.5rem",
                                    fontWeight: "bold",
                                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                {region.name}
                            </h2>
                            <p
                                className="card-text text-center"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    color: "#FFFFFF",
                                    fontSize: "1.1rem",
                                    marginTop: "5px",
                                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                Explore the taste of {region.name}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RegionalList;