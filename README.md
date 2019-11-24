This project is a SPA using the [Hiking Project](https://www.hikingproject.com/data) API.

## Features
- A count of selected hikes in the header
- List of difficulties that allow to filter hikes
- Card of a trail that contains: an image, a name and a button to select and deselect the hike
- When clicking on a hike image it will show the hike's full image, name and button to select and deselect the hike and also a button to go back to the homepage
- Handle mobile view

## Requirements
- NodeJS >= 10.16.3 (https://nodejs.org/en/download/)
- Yarn >= 1.19.1 (https://yarnpkg.com/en/docs/install)

## Setup

1. Run `yarn install` to install dependencies.
2. `cp .env.example .env`
3. Changes variables in the file `.env` by your own one.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
