import { useState } from "react";
import { useFetch } from "../useFetch/useFetch";

import "./TripList.css";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/tripss");
  const { data: trip, isPending, error } = useFetch(url);

  return (
    <div className="trip-card">
      <h2>Trips</h2>
      {isPending && (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
      {error && (
        <div>
          <h4>{error}.</h4>
        </div>
      )}
      <ul>
        {trip &&
          trip.map((trip) => {
            return (
              <li key={trip.id}>
                <h4>{trip.title}</h4>
                <p>{trip.price}</p>
                <p>{trip.loc}</p>
              </li>
            );
          })}
      </ul>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europee")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/tripse")}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
