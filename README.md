# 🎬 MediaVault

MediaVault is a modern media search web application that allows users to search for media content using a keyword and discover related photos, videos, and GIFs in one place.

The application provides a simple and interactive interface where users can enter a search term, browse through different types of media, and save their favorite content to a personal collection. MediaVault is designed to provide a smooth browsing experience while demonstrating the use of **React.js, Redux, API integration, React Router, and modern UI development techniques**.

## ✨ Features

### 🔍 Media Search

Users can search for media by entering any keyword or phrase.

For example, searching for:

* `Nature`
* `Cars`
* `Space`
* `Animals`
* `Travel`

will return relevant media content based on the search query.

### 🖼️ Photo Search

MediaVault allows users to discover photographs related to their search query.

Photos are displayed in an organized card-based layout, making it easy to browse through multiple results.

### 🎥 Video Search

Users can also search for videos related to a particular keyword.

The application provides video previews so users can explore video content directly from the search results.

### 🎞️ GIF Search

MediaVault supports GIF searching as well, allowing users to find animated content based on their search terms.

GIF results are displayed alongside other media while maintaining a separate category for easier navigation.

### 📚 Media Categories

Search results can be organized into different categories:

* **All** – Displays photos, videos, and GIFs.
* **Photos** – Displays only image results.
* **Videos** – Displays only video results.
* **GIFs** – Displays only GIF results.

This makes it easier for users to find the exact type of media they are looking for.


### ❤️ Save to Collection

Users can save interesting media items to their personal collection.

Saved media can be accessed from the **Collection** page, allowing users to revisit their favorite photos, videos, and GIFs without searching for them again.


### 📁 Collection Management

The Collection page provides different filters to organize saved content:

* All
* Photos
* Videos
* GIFs

Users can also clear their saved collection when required.

The saved collection is maintained using browser storage so that saved items can persist even after refreshing the page.


### 🔄 Persistent Data

MediaVault uses **Local Storage** to preserve the user's saved media.

This means that refreshing or reopening the application does not immediately remove the items saved in the collection.


### 📱 Responsive Interface

MediaVault is designed to provide a responsive browsing experience across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile devices
* 📟 Tablets


## 🛠️ Technologies Used

### Frontend

* **React.js** – Used to build the user interface and reusable components.
* **JavaScript (ES6+)** – Used for application logic and functionality.
* **HTML5** – Used for the structure of the application.
* **CSS / Tailwind CSS** – Used for styling and responsive UI design.

### State Management

* **Redux** – Used to manage global application state.
* **Redux Toolkit** – Used to simplify Redux store and reducer management.

### Routing

* **React Router DOM** – Used for navigation between different pages such as the search page and collection page.

### APIs

MediaVault integrates external media APIs to retrieve:

* Photos
* Videos
* GIFs

The APIs provide dynamically generated search results based on the user's query.

### Browser Storage

* **Local Storage** – Used to store saved media and maintain the user's collection across page refreshes.

## 🎯 Project Objectives

The main objectives of MediaVault are to:

1. Build a practical media-search application using React.
2. Learn how to integrate third-party APIs into a frontend application.
3. Implement global state management using Redux.
4. Implement client-side navigation using React Router.
5. Work with asynchronous API requests and dynamic data.
6. Create reusable React components.
7. Implement persistent data using Local Storage.
8. Build a responsive and user-friendly interface.
9. Understand how a frontend application can communicate with external services.
10. Deploy a complete React application to a production environment.


## 🧠 Key Concepts Demonstrated

This project demonstrates several important frontend development concepts:

* React components
* Props and component reusability
* React Hooks
* State management
* Redux and Redux Toolkit
* React Router
* API integration
* Asynchronous JavaScript
* Fetching and rendering dynamic data
* Conditional rendering
* Event handling
* Local Storage
* Responsive design
* Environment variables
* Production builds
* Deployment

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub!


### 📌 Project Summary

**MediaVault is a React-based media discovery platform that brings photos, videos, and GIFs together in a single searchable interface. It combines API integration, Redux state management, React Router, and Local Storage to provide users with an interactive way to discover and save media content.**
