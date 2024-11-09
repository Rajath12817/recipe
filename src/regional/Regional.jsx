import RegionalList from "./RegionalList";
import { useEffect, useState } from "react";

const Regional = () => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        fetchRegions();
    }, []);

    const fetchRegions = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/state/getstate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setRegions(data);  // Save data to state for use in RegionalList
            console.log(data);
        } catch (error) {
            console.error("Error fetching regions:", error);
        }
    };

    return (
        <div className="container my-5 text-center">
            <h1 style={{
                fontFamily: "'Pacifico', cursive",
                color: "#D35400",
                fontSize: "3rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
            }}>
                Regional Foods of India
            </h1>
            <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.2rem",
                color: "#555",
                marginBottom: "2rem"
            }}>
                Discover the flavors of India, one region at a time.
            </p>
            <div>
                <RegionalList details={regions} />
            </div>
        </div>
    );
};

export default Regional;