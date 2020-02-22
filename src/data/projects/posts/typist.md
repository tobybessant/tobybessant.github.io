## Skills Developed

- Full-stack web application development.
- Use of websockets to enable real-time status updates.
- Use of TDD, and a CI pipeline to ensure high-qualtiy, functional code.
- Developed an express API to interact with MongoDB for high-score persistence.
- JS Workers to ensure immediate UI feedback.

## Improvements / Evaluation

Whilst I am really pleased with the application, there are a few things I would re-consider / do differently next time:

- I would ideally improve the system design around the websocket implementation. My knowledge on how socket.io would work within the system was weak, which hindered my foresight around this implementation.
- I will consider using ‘Vuex’, a state-management library for Vue that may have assisted with managing the player state on the client side, and triggering relevant events.

## Additional Comments

This project is probably my favourite so far. I enjoyed working with NodeJS to drive an application to completion - using modern frameworks and libraries to create a web-based game. I am particularly proud of the simplistic UI design and websocket implementation to send live player position updates to the rest of the lobby (screenshot 2). To ensure the UI was fast I implemented JavaScript web workers to assess the user input in another process.

Using TDD forced me to spend time upfront, thinking about how the application would look from a system design perspective. I now have over 100 unit tests, which are all set up to run using an Azure Pipeline - giving me a good perspective on the status of the application's functionality.
