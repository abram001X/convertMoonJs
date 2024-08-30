import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export function DownloadSearch({ dato }) {
  return (
    <section className="contenedor_padre">
      {dato.data.map((obj, i) => {
        if(obj.type == 'video')
          {return (
          <section
            key={i}
            className="download_search"
            href="/search/{{result}}"
          >
            <div className="cont_img">
              <img src={obj.thumbnail ? obj.thumbnail[0].url: ''} className="img" />
            </div>
            <div className="cont_data-child">
              <p>{obj.title}</p>
              <b>{obj.channelTitle}</b>
              <br />
              <br />
              <b className="fecha_b">{obj.publishedTimeText}</b>
            </div>
            <div className="button_download">
              <Link to={`/download/${obj.videoId}`}>
                <button>Convertir video</button>
              </Link>
            </div>
          </section>
        );}
      })}
    </section>
  );
}
