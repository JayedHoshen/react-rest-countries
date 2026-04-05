import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    if (!visitedCountries.includes(country)) {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  const handleVisitedFlags = (flag) => {
    if (!visitedFlags.includes(flag)) {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <div className="header">
        <h1 className="text-center">Total Countries - {countries.length}</h1>

        <h3>Total Country Visited: {visitedCountries.length}</h3>
        <div className="visited-country">
          {visitedCountries.map((country) => (
            <span key={country?.cca3?.cca3}>{country.name.common}</span>
          ))}
        </div>
        <h3>Total Visited Flags: {visitedFlags.length}</h3>
        <div className="visited-flag">
          {visitedFlags.map((flag, index) => (
            <img key={index} src={flag}></img>
          ))}
        </div>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
