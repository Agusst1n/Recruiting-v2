import React, { useContext, useEffect } from 'react'
import VideoContext from '../../context/VideoContext'

import styles from './Download.module.css'

const download = () => {

  const {downloadLink,newRecording} = useContext(VideoContext)

  useEffect(()=>{
    
  },[download])
  
  return (
    <div className={styles.download_container}>
        {downloadLink && <video src={downloadLink} className={styles.download_video} autoPlay playsInline></video>}
        {downloadLink && (
        <a href={downloadLink} download="file.mp4" className={styles.download_href}>Descargar</a>
        )}
        <div className={styles.button_grabar_de_nuevo}>
          <button onClick={newRecording}>
            <ion-icon name="sync"></ion-icon>
          </button>
        </div>
    </div>
  )
}

export default download