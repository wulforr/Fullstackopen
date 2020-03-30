import React,{useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [countries,setCountries] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [filterdCountries, setFilteredCountries] = useState([])
  const [Weather,setWeather] = useState({current:{
    temperature:0,
    wind_dir:'N',
    wind_speed:0,
    weather_icons:['#']
  }})
  const apikey = process.env.REACT_APP_apikey;
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setCountries(res.data)
    })
  },[])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    setFilteredCountries(countries.filter(ele => new RegExp(e.target.value,"i").test(ele.name)))
  } 
  if(filterdCountries.length === 1){
    console.log(apikey)
    axios.get(`http://api.weatherstack.com/current?access_key=${apikey}f&query=${filterdCountries[0].name}`)
    .then(res => {
      console.log(res.data)
      setWeather(res.data)})
  }
  console.count('rendered')

  // console.log(countries)
  return (
    <div className="App">
      find Countries <input value={searchValue} onChange={handleChange} />
      {/* { countries.filter(ele => new RegExp(searchValue,'i').test(ele.name)).length>10 ? <p>Too many matches specify another filter</p> : countries.filter(ele => new RegExp(searchValue,'i').test(ele.name)).map(ele => <p key={ele.alpha2code}>{ele.name}</p>) } */}
      { filterdCountries.length>10 ? 
        <p>Too many matches specify another filter</p> : 
        filterdCountries.length===1 ? 
        <div>
          <h1>{filterdCountries[0].name}</h1>
          <p>capital: {filterdCountries[0].capital} </p>
          <p>population: {filterdCountries[0].population} </p>
          <h2>languages</h2>
            <ul>
            {filterdCountries[0].languages.map(ele => <li>{ele.name}</li>)}
            </ul>
            <img src={filterdCountries[0].flag} alt="flag of country" height={200} width={200} />
            <h2>Weather in {filterdCountries[0].name}</h2>
            
            <p>temperature: {Weather.current.temperature} celsius </p>
            <img src={Weather.current.weather_icons[0]} alt="weather icon" />
            <p>Wind: {Weather.current.wind_speed} mph direction {Weather.current.wind_dir} </p>
        </div> :
        filterdCountries.map(ele => <div><p key={ele.alpha2code}>{ele.name}</p><button onClick={() => {setSearchValue(ele.name);setFilteredCountries(countries.filter(element => new RegExp(ele.name,"i").test(element.name)))
      }}>Show</button></div>) }

    </div>
  );
}

export default App;
