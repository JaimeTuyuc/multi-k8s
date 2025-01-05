import axios from 'axios';
import { useEffect, useState } from 'react';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');
  
  useEffect(() => { 
    const fetchValues = async () => {
      const values = await axios.get('/api/values/current');
      console.log("🚀 ~ fetchValues ~ values:", values)
      setValues(values.data);
    }
    fetchValues();

    const fetchIndexes = async () => {
      const seenIndexes = await axios.get('/api/values/all');
      console.log("🚀 ~ fetchIndexes ~ seenIndexes:", seenIndexes)
      setSeenIndexes(seenIndexes.data);
    }
    fetchIndexes();
  }, [])

  const handleSubmit = async (e) => { 
    e.preventDefault();
    await axios.post('/api/values', { index });
    setIndex('');
  }

  return (  
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button >Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {seenIndexes.map(({ number }) => number).join(', ')}

      <h3>Calculated values:</h3>
      {Object.keys(values).map(key => (
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      ))}
    </>
  );
}

export default Fib;