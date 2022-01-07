import "./App.css";
import { createRef } from "react";

function Video(props) {
  let videoTag = createRef();

  const increasePlaybackSpeed = () => {
    videoTag.current.playbackRate = 2.5;
    console.log("hi");
  };

  const handleVideoEnd = () => {
    if (videoTag.current.currentTime >= 3) {
      console.log("i reached a certain mark");
      props.videoEndHandler(1);
    }
  };

  return (
    <>
      <video
        onPlay={increasePlaybackSpeed}
        onTimeUpdate={handleVideoEnd}
        autoplay="autoplay"
        muted
        width="50%"
        ref={videoTag}
      >
        <source src="/images/WA_cover2.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Video;
