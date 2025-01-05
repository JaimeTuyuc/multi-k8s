import { useNavigate } from 'react-router-dom'

const OtherPage = () => {
  const navigate = useNavigate();

  return (  
    <>
      <h1>Other Page</h1>
      <button onClick={ () => navigate('/')}>Go back home</button>
    </>
  );
}

export default OtherPage;