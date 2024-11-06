import RegionalList from "./RegionalList";
import { useEffect, useState } from "react";

const Regional = () => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
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

        fetchRegions();
    }, []);

    return (
        <div className="container my-3">
            <h1>Regional Foods</h1>
            <p>Explore the taste of Indian foods</p>
            <div>
                <RegionalList details={regions} />
            </div>
        </div>
    );
};

export default Regional;
