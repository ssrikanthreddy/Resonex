<br>

<div id="top">
<p align="center">
  <a href="https://github.com/ssrikanthreddy/ResonexAI" target="_blank" rel="noopener noreferrer">
    <img width = "200" src="https://i.postimg.cc/65k10HFg/Resonex-Logo-Full.png" alt="ResonexAI-logo">
  </a>
</p>
</div>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ssrikanthreddy/Resonex.svg)](https://github.com/ssrikanthreddy/Resonex/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ssrikanthreddy/Resonex)](https://github.com/ssrikanthredddy/Resonex/pulls)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE.md)

</div>

<br>

<p align="center">ResonexAI uses algorithms to identify and address mental health risks in social media content, offering tailored support and monitoring for suicidal or depressed individuals.</p>

<br>

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [⚒️ Built Using](#️-built-using)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Prerequisites](#️-prerequisites)
  - [📦 Installation](#-installation)
  - [🏃 Running Locally](#-running-locally)
  - [🔑 API Key Setup](#-api-key-setup)
- [🎯 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

<br>

## 🌟 Overview

ResonexAI is designed to identify and address mental health risks among social media users. It achieves this through the development and deployment of algorithms that can accurately detect depression and suicide risk in user-generated content. These algorithms enable the platform to flag at-risk individuals for closer monitoring. Additionally, the project offers a user-oriented mental health program, allowing users to opt in and receive content tailored to their mental health status. Ultimately, the project aims to enhance the mental well-being of social media users while respecting privacy and data security.

<br>

## ⚒️ Built Using

<img align="left" alt="html" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

<img align="left" alt="css" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

<img align="left" alt="py" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

<img  align="left" alt="py" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
          
          
<img align="left" alt="react" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="left" alt="node" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

<img align="left" alt="npm" width="30px" style="padding-right:10px;padding-top:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
<img align="left" alt="vite" width="30px" style="padding-right:10px;padding-top:10px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" />

<br>
<br>
<br>

## 🚀 Getting Started

This guide will walk you through the steps to install and run the ResonexAI locally on your machine.

<br>

### ⚙️ Prerequisites

---

Before you begin, make sure you have the following software installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

<br>

### 📦 Installation

---

To install ResonexAI, follow these steps:

1. Clone the repository
   ```bash
   git clone https://github.com/ssrikanthreddy/Resonex.git
   ```
2. Navigate to the project directory

   ```bash
   cd Resonex
   ```

3. Install the required packages and libraries

   ```bash
   cd frontend
   npm i

   # Open a new terminal

   cd backend
   npm i
   ```

   <br>

### 🔑 API Key Setup

---

This repository uses the OpenAI API to access powerful natural language processing capabilities. To get started, you'll need to set up your `.env` file with your OpenAI API key. Here's a step-by-step guide on how to do it:

## Steps

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ssrikanthreddy/resonex.git
   ```

2. Navigate to the root directory of your project:

   ```bash
   cd resonex
   cd backend
   ```

3. Create a new file called `.env` in the root directory of your project. You can do this from the command line or use a text editor of your choice.

4. Open the `.env` file and add the following line:

   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual OpenAI API key. You can get one [here](https://platform.openai.com/docs/introduction).

5. Save the `.env` file.

6. It's essential to keep your API key confidential. Make sure it's added to your `.gitignore` file to avoid accidentally committing it to your Git repository. If you haven't already, open or create a `.gitignore` file and add the following line to it:

   ```
   .env
   ```

   This will exclude the `.env` file from being tracked by Git.

7. Commit the changes to your repository:

   ```bash
   git add .env .gitignore
   git commit -m "Add OpenAI API key and update .gitignore"
   git push
   ```

Now, your OpenAI API key is securely stored in your `.env` file, and your repository is configured to ignore it during version control.

<br>

### 🏃 Running Locally

---

To run ResonexAI locally, follow these steps:

1. Start the server by running the appropriate command. For example, `npm run dev` in `/frontend` to start the development server using Vite. You will recieve a message similar to this:

   [![vite-run-dev.png](https://i.postimg.cc/nhczxsnf/vite-run-dev.png)](https://postimg.cc/Vdp1BkSK)

2. On your device, hold down the `Ctrl` key (Windows) or `Cmd` key (Mac).

3. Left-click on the link to the app. For example, click on [http://localhost:5173](http://localhost:5173). This will automatically open the app in your default browser.

4. You should now see the ResonexAI web app running in your browser.

<br>

> Please note that the actual link and port number may vary depending on your specific setup and configuration.

<br>

<br>

## 🎯 Usage

Utilising ResonexAI is very simple. All you have to do is input text or audio in the dashboard and click Seranos to get probabilities and Therlayze to get analysis.

<br>

## 💻System Architecture

[![System-Design-Architecture.png](https://i.postimg.cc/65ZWn8vB/System-Design-Architecture.png)](https://postimg.cc/LnHFM6DW)

<br>

## 🤝 Contributing

We appreciate your interest in contributing to our project! Whether you want to report a bug, propose new features, or submit improvements to the existing codebase, your contributions are highly valued.

To get started, please take a moment to review the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

<br>

## 📄 License

<br>

Licensed under the MIT License.

<p align="right"><a href="#top">⬆️</a></p>
