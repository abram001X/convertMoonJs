/* eslint-disable react/prop-types */
export function DownloadSearch({ dato }) {
  return (
    <section className="contenedor_padre">
      {dato.data.map((obj, i) => {
        return (
          <section
            key={i}
            className="download_search"
            href="/search/{{result}}"
          >
            <div className="cont_img">
              <img src={obj.thumbnail[1].url} className="img" />
            </div>
            <div className="cont_data-child">
              <p>{obj.title}</p>
              <b>{obj.channelTitle}</b>
              <br />
              <b>{obj.viewCount}visualizaciones</b>
              <br />
              <b className="fecha_b">{obj.publishedTimeText}</b>
            </div>
            <div className="button_download">
              <p htmlFor="">.MP4</p>
              <a href="/apjsdabram/mp4,{{result.video_id}}">
                <button>Descargar</button>
              </a>
              <p htmlFor="">.MP3</p>
              <a href="/apjsdabram/mp3,{{result.video_id}}">
                <button>Descargar</button>
              </a>
            </div>
          </section>
        );
      })}
    </section>
  );
}
