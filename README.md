# Quince React

Live version: https://krisztian-kugler.github.io/quince-react/

## Technologies

* React 16
* Axios

## Notes

* Implemented my own solution for alphabetical list sorting (using a tweaked bubble sort technique).
* The persons list gets sorted immediately at launch. Clicking the name header swaps the sorting order.
* The app doesn't allow you to create a new person if the name is less than 3 chars.
* When a new person is created, it gets placed to its proper position in the sorted list.
* Checkboxes and checkbox logic are completely self-made, it's easier to style them this way.
* Data dump gets updated on every change (create, delete, check/uncheck employee, change sort order).

## Development and Build instructions

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
