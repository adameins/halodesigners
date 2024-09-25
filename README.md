## <h1 align="center">“Talk is cheap. Show me the code.” ~ Linus Torvalds :thought_balloon: </h1>

<br>
  <p align="center">
  <a><img src="https://i.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.webp" alt="image" width="500"></a>
<br>

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
  
## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/letdummy/halodesigners-intern.git
   cd halodesigners-intern
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Vite development server, and you can view your app in the browser at link provided by your terminal.

### Build for Production

To create an optimized build of your app, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist` directory.

## Folder Structure

Here’s a basic overview of the project structure:

```
halodesigners-intern/
├── public/               # Static files
├── src/                  # Application source code
│   ├── components/       # Reusable components
│   ├── data/             # Contain useful data for project
│   ├── styles/           # CSS/Sass styles
│   ├── App.tsx           # Main application component
│   └── index.tsx         # Entry point
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # Tailwind configuration file
└── tsconfig.json         # TypeScript configuration
```

## Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Previews the production build locally.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strict syntactical superset of JavaScript that adds optional static typing.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **AOS**: A library for adding animations on scroll.

## Contributing

Contributions are welcome!
