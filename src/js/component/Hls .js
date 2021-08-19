import React from 'react';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactPlayer from 'react-player';
export default function Hls() {
  return(
<div>
   <div className="modal fade" id="hlbModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <ReactHlsPlayer
               src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
               
                    autoPlay={false}
                    controls={true}
                    width="100%"
                    height="100%"
                    hlsConfig={{
                      maxLoadingDelay: 4,
                      minAutoBitrate: 0,
                      lowLatencyMode: true,
                      maxBufferLength: 30,
                      maxMaxBufferLength: 600,
                      startPosition: -1,
                      debug: false,
                      liveSyncDurationCount: 3,
                      liveMaxLatencyDurationCount: Infinity,
                      liveDurationInfinity: false,
                    }}
                  />,
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="mpforModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      { <ReactPlayer url='http://media.w3.org/2010/05/bunny/movie.mp4' 
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                /> }
      </div>
     
    </div>
  </div>
</div>



<div className="modal fade" id="yutbleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content fram">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body ">
      { <ReactPlayer url='https://www.youtube.com/watch?v=932fiU2mENM' 
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                /> }
      </div>
     
    </div>
  </div>
</div>
</div>
  )
}
