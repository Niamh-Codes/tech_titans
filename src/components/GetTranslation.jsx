import React, { useState } from 'react';

const CountryData1 = () => {
    const [matchedLanguages, setMatchedLanguages] = useState([]);

    const getCountryData = (countryName) => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Failed to fetch country data: ${response.status}`);
                }
            })
            .then(data => {
                const countryData1 = {
                    Name: data[0].name.common,
                    Capital: data[0].capital[0],
                    Population: data[0].population,
                    Area: data[0].area,
                    Region: data[0].region,
                    Languages: Object.values(data[0].languages).join(', ')
                };

                const languages = countryData1.Languages.split(', ');




                const helloArray = [{
                  "language": "English",
                  "hello": "Hello!"
                },
                {
                  "language": "Afrikaans",
                  "hello": "hallo"
                },
                {
                  "language": "Albanian",
                  "hello": "Përshëndetje"
                },
                {
                  "language": "Amharic",
                  "hello": "ሰላም"
                },
                {
                  "language": "Arabic",
                  "hello": "مرحبا"
                },
                {
                  "language": "Armenian",
                  "hello": "Բարեւ"
                },
                {
                  "language": "Azerbaijani",
                  "hello": "Salam"
                },
                {
                  "language": "Basque",
                  "hello": "Kaixo"
                },
                {
                  "language": "Belarusian",
                  "hello": "добры дзень"
                },
                {
                  "language": "Bengali",
                  "hello": "হ্যালো"
                },
                {
                  "language": "Bosnian",
                  "hello": "zdravo"
                },
                {
                  "language": "Bulgarian",
                  "hello": "Здравейте"
                },
                {
                  "language": "Catalan",
                  "hello": "Hola"
                },
                {
                  "language": "Cebuano",
                  "hello": "Hello"
                },
                {
                  "language": "Chichewa",
                  "hello": "Moni"
                },
                {
                  "language": "Chinese (Simplified)",
                  "hello": "您好"
                },
                {
                  "language": "Chinese (Traditional)",
                  "hello": "您好"
                },
                {
                  "language": "Corsican",
                  "hello": "Bonghjornu"
                },
                {
                  "language": "Croatian",
                  "hello": "zdravo"
                },
                {
                  "language": "Czech",
                  "hello": "Ahoj"
                },
                {
                  "language": "Danish",
                  "hello": "Hej"
                },
                {
                  "language": "Dutch",
                  "hello": "Hallo"
                },
                {
                  "language": "English",
                  "hello": "Hello"
                },
                {
                  "language": "Esperanto",
                  "hello": "Saluton"
                },
                {
                  "language": "Estonian",
                  "hello": "Tere"
                },
                {
                  "language": "Filipino",
                  "hello": "Kumusta"
                },
                {
                  "language": "Finnish",
                  "hello": "Hei"
                },
                {
                  "language": "French",
                  "hello": "Bonjour"
                },
                {
                  "language": "Frisian",
                  "hello": "Hello"
                },
                {
                  "language": "Galician",
                  "hello": "Ola"
                },
                {
                  "language": "Georgian",
                  "hello": "გამარჯობა"
                },
                {
                  "language": "German",
                  "hello": "Hallo"
                },
                {
                  "language": "Greek",
                  "hello": "Γεια σας"
                },
                {
                  "language": "Gujarati",
                  "hello": "હેલો"
                },
                {
                  "language": "Haitian Creole",
                  "hello": "Bonjou"
                },
                {
                  "language": "Hausa",
                  "hello": "Sannu"
                },
                {
                  "language": "Hawaiian",
                  "hello": "Alohaʻoe"
                },
                {
                  "language": "Hebrew",
                  "hello": "שלום"
                },
                {
                  "language": "Hindi",
                  "hello": "नमस्ते"
                },
                {
                  "language": "Hmong",
                  "hello": "Nyob zoo"
                },
                {
                  "language": "Hungarian",
                  "hello": "Helló"
                },
                {
                  "language": "Icelandic",
                  "hello": "Halló"
                },
                {
                  "language": "Igbo",
                  "hello": "Ndewo"
                },
                {
                  "language": "Indonesian",
                  "hello": "Halo"
                },
                {
                  "language": "Irish",
                  "hello": "Dia duit"
                },
                {
                  "language": "Italian",
                  "hello": "Ciao"
                },
                {
                  "language": "Japanese",
                  "hello": "こんにちは"
                },
                {
                  "language": "Javanese",
                  "hello": "Hello"
                },
                {
                  "language": "Kannada",
                  "hello": "ಹಲೋ"
                },
                {
                  "language": "Kazakh",
                  "hello": "Сәлем"
                },
                {
                  "language": "Khmer",
                  "hello": "ជំរាបសួរ"
                },
                {
                  "language": "Korean",
                  "hello": "안녕하세요."
                },
                {
                  "language": "Kurdish (Kurmanji)",
                  "hello": "Hello"
                },
                {
                  "language": "Kyrgyz",
                  "hello": "салам"
                },
                {
                  "language": "Lao",
                  "hello": "ສະບາຍດີ"
                },
                {
                  "language": "Latin",
                  "hello": "salve"
                },
                {
                  "language": "Latvian",
                  "hello": "Labdien!"
                },
                {
                  "language": "Lithuanian",
                  "hello": "Sveiki"
                },
                {
                  "language": "Luxembourgish",
                  "hello": "Moien"
                },
                {
                  "language": "Macedonian",
                  "hello": "Здраво"
                },
                {
                  "language": "Malagasy",
                  "hello": "Hello"
                },
                {
                  "language": "Malay",
                  "hello": "Hello"
                },
                {
                  "language": "Malayalam",
                  "hello": "ഹലോ"
                },
                {
                  "language": "Maltese",
                  "hello": "Hello"
                },
                {
                  "language": "Maori",
                  "hello": "Hiha"
                },
                {
                  "language": "Marathi",
                  "hello": "हॅलो"
                },
                {
                  "language": "Mongolian",
                  "hello": "Сайн байна уу"
                },
                {
                  "language": "Myanmar (Burmese)",
                  "hello": "မင်္ဂလာပါ"
                },
                {
                  "language": "Nepali",
                  "hello": "नमस्ते"
                },
                {
                  "language": "Norwegian",
                  "hello": "Hallo"
                },
                {
                  "language": "Pashto",
                  "hello": "سلام"
                },
                {
                  "language": "Persian",
                  "hello": "سلام"
                },
                {
                  "language": "Polish",
                  "hello": "Cześć"
                },
                {
                  "language": "Portuguese",
                  "hello": "Olá"
                },
                {
                  "language": "Punjabi",
                  "hello": "ਹੈਲੋ"
                },
                {
                  "language": "Romanian",
                  "hello": "Alo"
                },
                {
                  "language": "Russian",
                  "hello": "привет"
                },
                {
                  "language": "Samoan",
                  "hello": "Talofa"
                },
                {
                  "language": "Scots Gaelic",
                  "hello": "Hello"
                },
                {
                  "language": "Serbian",
                  "hello": "Здраво"
                },
                {
                  "language": "Sesotho",
                  "hello": "Hello"
                },
                {
                  "language": "Shona",
                  "hello": "Hello"
                },
                {
                  "language": "Sindhi",
                  "hello": "هيلو"
                },
                {
                  "language": "Sinhala",
                  "hello": "හෙලෝ"
                },
                {
                  "language": "Slovak",
                  "hello": "ahoj"
                },
                {
                  "language": "Slovenian",
                  "hello": "Pozdravljeni"
                },
                {
                  "language": "Somali",
                  "hello": "Hello"
                },
                {
                  "language": "Spanish",
                  "hello": "Hola"
                },
                {
                  "language": "Sundanese",
                  "hello": "halo"
                },
                {
                  "language": "Swahili",
                  "hello": "Sawa"
                },
                {
                  "language": "Swedish",
                  "hello": "Hallå"
                },
                {
                  "language": "Tajik",
                  "hello": "Салом"
                },
                {
                  "language": "Tamil",
                  "hello": "ஹலோ"
                },
                {
                  "language": "Telugu",
                  "hello": "హలో"
                },
                {
                  "language": "Thai",
                  "hello": "สวัสดี"
                },
                {
                  "language": "Turkish",
                  "hello": "Merhaba"
                },
                {
                  "language": "Ukranian",
                  "hello": "Здрастуйте"
                },
                {
                  "language": "Urdu",
                  "hello": "ہیلو"
                },
                {
                  "language": "Uzbek",
                  "hello": "Salom"
                },
                {
                  "language": "Vietnamese",
                  "hello": "Xin chào"
                },
                {
                  "language": "Welsh",
                  "hello": "Helo"
                },
                {
                  "language": "Xhosa",
                  "hello": "Sawubona"
                },
                {
                  "language": "Yiddish",
                  "hello": "העלא"
                },
                {
                  "language": "Yoruba",
                  "hello": "Kaabo"
                },
                {
                  "language": "Zulu",
                  "hello": "Sawubona"
                }
              ]
      
        

                const matchedLanguages = helloArray.filter(item => languages.includes(item.language));
                setMatchedLanguages(matchedLanguages);
            })
            .catch(error => {
                console.error(`Error occurred: ${error.message}`);
            });
    };

return (
<div id="searchrow" className="flex flex-col items-center justify-center">
  <div className=" flex items-center justify-center"> {/* Change flex-col to flex */}
    <input className="mt-10 h-12 w-64 rounded-l-lg border-r-0 pl-4" type="text" id="main-search" placeholder="Type your country here..." /> 
    <button className="mt-10 h-12 w-16 rounded-l-none rounded-r-lg h-full" onClick={() => getCountryData(document.querySelector('#main-search').value)}></button>
  </div>
  <div id="helloContainer" className="w-full space-y-4 flex flex-wrap"> {/* Add flex-wrap to allow elements to wrap */}
    {matchedLanguages.map((match) => (
      <div key={match.language} className="card flex items-center justify-center">
        <div className="card-body">
          <h5 className="card-title">{match.language}</h5>
          <p className="card-text">Hello, {match.hello}</p>
        </div>
      </div>
    ))}
  </div>
</div>
);
      }

export default CountryData1; // Export the CountryData1 component