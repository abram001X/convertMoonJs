import './css/normalize.css';
import './css/style.css';
import { Routes, Route } from 'react-router-dom';
import { Convert } from './components/Convert.jsx';
import { Search } from './components/Search.jsx';
import { Download } from './components/Download.jsx';
import { Steps } from './components/Steps.jsx';
function App() {
  return (
    <>
      <menu className="menu">
        <div>
          <a href="/" className="title-menu">
            ConvertMoon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M501-320q38 0 74.5-16t63.5-48q7-8 3-18t-14-12q-38-6-72-28.5T501-502q-20-35-23.5-75.5T488-656q4-10-2.5-18t-17.5-6q-69 13-109 65t-40 115q0 75 53.5 127.5T501-320ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
            </svg>
          </a>
        </div>
        <div className="child-menu">
          <a href="/search">
            Buscar video{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </a>
          <a href="/" className="Inicio">
            Inicio{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </a>
        </div>
      </menu>
      <Routes>
        <Route path='/' element={<Convert />} />
        <Route path="/search" element={<Search />} />
        <Route path='/download/:id' element={<Download/>}/>
      </Routes>
      <Steps/>
      <footer className="footer">
        <p>© 2024 AbrahamAlfonzo</p>
        <p>abrahamalfonzo11@gmail.com</p>
        <p>© 2024 ConvertMoon</p>
      </footer>
    </>
  );
}

export default App;
