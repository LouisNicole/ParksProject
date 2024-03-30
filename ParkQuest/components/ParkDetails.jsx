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
            <div className="top-section">

                <div className="one-park-img">
                    {found.images && found.images.length > 0 && (
                        <img alt={found.images[0].fullName} src={`${found.images[0].url}`} />
                    )}
                </div>
                <div className="one-park-name">
                    <h2>{found.fullName}</h2>
                </div>
            </div>

            <div className="park-details">
                <div className="mini-wiki">
                    <h3 className="about">About</h3>
                    <p className="park-description">{found.description}</p>
                </div>
                {found.operatingHours && found.operatingHours.length && (
                    <li className="times">

                        <h3 className="times">Schedule:</h3>
                        <ul>
                            {Object.entries(found.operatingHours[0].standardHours)
                                .sort((a, b) => {
                                    const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                                    return weekday.indexOf(a[0]) - weekday.indexOf(b[0]);
                                })
                                .map(([day, hours]) => (
                                    <li key={day}>{`${day}: ${hours}`}</li>
                                ))}
                        </ul>

                    </li>

                )}

            </div>

            <div className="park-activities">
                <h3>Things to do at {found.fullName}</h3>
                <div className="activities-list">
                    <ul>
                        {found.activities?.map((activity) => (
                            <li key={activity.id}>{activity.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}
export default OnePark