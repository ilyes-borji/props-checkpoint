import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.js';
function App() {
  const ilyes={profession:'ingenieur'
  , bio:'perseverance'
   ,fullName:'Borji Ilyes'
}
  return (
    <div className='Profile'>
      <h2>{fullName}</h2>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
     
    </div>
  );
}

export default App;
