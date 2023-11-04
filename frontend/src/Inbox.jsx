import { useState } from "react";

const Inbox = ({setTargetPercent, setHappy, setSad}) => {
    const [reply, setReply] = useState("");
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

    if (buttonName === 'seranos'){
      const data = await response.json();
      console.log(data.result);
      setTargetPercent(parseFloat(data.result))
    }
  
    if (buttonName === 'theralyse'){
      const data = await response.json();
      console.log(data.result);
      setReply((data.result))
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const handleTab = (tabName) => {

  }

  return (
    <>
      <h1 className="prompt">Hey! How are you feeling today?</h1>
      <div className="inbox">
        
      <div class="tab-container">
        <div class="tab" onclick={handleTab("text")}>Text</div>
        <div class="tab" onclick={handleTab("voice")}>Voice</div>
      </div>
        <div id="text" className="wrapper active">
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
        </div>

        <div id="voice" className="wrapper ">
          <div className="input">
          
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
        </div>

      </div>

      <div className="gpt-title">TheralyseGPT Says:</div>
      <div className="gptoutput">{reply}</div>
    </>
  );
};

export default Inbox;
