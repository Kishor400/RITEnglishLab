import './Video.css';

import VideoImg from "./assets/VideoImg.jpg";


function Video() {

  return (
    <>
      <div className="videost">

        <div className="stvidcontent">
          <div>
            <p className="headvid">Learn By Watching Videos...</p>
            <iframe id="play" className="framevid" width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <p id="title">Video Title...</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Video