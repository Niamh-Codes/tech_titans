import React, { useState } from 'react';
import helloArray from './helloArray';
import AnswerCard from './AnswerCard';


const GetTranslation = (props) => {
    // const [countryData, setCountryData] = useState();
 console.log(props);
//     const getCountryData = (countryName) => {
//         const url = `https://restcountries.com/v3.1/name/${countryName}`;

//         fetch(url)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error(`Failed to fetch country data: ${response.status}`);
//                 }
//             })
//             .then(data => {
//               console.log(data);
//                 const countryData1 = {
//                     Name: data[0].name.common,
//                     Capital: data[0].capital[0],
//                     Population: data[0].population,
//                     Area: data[0].area,
//                     Region: data[0].region,
//                     Languages: Object.values(data[0].languages).join(', ')
//                 };

//                 const languages = countryData1.Languages.split(', ');

// console.log("countryData1", countryData);
      
// test (countryData1);
        

//                 const matchedLanguages = helloArray.filter(item => languages.includes(item.language));
//                 setMatchedLanguages(matchedLanguages);
//             })
//             .catch(error => {
//                 console.error(`Error occurred: ${error.message}`);
//             });
//     };
// function test (data) { 
//   setCountryData(data);
//   console.log(data);
// };


return (
<div id="searchrow" className="text-customOrange bg-body flex flex-col items-center justify-center">
  <div className=" flex items-center justify-center"> {/* Change flex-col to flex */}
    <input className="mt-10 h-12 w-64 rounded-l-lg border-r-0 pl-4 text-black text-2xl" type="text" id="main-search" placeholder="Type your country here..." onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        props.getCountryData(document.querySelector('#main-search').value);
                    }}} /> 
                    
    <button className="text-black mt-10 h-12 w-16 bg-customOrange rounded-l-none rounded-r-lg " onClick={() => props.getCountryData(document.querySelector('#main-search').value)}></button>
  </div>
  <div id="helloContainer" className="justify-center mt-10 mb-10 text-customOrange bg-body w-full space-y-4 flex flex-wrap"> 
    {props.matchedLanguages.map((match,index) => (
      <div key={index} className="card flex items-center justify-center">
        <div className="card-body">
          <h3 className="card-title text-7xl">Language(s) spoken: {match.language}</h3>
          <p className="card-text flex justify-center text-6xl">Hello: {match.hello}</p>
        </div>
      </div>
    ))}
    
{/* <AnswerCard 
countryCapital={countryData.Capital}/>
{console.log("countryData", countryData)} */}
  </div>
</div>
);
      }

export default GetTranslation; 