import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Destructure latitude and longitude from the query parameters
  const lat = Array.isArray(req.query.lat) ? req.query.lat[0] : req.query.lat;
  const lon = Array.isArray(req.query.lon) ? req.query.lon[0] : req.query.lon;

  // Replace with your actual API key
  const apiKey = env.REVERSE_GEO;

  // Build the API URL with query parameters
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${apiKey}`;

  try {
    // Make the fetch request
    const response = await fetch(url);

    // Check for successful response
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

      const data = "" ;  // Parse JSON data


    // Send the data as JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching geocode data" });
  }
}
