import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import handleFetch from "../src/utils/handleFetch";
import APIKEY from "../src/utils/config";


const OnePark = ({ park }) => {
    const { parkCode } = useParams();

    // state values where we will put the fetched data
    const [found, setFound] = useState({});
    const [error, setError] = useState("");

    // useEffect to run when the component renders
    useEffect(() => {
        console.log('fetching')
        // async function to actually do the fetch
        const fetchParkData = async () => {
            const SEARCH_URL = `https://developer.nps.gov/api/v1/parks?limit=50&fields=id,name,images&api_key=${APIKEY}&parkCode=${parkCode}`;

            const [response, error] = await handleFetch(SEARCH_URL);
            // if there is a response, set the dat
            if (response) {
                console.log(response)
                setFound(response.data[0]);
            }
            if (error) {
                console.log(error);
                setError(error.message);
            }
        };
        fetchParkData();
    }, []);

    // trying to get information from one park, from park code
    // iterate through the parkdata , for each park, check that the parkCode matches the obove parkCode 

    // const found = parkData.find((park) => park.parkCode === parkCode);

    // console.log(found)


    // if (!park) {
    //     return <div>loading...</div>;
    // }
    return (
        <div className="one-park">
            <h2>Single Park Details - {parkCode}</h2>
            <p className="park-description">{found.description}</p>
            <div className="park-activities">
                <h3>Activities:</h3>
                <ul>
                    {found.activities?.map((activity) => (
                        <li key={activity.id}>{activity.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
export default OnePark