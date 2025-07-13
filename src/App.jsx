import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import DataBlock from './Components/DataBlock'
import List from './Components/List'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_APP_API_KEY
const ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN



function App() {
  const object_ondisplay_URL = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getOnDisplay&access_token=' + ACCESS_TOKEN
  // const getimage_URL = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token='+ ACCESS_TOKEN +'&object_id=<OBJECT_ID>'
  // const [objectID, setObjectID] = useState('');
  const [objects, setObjects] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);
  const [CommonStartDate, setCommonStartDate] = useState('');
  const [CommonEndDate, setCommonEndDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  
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
      return max
    }
    const fetchData = async() => {
      const response = await axios.get(object_ondisplay_URL).catch( (err) => {console.log(err)});
      let result = response.data.objects;
      setObjects(result);
      setFilteredObjects(result);
      setCommonStartDate(findMostCommonYear('year_start', result));
      setCommonEndDate(findMostCommonYear('year_end', result));
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

  return (
    <>
      <Banner/>
      <div className="bottom-half">
        <div id="data-block">
          <DataBlock title='Number of Works on Display' data={objects.length}/>
          <DataBlock title='Most Works Have A Start Date of' data={CommonStartDate}/>
          <DataBlock title='Most Works Have An End Date of' data={CommonEndDate}/>
        </div>
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
        <div id="list-container">
          <List objects={filteredObjects} end_date={CommonEndDate}/>
        </div>
      </div>
      
    </>
  )
}

export default App
