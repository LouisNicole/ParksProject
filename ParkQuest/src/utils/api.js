// api.js

import API_KEY from "./config"; // Import the API key from config.js

export const fetchParksByActivity = async (activity) => {
  const url = `https://developer.nps.gov/api/v1/activities/parks?activity=${activity}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data; // Extract the park data from the response
  } catch (error) {
    console.error("Error fetching parks:", error);
    return [];
  }
};
