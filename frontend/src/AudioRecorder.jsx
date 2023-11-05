import { useState } from 'react';
import { Recorder } from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';

const AudioRecorder = ({setData}) => {
  const [audioDetails, setAudioDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  });

  const handleRest = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    console.log('mic reset');
    setAudioDetails(reset);
  };

  const handleAudioStop = (data) => {
    handleRest();
    console.log(data);
    setAudioDetails(data);
    const formData = new FormData();
    formData.append('audio', data.blob, 'audio.wav');

    // Call your Python script using a method like fetch or Axios
    fetch('http://localhost:5500/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setData(JSON.parse(data.result))
      })
      .catch((error) => {
        console.error('Error uploading audio:', error);
      });
  };


  const handleAudioUpload = (file) => {
    console.log(file);
  };

  return (
    <div className="rec">
      <Recorder
        record={true}
        title={'New recording'}
        audioURL={audioDetails.url}
        showUIAudio
        audioDetails={audioDetails} // Add this line to pass audioDetails as a prop
        handleAudioStop={(data) => handleAudioStop(data)}
        handleAudioUpload={(data) => handleAudioUpload(data)}
        handleRest={() => handleRest()}
      />
    </div>
  );
};

export default AudioRecorder;
