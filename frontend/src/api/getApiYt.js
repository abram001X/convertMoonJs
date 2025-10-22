const KEY = import.meta.env.VITE_API_KEY;
export async function getVideoDownload(id) {
  const resMp4 = await fetch(
    `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${KEY}`,
        "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
      },
    }
  );
  return resMp4.json();
}
export async function getAudioDownload(id) {
  const resMp3 = await fetch(
    `https://youtube-mp36.p.rapidapi.com/dl?id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${KEY}`,
        "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
      },
    }
  );
  return resMp3.json();
}
