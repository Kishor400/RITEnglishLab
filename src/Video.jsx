import './Video.css';

import VideoImg from "./assets/VideoImg.jpg";


function Video() {

  return (
    <>
      {/* <div className="videost">

        <div className="stvidcontent">
          <div>
            <p className="headvid">Learn By Watching Videos...</p>
            <iframe id="play" className="framevid" width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <p id="title">Video Title...</p>
          </div>
          <div>
            <img src={VideoImg} className="vidimg"/>
          </div>
        </div>
      </div> */}
      <div class="container">

        <div class="main-video-container">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=0">
          </iframe>
          {/* <video src="images/vid-1.mp4" loop controls class="main-video"></video> */}
          <h3 class="main-vid-title">house flood animation</h3>
        </div>

        <div class="video-list-container">

          <div class="list active">
              <video src="images/vid-1.mp4" class="list-video"></video>
              <h3 class="list-title">house flood animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-2.mp4" class="list-video"></video>
              <h3 class="list-title">zoombie walking animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-3.mp4" class="list-video"></video>
              <h3 class="list-title">emoji falling animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-4.mp4" class="list-video"></video>
              <h3 class="list-title">3D town animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-5.mp4" class="list-video"></video>
              <h3 class="list-title">man chasing carrot animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-6.mp4" class="list-video"></video>
              <h3 class="list-title">door hinge animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-7.mp4" class="list-video"></video>
              <h3 class="list-title">poeple walking in town animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-8.mp4" class="list-video"></video>
              <h3 class="list-title">knight chasing virus animation</h3>
          </div>

          <div class="list">
              <video src="images/vid-9.mp4" class="list-video"></video>
              <h3 class="list-title">3D helicopter animation</h3>
          </div>

        </div>

        </div>

    </>
  )
}

export default Video