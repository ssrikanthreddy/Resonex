import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userInput);
    var response = await fetch('http://localhost:5500/suicide', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    var data = await response.json();
    console.log(data);

    //AI STUFF
    response = await fetch('http://localhost:5500/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
