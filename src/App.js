import axios from 'axios';
import React, {useState, useEffect} from "react";

const App = (props)=> {
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
    
    const tablecell = {
        border: "1px solid black"
    };

    // Rendering the list of breeds
    return (
        <div>
            <h2>List of Dog Breeds</h2>
            <table style={{border: "2px solid black", borderCollapse: "collapse", width: "100%"}}>
                <tr>
                    <th style={tablecell}>Name</th>
                    <th style={tablecell}>Life Span (years)</th>
                    <th style={tablecell}>Male Weight (kg)</th>
                    <th style={tablecell}>Female Weight (kg)</th>
                    <th style={tablecell}>Hypoallergenic</th> 
                </tr>
                {breeds.map((breed, index) => (
                    <tr key={index}>
                        <td style={tablecell}>{breed.attributes.name}</td>
                        <td style={tablecell}>{breed.attributes.life.min} - {breed.attributes.life.max} years</td>
                        <td style={tablecell}>{breed.attributes.male_weight.min} - {breed.attributes.male_weight.max} kg</td>
                        <td style={tablecell}>{breed.attributes.female_weight.min} - {breed.attributes.female_weight.max} kg</td>
                        <td style={tablecell}>{breed.attributes.hypoallergenic ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default App;