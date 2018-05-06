## Hosting Information ##


## Clone and Run the weather app locally ##
-- Naviagte to https://github.com/thomblweed/Weather and clone to your machine
-- Open the folder 'weather-app' in an IDE ( I use Visual Studio Code ) 
-- Using the Terminal in VS Code or a seperate command interface ( Cmder for example )
    - Enter the following command 'npm install' and enter
    - Enter the following command 'npm start' and enter
-- This should compile and serve to your browser at http://localhost:3000/

## Approach reasoning ##

# Data Api
 A couple of things I noted when reading the api documentation.  It is recommended to use a City Id for the most accurate data call.  There is a paramter for returning metric values which is relevent for the UK.  Also, the documentation mentions not to call the data more than once in a 10 minute period, so I implemented a localStorage key to save the data after the initial call (with expiry time of 15 mins). 

# Handling the 5 day/3 hour data returned
 I decided it would be clearer to group the results by Day/Date as the data returned from the api does not group by date/day by default.

# Using React
 I am using React as this is the approach I use in my current role for SharePoint 365 development, and thought it best to show the skills I have obtained with this over the past year or so. The setup has some differences when using react app (as opposed to SharePoint React web parts) of which I have read up on while performing this exercise.

## Future Improvements and Thoughts ##
-- As mentioned below (in testing section) I would like to get into using unit tests for React
-- I would have preferred to treat the 'Today' and 'Future' Day components separately instead of using conditional props.  Handling and styling would be more elegant.
-- CSS/SCSS is an area I would very much like to improve on, particularly UX and responsive design.
-- There is some good data returned from the data api, would be good to use some of this to show dynamic styling, such as the temperature data for rendering dynamic warm/cold colouring.
-- Fix required for when viewing the Weather after 9pm. The 'Today' section disappears due to the way the data is returned and because I have seperated it in to day components.
-- Possibly implement some kid of 'Search for City' input (maybe think about an autocomplete) for the user to change the weather location.  Api call would have to change to use City name instead of City Id etc.

## TESTING ##
Just to note that I looked into unit testing for React as this is something I have wanted to look into for a while now. Opted for manually testing for now as per below, but I am very keen to learn unit testing in the future using Jest and Ensyme etc.

# Testing that error handling works
-- While still running npm start
-- In the component Index.tsx
    - remove the value for the 'apiUrl' prop to leave an empty string
    - change the props value from 'false' to 'true' for the 'flushLocalStorage' prop
    - save
-- This will cause an error to the api call and show a message to the user
-- The stack error message will be logged in the console
-- Switch the prop values back to default as they were

