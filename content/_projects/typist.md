---
title: Typist
date: 2021-03-17T22:22:47.043Z
favourite: false
tags:
  - VueJS
  - SPA
---
Typist is a web-based racing game, where participants race against each other to finish typing a randomly-generated paragraph of text.

## Skills Developed

* Full-stack web application development.
* Use of websockets to enable real-time data updates.
* Use of TDD and an Azure Pipelines (CI) to ensure high-quality, functional code.
* Developed an Express API to interact with MongoDB for high-score persistence.
* Use of JS Workers to ensure immediate UI feedback.

## Additional Comments

This project is probably my favourite so far. I enjoyed working with NodeJS to drive an application to completion - using modern frameworks and libraries to create a web-based game. I am particularly proud of the simplistic UI design and websocket implementation to send live player position updates to the rest of the lobby (screenshot 2). To ensure the UI was fast I implemented JavaScript web workers to assess the user input in another process.

Using TDD forced me to spend time upfront, thinking about how the application would look from a system design perspective. I now have over 100 unit tests, which are all set up to run using an Azure Pipeline - giving me a good perspective on the status of the application's functionality.