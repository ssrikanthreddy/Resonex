const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors'); 

const app = express();

app.use(cors()); 

app.use(bodyParser.json());

app.post('/process', (req, res) => {
  const userInput = req.body.userInput;

  exec(`python3 suicide.py "${userInput}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    const output = stdout.trim();
    console.log(`Output from Python script: ${output}`);
    res.json({ result: output });
  });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
