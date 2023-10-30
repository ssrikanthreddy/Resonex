const Inbox = () => {
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

    const data = await response.json();
    console.log(data);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="prompt">Hey! How are you feeling today?</h1>
      <div className="inbox">
        <div className="input">
          <form id="myForm" onSubmit={formSubmit}>
            <textarea
              className="feeling"
              name="feeling"
              type="text"
              placeholder="I am thinking of ending things..."
            />
          </form>
        </div>
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

      <div className="gptoutput">Output</div>
    </>
  );
};

export default Inbox;
