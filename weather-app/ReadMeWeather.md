## Clone and Run the weather app locally
-- Naviagte to https://github.com/thomblweed/Weather and clone to your machine
-- Open the folder 'weather-app' in an IDE ( I use Visual Studio Code ) 
-- Using the Terminal in VS Code or a seperate command interface ( Cmder for example )
    - Enter the following command 'npm install' and enter
    - Enter the following command 'npm start' and enter
-- This should compile and serve to your browser at http://localhost:3000/

## Testing that error handling works
-- While still running npm start
-- In the component Index.tsx
    - remove the value for the 'apiUrl' prop to leave an empty string
    - change the props value from 'false' to 'true' for the 'flushLocalStorage' prop
    - save
-- This will cause an error to the api call and show a message to the user
-- The stack error message will be logged in the console

