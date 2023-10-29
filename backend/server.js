import express from 'express';
import { exec } from 'child_process';

import cors from 'cors';
import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey : process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors()); 

app.use(express.json());

// Route for GPT call
app.post('/theralyse', async (req, res) => {
  const userInput = req.body.userInput;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful therapist analysing patients\' suicidal thoughts. Act as a therapist.',
        },
        {
          role: 'user',
          content: 'Deeply analyse this user\'s feelings within 5 lines: \"'+userInput + "\"",
        },
      ],
      max_tokens: 200,
    });

    var gptOutput = response.choices[0].message.content;
    console.log(`Output from GPT-3.5 Turbo: ${gptOutput}`);

    // You can send the `gptOutput` as needed, for example, send it back as a response.
    res.json({ result: gptOutput });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route for suicide.py call
app.post('/seranos', (req, res) => {
  
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
