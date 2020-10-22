import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(null);
  
  const fetchData = () => {
    setData('Loading...'); 
    axios.get('/api/serverA') // If no host, assumes its same host
      .then(res => {
        setData(res.data);
      })
      .catch(() => setData('Failed to get data'));
  };
  
  return (
    <div className="App">
      <div className="container">
        <button onClick={fetchData}>Fetch Data</button>
        <h2>{data}</h2>
      </div>
    </div>
  );
}

export default App;
