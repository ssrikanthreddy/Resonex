import { useState } from 'react';
import AudioRecorder from './AudioRecorder';

const Inbox = ({
  setData,
  setTargetPercent,
  setHappy,
  setSad,
  setActiveTab,
  activeTab,
}) => {
  const [reply, setReply] = useState('');

  const handleSubmit = async (buttonName) => {
    const formData = new FormData(document.getElementById('myForm'));
    const userInput = formData.get('feels');

    var apiUrl;
    if (buttonName === 'seranos') apiUrl = 'http://localhost:5500/seranos';
    else if (buttonName === 'theralyse')
      apiUrl = 'http://localhost:5500/theralyse';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    if (buttonName === 'seranos') {
      const data = await response.json();
      console.log(data.result);
      setTargetPercent(parseFloat(data.result));
      setHappy(100 - parseFloat(data.result));

      var sadd = parseFloat(data.result) * 1.3;

      setSad(sadd < 100 ? sadd : 100);
    }

    if (buttonName === 'theralyse') {
      const data = await response.json();
      console.log(data.result);
      setReply(data.result);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="input">
      <h1 className="prompt">Hey! How are you feeling today?</h1>
      <div className="inbox">
        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => handleTab('text')}
          >
            Text
          </div>
          <div
            className={`tab ${activeTab === 'voice' ? 'active' : ''}`}
            onClick={() => handleTab('voice')}
          >
            Voice
          </div>
        </div>

        <div
          id="voice"
          className={activeTab === 'voice' ? 'wrapper active' : 'wrapper'}
        >
          <AudioRecorder setData={setData} />
        </div>

        <div
          id="text"
          className={activeTab === 'text' ? 'wrapper active' : 'wrapper'}
        >
          <div className="input">
            <form id="myForm" onSubmit={formSubmit}>
              <textarea
                className="feeling"
                name="feels"
                type="text"
                placeholder="I am thinking of ending things..."
              />
            </form>
          </div>

          <div className="buttons">
            <button
              className="button seranos"
              onClick={() => handleSubmit('seranos')}
              type="submit"
              name="seranos"
            >
              Seranos
            </button>
            <button
              className="button theralyse"
              onClick={() => handleSubmit('theralyse')}
              type="submit"
              name="theralyse"
            >
              Theralyse
            </button>
          </div>

          <div className="gpt-title">TheralyseGPT Says:</div>
          <div className="gptoutput">{reply}</div>
        </div>
      </div>
    </section>
  );
};

export default Inbox;
