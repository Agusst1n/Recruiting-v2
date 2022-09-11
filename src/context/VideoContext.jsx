import { createContext, useRef, useState } from "react"

const VideoContext = createContext()

const VideoProvider = ({ children }) => {

    const [downloadLink, setDownloadLink] = useState(""); //*Se guarda el link del video grabado
    const streamRef = useRef(); ///*Informacion del video
    const localVideoRef = useRef();
    const streamRecorderRef = useRef(); //*Informacion de la grabacion

    const chunks = useRef([]); //*se guarda la info del video grabado

    const [isRecording, setIsRecording] = useState(false); //*controla el estado de la grabacion

    const [stateChunk, setStateChunk] = useState([]) //*se guarda la info del video grabado (lo utilizo para actualizar el useEffect)

    const [newQuestion, setNewQuestion] = useState({})

    const [stop, setStop] = useState(false)

    const [recordVideo, setRecordVideo] = useState(false)

    const [videoTime, setVideoTime] = useState(0)

    const intervalRef = useRef();



   const rec = (value) =>{

    if(value){
       let count = 0
       const id = setInterval(() => {

        if(count >= 120){

          clearInterval(intervalRef.current)

          if (!streamRecorderRef.current) {
            return;
          }
          streamRecorderRef.current.stop();
          setRecordVideo(true)
          setIsRecording(false);
          setStop(true)
          setVideoTime(0)

          return
        }else{
          count++
          setVideoTime(count)
        }
        
      }, 1000);

      intervalRef.current = id;
      
    }else{
      console.log('false')
      clearInterval(intervalRef.current) //!No funciona :C
    }
   }

    //!Obtiene la informacion
    const getUserMedia = () => {
      const constraints = {
        audio: true,
        video: true
      };
      
      navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        streamRef.current = stream;
        localVideoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.log(error);
      });
    };
    
    //!Borra la antigua grabacion
    const newRecording = () =>{
      setDownloadLink("")
      setStop(false)
      setRecordVideo(false)
      setVideoTime(0)

      getUserMedia()
    }
    
    //!Empieza a grabar
    const startRecording = () =>{

      if (isRecording) {
        return;
      }
      if (!streamRef.current) {
        return;
      }
  
  
      streamRecorderRef.current = new MediaRecorder(streamRef.current);
      streamRecorderRef.current.start();
      streamRecorderRef.current.ondataavailable =  (event) =>{
        if (chunks.current) {
          chunks.current.push(event.data);
          setStateChunk(event.data)
        }
      };
      setIsRecording(true);

      rec(true)
    }

    //!Detiene la grabacion
    const stopRecording = ()=> {

      if (!streamRecorderRef.current) {
        return;
      }
      streamRecorderRef.current.stop();
      console.log('pare el video el chunk esta', chunks.current.length)
      setRecordVideo(true)
      setIsRecording(false);
      setStop(true)

      rec(false)
      setVideoTime(0)

    }

  return (
    <VideoContext.Provider
      value={{
        downloadLink,
        setDownloadLink, 
        getUserMedia,
        newRecording,
        startRecording,
        stopRecording,
        streamRef,
        localVideoRef,
        streamRecorderRef,
        chunks,
        stateChunk,
        setStateChunk,
        isRecording,
        setIsRecording,
        stop,
        setStop,
        newQuestion,
        setNewQuestion,
        recordVideo,
        setRecordVideo,
        videoTime
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export { VideoProvider }

export default VideoContext