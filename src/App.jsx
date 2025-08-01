import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import DataBlock from './Components/DataBlock'
import List from './Components/List'
import axios from 'axios'
import MediumChart from './Components/MediumChart'
const ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN



function App() {
  const object_ondisplay_URL = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getOnDisplay&access_token=' + ACCESS_TOKEN

  const [objects, setObjects] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);
  const [CommonStartDate, setCommonStartDate] = useState('');
  const [commonMedium, setCommonMedium] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [mediums, setMediums] = useState([]);
  
  
   useEffect(() => {
    const findMostCommonYear = (year_type, object_s) => {
      let res = {'': 0}
      let max = ''
      for (let i=0; i < object_s.length; i++){
        const year = object_s[i][year_type]
        if (!year) continue;
        res[year] = (res[year] || 0) + 1;
        
        if (res[year] > res[max]){
          max = year;
        }
      }
      if (year_type === 'medium'){
        setMediums(Object.keys(res).slice(1));
      }
      return max
    }
    const fetchData = async() => {
      const response = await axios.get(object_ondisplay_URL).catch( (err) => {console.log(err)});
      let result = response.data.objects;
      setObjects(result);
      setFilteredObjects(result);
      setCommonStartDate(findMostCommonYear('year_start', result));
      setCommonMedium(findMostCommonYear('medium', result));
    }

    
    fetchData();
    
  }, []);

  const searchList = (e) => {
    let input = e.target.value;
    if (input !== '') {
      const new_list = objects.filter((obj) => obj.title.toLowerCase().includes(input.toLowerCase()));
      setFilteredObjects(new_list);
    } else{
      setFilteredObjects(objects);
    }  
  }

  const handleSelect = (e) => {
    let input = e.target.value;
    if (input !== '') {
      const new_list = objects.filter((obj) => obj.medium.toLowerCase().includes(input.toLowerCase()));
      setFilteredObjects(new_list);
    } else{
      setFilteredObjects(objects);
    } 
  }

  return (
    <>
      <Banner/>
      <div className="bottom-half">
        <div id="data-block">
          <DataBlock title='Number of Works on Display' data={ filteredObjects.length + '/' + objects.length }/>
          <DataBlock title='Most Common Start Date' data={CommonStartDate}/>
          <DataBlock title='Most Common Medium' data={commonMedium.toUpperCase()}/>
        </div>
        <div id='input-select-container'>
          <div id="input-container">
            <h2>Search For A Piece Here👇🏾</h2>
            <input
              name='Seach Bar'
              type="text"
              value={inputValue}
              placeholder='Search by Title'
              onChange={(e) => {
                setInputValue(e.target.value);
                searchList(e);
              }}
            />
          </div>
          <div id="select-container">
              <h2>Filter by Medium:</h2>
            <select name="mediums" id="mediums" onChange={(e) => {
                handleSelect(e);
            }}>
                <option value="">--Please choose a medium--</option>
              {mediums && mediums.map((medium, index) => (
                <option key={index} value={medium}>{medium.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div id="charts">
            <MediumChart type='medium' products={objects}/>
            <MediumChart type='year' products={objects}/>
        </div>
        
        <div id="list-container">
          <List objects={filteredObjects} end_date={CommonStartDate}/>
        </div>
                 
      </div>
      
    </>
  )
}

export default App
