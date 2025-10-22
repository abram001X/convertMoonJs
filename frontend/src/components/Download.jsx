/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "./Loading";
import { getIdYt } from "../lib/geitIdYt";
import { getAudioDownload, getVideoDownload } from "../api/getApiYt";
import { Convert } from "./Convert";

export function Download() {
  const [apiVideo, setApiVideo] = useState();
  const [audio, setAudio] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetching(id);
  }, [id]);
  const fetching = async () => {
    setIsLoading(true);
    if (id) {
      const dataMp4 = await getVideoDownload(id);
      const dataMp3 = await getAudioDownload(id);
      setApiVideo(dataMp4);
      setAudio(dataMp3);
      setIsLoading(false);
      console.log(dataMp4)
    }
  };
  if (isLoading) {
    return (
      <section className="contenedor_padre">
        <Loading />
      </section>
    );
  } else if (apiVideo && audio) {
    if (apiVideo.status != "fail" && audio.status != "fail") {
      return (
        <>
          <Convert/>
          <section className="cont_download_convert">
            <section className="convert">
              <div className="cont_data">
                <div className="cont_img">
                  <img src={apiVideo.thumbnail[0].url} className="img" />
                </div>
                <b className="dr">{apiVideo.lengthSeconds}s</b>
                <div className="cont_data-child">
                  <p>{apiVideo.title}</p>
                  <br />
                  <b>{apiVideo.channelTitle}</b>
                  <br />
                </div>
              </div>
              <div className="cont_format">
                <div className="mp4">
                  <a href={apiVideo.formats[0].url}>
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
      navigate("/");
    }
  }
}
