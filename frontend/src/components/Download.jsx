/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from './Loading';

const KEY = import.meta.env.VITE_API_KEY;
export function Download() {
  const [dato, setDato] = useState();
  const [audio, setAudio] = useState();
  const [videoId, setvideoId] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetching();
  }, [id]);
  const fetching = async () => {
    setIsLoading(true);
    const resMp4 = await fetch(
      `https://yt-api.p.rapidapi.com/dl?id=${videoId ? videoId : id}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': `${KEY}`,
          'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
      }
    );
    const dataMp4 = await resMp4.json();
    const resMp3 = await fetch(
      `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId ? videoId : id}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': `${KEY}`,
          'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
        }
      }
    );
    const dataMp3 = await resMp3.json();

    setDato(dataMp4);
    setAudio(dataMp3);
    setIsLoading(false);
  };
  console.log(dato);
  console.log(audio);
  if (isLoading) {
    return (
      <section className="contenedor_padre">
        <Loading /> 
      </section>
    );
  } else if (dato && audio) {
    if (dato.status != 'fail' && audio.status != 'fail') {
      return (
        <>
          <section className="contenedor_padre">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                {
                  error ? '' : fetching();
                }
              }}
            >
              <h1 className="title_1">
                Convertidor de Videos
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
              <section className="contenedor_mp3" id="contenedor">
                <label htmlFor="link">
                  Ingresa una Url de Youtube para convertirlo en formato mp4 o
                  mp3
                </label>
                <input
                  name="link"
                  id="link"
                  type="text"
                  placeholder="Convertir"
                  onChange={(e) => {
                    setError(false);
                    if (e.target.value.includes('&')) {
                      return setvideoId(
                        e.target.value.slice(
                          e.target.value.indexOf('=') + 1,
                          e.target.value.indexOf('&')
                        )
                      );
                    }else if(e.target.value.includes('youtu.be')){
                      setvideoId(
                        e.target.value.slice(
                          e.target.value.indexOf('youtu.be/') + 1,
                          e.target.value.length
                        )
                      );
                    }
                     else if (e.target.value.includes('=')) {
                      setvideoId(
                        e.target.value.slice(
                          e.target.value.indexOf('=') + 1,
                          e.target.value.length
                        )
                      );
                    } else {
                      setError(true);
                      setvideoId('Ingresa una url válida');
                    }
                  }}
                />

                <p className="p_error">
                  {error ? 'Ingresa una url válida' : ''}
                </p>
                <button className="convert_button">
                  Convertir Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M330-240q-104 0-177-73T80-490q0-104 73-177t177-73h370q75 0 127.5 52.5T880-560q0 75-52.5 127.5T700-380H350q-46 0-78-32t-32-78q0-46 32-78t78-32h370v80H350q-13 0-21.5 8.5T320-490q0 13 8.5 21.5T350-460h350q42-1 71-29.5t29-70.5q0-42-29-71t-71-29H330q-71-1-120.5 49T160-490q0 70 49.5 119T330-320h390v80H330Z" />
                  </svg>
                </button>
              </section>
            </form>
            <br />
            <br />
            <a href="/search" className="buscar">
              <p>
                Buscar video{' '}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
                    stroke="#fff"
                  />
                </svg>
              </p>
            </a>
          </section>
          <section className="cont_download_convert">
            <section className="convert">
              <div className="cont_data">
                <div className="cont_img">
                  <img src={dato.thumbnail[2].url} className="img" />
                </div>
                <b className="dr">{dato.lengthSeconds}s</b>
                <div className="cont_data-child">
                  <p>{dato.title}</p>
                  <br />
                  <b>{dato.channelTitle}</b>
                  <br />
                </div>
              </div>
              <div className="cont_format">
                <div className="mp4">
                  <a href={dato.adaptiveFormats[0].url}>
                    <button className="button_svg">Descargar video</button>
                  </a>
                </div>
                <div>
                  <a download="archivo.mp3" href={audio.link}>
                    <button className="button_svg">Descargar audio</button>
                  </a>
                </div>
              </div>
            </section>
          </section>
        </>
      );
    } else {
      navigate('/');
    }
  }
}
