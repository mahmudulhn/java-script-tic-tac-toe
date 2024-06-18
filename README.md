# JavaScript Tic-Tac-Toe

This project is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The project is structured with a clean separation of concerns, using different files for HTML structure, CSS styling, and JavaScript functionality.

## Directory Structure

- `index.html`: The main HTML file which contains the structure of the Tic-Tac-Toe game.
- `README.md`: Documentation file providing an overview and instructions for the project.
- `scripts/`: Directory containing JavaScript files.
  - `app.js`: Handles the main application logic and interactions.
  - `config.js`: Contains configuration settings for the game.
  - `game.js`: Implements the game mechanics and logic.
- `styles/`: Directory containing CSS files for styling.
  - `configuration.css`: Styles for game configuration elements.
  - `game.css`: Styles specific to the game board and pieces.
  - `overlays.css`: Styles for overlay elements (e.g., win/lose messages).
  - `styles.css`: General styles for the project.

## File Details

### index.html

This file sets up the basic HTML structure for the game. It includes:
- A game board where players can click to place their marks.
- Configuration options for setting player names or choosing symbols.
- Links to the CSS files for styling and the JavaScript files for functionality.

### README.md

This file provides instructions and an overview of the project. Typically, it would contain:
- A description of the project.
- Setup instructions.
- How to run the game.
- Any dependencies or requirements.
- Contact information or credits.

### scripts/app.js

This file contains the main logic for interacting with the HTML elements. It:
- Initializes the game.
- Handles user interactions (e.g., clicks on the game board).
- Updates the game state and UI based on user actions.

### scripts/config.js

This file manages the game configuration settings. It:
- Defines default settings (e.g., player names, symbols).
- Allows the configuration of game parameters.

### scripts/game.js

This file contains the core game logic. It:
- Manages the game state (e.g., which player's turn, game board state).
- Implements the rules of Tic-Tac-Toe.
- Checks for win conditions or a tie.

### styles/configuration.css

This file contains styles for the configuration elements of the game (e.g., input fields, buttons for setting player names).

### styles/game.css

This file contains styles specific to the game board and the game pieces (e.g., X and O symbols).

### styles/overlays.css

This file contains styles for overlay elements, such as messages that appear when a player wins or the game ends in a tie.

### styles/styles.css

This file contains general styles that apply to the overall project (e.g., fonts, layout).

## Running the Project

To run the project, follow these steps:
1. **Clone or download the repository.**
2. **Open `index.html` in a web browser.**

This should display the Tic-Tac-Toe game interface, allowing you to play the game directly in your browser.

## Enhancements and Customizations

- **Additional Features**: You can add more features like different board sizes, AI opponent, or multiplayer support.
- **Styling Improvements**: Customize the appearance with more sophisticated CSS or by adding animations.
- **Code Enhancements**: Refactor the JavaScript code for better performance or readability.

This project provides a good foundation for understanding basic web development concepts and building interactive web applications.
