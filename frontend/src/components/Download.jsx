/* eslint-disable react/prop-types */
export function Download({ dato, audio }) {
  
    return (
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
            <br/>
            <b>{dato.viewCount} Visualizaciones</b>
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
  );
}
