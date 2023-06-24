# React Native VroumExpress App

## completed work

- Navigation bar
- item lists
- list item components
- agency search text input
- dynamic image display
- redux (actions, store, reducers)
- asyncStorage (favored cars have a small star on their page)
- use of stub but the api connection system is provided
- unit tests (actions, reducers and 1 component)

## Prerequisites

- [NodeJs > 12 (LTS 18 recommended)](https://nodejs.org) 
- npm (or yarn)
- [expo-cli installed globally](https://docs.expo.dev/more/expo-cli/)


## Usage

To install all dependencies, use `npm install` (or `yarn install` if you are using yarn)  
To start the project, use `npx expo start`

## Folder structure

This template follows a very simple project structure:

- `sources`:
  - `assets`: Asset folder to store all images, vectors, etc.
  - `asyncStorage`: Helpers for manage data into local storage
  - `components`: Folder to store any common component are used through the app
  - `model`: Model classes
  - `navigation`: Folder to store the navigators.
  - `redux`:
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all screens/features.
  - `Stub`: Folder that contains Stub data
  - `styles`: Folder to store all the styling concerns related to the application theme.
  - `tests`: Folder that contains all unit tests
    - `actions`: Redux actions unit tests
    - `reducers`: Redux reducers unit tests
    - `views`: Screens and components unit tests
  - `utils`: Random helpers
  - `App.js`: Main component that starts the app.

## Sketches created at the start of the project

Explaination|Light Theme|Dark Theme|
|:---------:|:---------:|:--------:|
Screen where you can find an agency by name|<img src="./Docs/sketch-agences-light.png" height="600" style="margin:20px">|<img src="./Docs/sketch-agences-dark.png" height="600" style="margin:20px">|
Screen where you can see all cars available in the selected agency|<img src="./Docs/sketch-one-agence-light.png" height="600" style="margin:20px">|<img src="./Docs/sketch-one-agence-dark.png" height="600" style="margin:20px">|
Screen to see the car and rent it|<img src="./Docs/sketch-one-car-light.png" height="600" style="margin:20px">|<img src="./Docs/sketch-one-car-dark.png" height="600" style="margin:20px">|
Screen to see all available cars|<img src="./Docs/sketch-cars-light.png" height="600" style="margin:20px">|<img src="./Docs/sketch-cars-dark.png" height="600" style="margin:20px">|