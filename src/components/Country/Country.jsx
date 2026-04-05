import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // second system
    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  const currency = Object.keys(country.currencies.currencies);
  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <p>Continents: {country.continents.continents}</p>
      <h3>Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>
        Currency: {country.currencies.currencies[currency]?.name} - (
        {country.currencies.currencies[currency]?.symbol})
      </p>
      <p>
        Area: {country.area.area} (
        {country.area.area > 300000 ? "Big Country" : "Small Country"} )
      </p>
      <button onClick={handleVisited} className="btn">
        {visited ? "Visited" : "Not visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country?.flags?.flags?.png);
        }}
        className="btn"
      >
        Add Flag
      </button>
    </div>
  );
};

export default Country;
