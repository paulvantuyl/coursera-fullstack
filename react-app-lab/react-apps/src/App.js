import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = (props) => {
  // Define the state for API data
  const [breeds, setBreeds] = useState([]);

  // Fetching data from API on component mount
  useEffect(() => {
    const url = "https://dogapi.dog/api/v2/breeds";
    axios.get(url)
      .then(response => {
        // Set the fetched data to state
        setBreeds(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  const tableCellStyle = {
    border: '2px solid gray',
    textAlign: 'left',
  }

  // Rendering the list of breeds
  return (
    <div>
      <h2>List of Dog Breeds</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid gray' }}>
        <thead>
          <tr>
            <th style={ tableCellStyle } scope="col">Breed</th>
            <th style={ tableCellStyle } scope="col">Life span (years)</th>
            <th style={ tableCellStyle } scope="col">Male weight (kg)</th>
            <th style={ tableCellStyle } scope="col">Female weight (kg)</th>
            <th style={ tableCellStyle } scope="col">Hypoallergenic?</th>
          </tr>
        </thead>
        <tbody>
          { breeds.map((breed, index) => (
            <tr key={ index }>
              <th style = { tableCellStyle } scope="row">{ breed.attributes.name }</th>
              <td style={ tableCellStyle }>{ breed.attributes.life.min } - { breed.attributes.life.max }</td>
              <td style={ tableCellStyle }>{ breed.attributes.male_weight.min } - { breed.attributes.male_weight.max }</td>
              <td style={ tableCellStyle }>{ breed.attributes.female_weight.min } - { breed.attributes.female_weight.max }</td>
              <td style={ tableCellStyle }>{ breed.attributes.hypoallergenic ? 'Yes' : 'No' }</td>
            </tr>
          )) }
          <tr></tr>
        </tbody>
      </table>

      {/* <ul>
        { breeds.map((breed, index) => (
          <li key={ index }>
            <h3>{ breed.attributes.name }</h3>
            <p>Life Span: { breed.attributes.life.min } - { breed.attributes.life.max } years</p>
            <p>Male Weight: { breed.attributes.male_weight.min } - { breed.attributes.male_weight.max } kg</p>
            <p>Female Weight: { breed.attributes.female_weight.min } - { breed.attributes.female_weight.max } kg</p>
            <p>Hypoallergenic: { breed.attributes.hypoallergenic ? 'Yes' : 'No' }</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
