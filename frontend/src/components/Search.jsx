import { useState } from 'react';
import { DownloadSearch } from './Sedown';

const KEY = import.meta.env.VITE_API_KEY;
export function Search() {
  const [searchId, setSearchId] = useState();
  const [apiSearch, setApiSearch] = useState();
  const handleSubmit = () => {
    const fetching = async () => {
      const resSearch = await fetch(
        `https://yt-api.p.rapidapi.com/search?query=${searchId}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': `${KEY}`,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
          }
        }
      );
      const dataSearch = await resSearch.json();
      setApiSearch(dataSearch);
    };
    fetching();
  };
  console.log(apiSearch);
  
  return (
    <section className="contenedor_padre">
      <form
        action=""
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1 className="title_1">
          Convertidor de Videos{' '}
          <svg
            className="icon_title"
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#e8eaed"
          >
            <path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q140-422 180.83-381q40.84 41 99.17 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.33 0 99.17-40.76 40.83-40.77 40.83-99Q820-538 779.17-579q-40.84-41-99.17-41H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" />
          </svg>
        </h1>
        <section className="contenedor_mp3">
          <label htmlFor="search" id="search" name="search">
            Busca un vídeo para descargar
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="input_search"
            placeholder="Buscar"
            onChange={(e) => {
              setSearchId(e.target.value);
            }}
          />
          <button className="buscar-boton">Buscar</button>
          {apiSearch ? <DownloadSearch dato={apiSearch} /> : ''}
        </section>
      </form>
    </section>
  );
}
