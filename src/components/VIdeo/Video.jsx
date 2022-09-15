import React, { useEffect, useContext } from 'react';
import VideoContext from '../../context/VideoContext';

import Download from '../Download/Download';

import styles from './Video.module.css';

function Video() {
  const {
    setDownloadLink,
    getUserMedia,
    startRecording,
    stopRecording,
    localVideoRef,
    chunks,
    stateChunk,
    isRecording,
    stop,
    videoTime
  } = useContext(VideoContext);

  useEffect(
    function () {
      getUserMedia();
      if (isRecording) {
        return;
      }
      if (chunks.current.length === 0) {
        return;
      }
      const blob = new Blob(chunks.current, {
        type: 'video/x-matroska;codecs=avc1,opus'
      });
      setDownloadLink(URL.createObjectURL(blob));
      chunks.current = [];
    },
    [isRecording, stateChunk]
  );

  return (
    <>
      <div className={styles.video_container}>
        {stop ? (
          <Download />
        ) : (
          <div className={styles.video}>
            <div
              className={
                isRecording
                  ? styles.recording_containON
                  : styles.recording_containOFF
              }
            >
              <div>{videoTime}s / 120s</div>
              <div
                className={
                  isRecording ? styles.recordingON : styles.recordingOFF
                }
              ></div>
            </div>
            {/* Video user actual */}
            <video
              className={styles.video_user}
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
            />

            {/* Buttos grabar y pausar */}
            <div className={styles.buttons_controls}>
              {isRecording ? (
                <button onClick={stopRecording}>
                  <ion-icon name="stop"></ion-icon>
                </button>
              ) : (
                <button onClick={startRecording}>
                  <ion-icon name="play"></ion-icon>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Video;
