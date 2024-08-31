import "./App.css";
import video1 from "./assets/videos/Video.mp4";
import video2 from "./assets/videos/video1.mp4";
import { VideoPlayer } from "./components/VideoPlayer";

const videos = [
  {
    name: "Video1",
    src: video1,
    tracks: [
      {
        lang: "en",
        src: "src/assets/subtitles.vtt",
      },
      {
        lang: "np",
        src: "src/assets/subtitles2.vtt",
      },
    ],
  },

  {
    name: "Video2",
    src: video2,
    tracks: [
      {
        lang: "en",
        src: "src/assets/subtitles.vtt",
      },
      {
        lang: "np",
        src: "src/assets/subtitles2.vtt",
      },
    ],
  },
];

function App() {
  return (
    <>
      <VideoPlayer
        captions={videos[0].tracks}
        src={videos[0].src}
        width={"100%"}
        height={"100%"}
      />
    </>
  );
}

export default App;
