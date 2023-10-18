import { useState } from "react";
import { useFetch } from "../useFetch/useFetch";

import "./TripList.css";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trip } = useFetch(url);

  return (
    <div className="trip-card">
      <h2>Trips</h2>
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
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
//8-- 'data' renamed to 'trip' because our code mapped trip until we are connected to useFetch()
//14 -- if we mapping only trip.map() , first we must know what is the initial value of trip . Trip is the 'data' which is coming from useFetch (component = fake[custom] hook) and initial value is null. So null value cannot mapping. Why the 'trip' get the value of null, because when we call the useFetch , it is return immeditely initial value of 'data' , so we must write the code { trip && trip.map(...)} . When we write like this we can save the time to all codes run and 'trip' also return true. 😉