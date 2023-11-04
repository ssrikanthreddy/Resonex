import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';
import OpenAI from 'openai';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { config } from 'dotenv';
config();

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_API_KEY,
});

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'uploads')));

app.post('/upload', upload.single('audio'), (req, res) => {
  const file = req.file;
  console.log('Received audio file:', file);

  // Here, you can process the file or save it to the desired location
  // For example, you can move it to a specific directory

  const newPath = path.join(__dirname, '/uploads', file.originalname);

  fs.rename(file.path, newPath, (err) => {
    if (err) throw err;
    console.log('File moved to project directory');
  });

  exec(`python3 voice.py`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    const output = stdout.trim();
    console.log(`${output}`);
    res.json({ result: output });
  });
});

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
          content:
            "You are a helpful therapist analysing patients' suicidal thoughts. Act as a therapist.",
        },
        {
          role: 'user',
          content:
            'Deeply analyse this user\'s feelings within 10 lines: "' +
            userInput +
            '"',
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
    console.log(`${output}`);
    res.json({ result: output });
  });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
