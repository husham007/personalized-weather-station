# Personalized Weather Station

Personalized Weather Station (PWS) is a full-stack web application designed to provide a visual representation of the weather for your favorite locations through an intuitive 2D graph. Whether you're a weather enthusiast or simply curious about the conditions in different places, PWS offers a personalized and interactive weather tracking experience.

## Visit the PWS App

Visualize the weather of your favorite locations by visiting our website:

[![My Weather Station](https://img.shields.io/badge/Personalized_Weather_Station-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://personal-weather-station.netlify.app/)


Stay informed and connected with the weather in a way that's tailored to your preferences.

# Features

Personalized Weather Station comes with a set of features to enhance your weather tracking experience:

- **User Registration and Authentication** Users can sign up and log in to access the application's features.
- **Location Tracking:** Add and manage your favorite locations for personalized weather insights.
- **2D Weather Graph:** View the weather conditions of your selected locations in a visually appealing 2D graph.
- **Real-time Updates:** Get up-to-date weather information with real-time updates for accurate tracking.
- **User-friendly Interface:** Navigate through the application effortlessly with an intuitive and user-friendly design.,


# Tech Stack

### Frontend
- **React:** Core library for building the user interface, offering a component-based architecture and efficient rendering.
- **React Router Dom:** Enables navigation and routing within the application, facilitating a smooth and dynamic user experience.
- **Material-UI:** Integrates Material-UI components for a polished and consistent design language, enhancing the overall user interface.
- **Leaflet:** Incorporates Leaflet for interactive maps, offering a lightweight and extensible mapping solution for the application.
- **Mui Icons Material:** Utilizes Mui Icons Material for a comprehensive set of Material-UI icons, enhancing the visual appeal of the user interface.

### HTTP Communication
- **Axios:** A versatile HTTP client for making asynchronous requests, enabling efficient communication with external APIs.

### Authentication
- **JWT Decode:** Utilizes jwt-decode for decoding JSON Web Tokens (JWT), facilitating secure and seamless user authentication.

### State Management
- **Zustand:** Implements Zustand for state management, offering a lightweight yet powerful solution for managing application state.

### Development and Testing
- **Storybook:** Implements Storybook for component development and testing, allowing for the isolation and preview of React components.
- **Cypress:** Implements end-to-end testing with Cypress, providing a reliable and efficient way to ensure the application's functionality and user interactions.

These technologies work synergistically to create a robust and user-friendly web application, providing a delightful experience for both developers and end-users.


# Installation

To set up Personalized Weather Station on your local environment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/husham007/personalized-weather-station.git

2. Navigate to the project directory:

   ```bash
   cd pws-ui

3. Install dependencies: Run "npm install" in the project directory.

   ```bash
   npm install

4. Start the development server: Run "npm run dev" to launch the application locally.

   ```bash
   npm run dev

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_BE_URL` = `Your Backend url`

# Usage

1. Open your web browser and visit http://localhost:8081 to access Personalized Weather Station.

2. Add your favorite locations and explore the 2D weather graph to track weather conditions.

3. Stay informed about the weather in your preferred locations with ease.


# Project Folder Structure

- 📁 pws-ui
  - 📂 cypress
    - 📁 downloads
    - 📁 e2e
      - 📄 Weather.cy.js
    - 📁 fixtures
      - 📄 example.json
    - 📁 support
      - 📄 commands.js
      - 📄 e2e.js
  - 📂 dist
    - 📁 assets
      - 🖼️ hero-526e3d3e.jpg
      - 📄 index-5c4406df.js
      - 📄 index-69420918.css
      - 🖼️ Login_illustration-07db4881.svg
      - 🖼️ Signup_illustration-fa08772c.svg
    - 📄 index.html
    - 🖼️ storm.png
    - 🖼️ vite.svg
  - 📂 public
    - 🖼️ storm.png
    - 🖼️ vite.svg
    - 📄 _redirects
  - 📂 src
    - 📁 assets
      - 📁 images
        - 🖼️ hero.jpg
        - 🖼️ Login_illustration.svg
        - 🖼️ react.svg
        - 🖼️ Signup_illustration.svg
    - 📁 components
      - 📁 atoms
        - 📄 Address.jsx
        - 📄 DraggableMarker.jsx
        - 📄 Info.jsx
        - 📄 Map.jsx
        - 📄 RadioGroup.jsx
        - 📄 SocialMediaIcons.jsx
        - 📄 Subscribe.jsx
      - 📁 molecules
        - 📄 ContactForm.jsx
        - 📄 MapCard.jsx
        - 📄 NotificationSnackBars.jsx
        - 📄 Searchbar.jsx
        - 📄 SignIn.jsx
        - 📄 SignUp.jsx
      - 📁 organisms
        - 📄 Contact.jsx
        - 📄 Footer.jsx
        - 📄 Home.jsx
        - 📄 LoginPage.jsx
        - 📄 Navbar.jsx
        - 📄 SignUpPage.jsx
        - 📄 UserProfile.jsx
    - 📁 misc
      - 📄 tokenUtils.js
    - 📁 store
      - 📁 authStore
        - 📄 useAuthStore.js
    - 📁 stories
      - 📁 assets
        - 🖼️ accessibility.png
        - 🖼️ accessibility.svg
        - 🖼️ addon-library.png
        - 🖼️ assets.png
        - 🖼️ context.png
        - 🖼️ discord.svg
        - 🖼️ docs.png
        - 🖼️ figma-plugin.png
        - 🖼️ github.svg
        - 🖼️ share.png
        - 🖼️ styling.png
        - 🖼️ testing.png
        - 🖼️ theming.png
        - 🖼️ tutorials.svg
        - 🖼️ youtube.svg
      - 📄 button.css
      - 📄 Button.jsx
      - 📄 Button.stories.js
      - 📄 Configure.mdx
      - 📄 header.css
      - 📄 Header.jsx
      - 📄 Header.stories.js
      - 📄 Login.stories.js
      - 📄 Map.stories.js
      - 📄 page.css
      - 📄 Page.jsx
      - 📄 Page.stories.js
      - 📄 SignIn.stories.js
      - 📄 SignUpPage.stories.js
    - 📄 App.css
    - 📄 App.jsx
    - 📄 index.css
    - 📄 main.jsx
  - 📄 cypress.config.js
  - 📄 index.html
  - 📄 package-lock.json
  - 📄 package.json
  - 📄 README.md
  - 📄 vite.config.js




# Contributing

Contributions to Personalized Weather Station are encouraged! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request detailing your changes and explaining the purpose of your contribution.

## 🔗 Authors

| Adnan | Husham |
|----------|----------|
| [![portfolio](https://img.shields.io/badge/portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://react-tailwaind-portfolio-app.netlify.app/) | [![portfolio](https://img.shields.io/badge/portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.linkedin.com/in/mhy2018/) |
| [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adnan-hanif/) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mhy2018/) |
| [![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adhanif) | [![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/husham007) |


# License

This project is licensed under the 
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


