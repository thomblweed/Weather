## Hosting Information ##
-- You can view the app deployed at https://thomblweed.github.io/Weather/
-- The code is pushed to github at https://github.com/thomblweed/Weather/tree/master


## Clone and Run the weather app locally ##
-- Naviagte to https://github.com/thomblweed/Weather/tree/master and clone to your machine
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
 I am using React as this is the approach I use as part of my current role for SharePoint 365 development, and thought it best to show the skills I have obtained with this over the past year or so. The setup has some differences when using react app (as opposed to SharePoint React web parts) of which I have read up on while performing this exercise.

# Dynamic rendering of react components
 One of the things I have been learning about using React is we can pass through a json object to dynamically create the html on the page via react components.  Although we are not doing this in this example, the data returns in the same format with each api call, I wanted to show that this is possible with React if the data returned was dynamic.
 - The React 'App' calls the data and then passes the data through to a 'Weather' component
 - The 'Weather' component can render many 'Day' components
 - A 'Day' component can render many 'List' components
 
# Using TypeScript
 I have been using TypeScript where possible because it is a great way to strongly type variables and functions and also organise 'classes' (interfaces).
 - Example, the 'IWeather' interface I have created to house the properties as described in the api documentation

## Future Improvements and Thoughts ##
-- As mentioned below (in testing section) I would like to get into using unit tests for React
-- I would have preferred to treat the 'Today' and 'Future' Day components separately instead of using conditional props.  Handling and styling would be more elegant.
-- CSS/SCSS is an area I would very much like to improve on, particularly UX and responsive design.
-- There is some good data returned from the data api, would be good to use some of this to show some subtle dynamic styling, such as the temperature data for rendering dynamic warm/cold colours.
-- Fix required for when viewing the Weather after 9pm. The 'Today' section disappears due to the way the data is returned and because I have seperated it in to day components.
-- Possibly implement some kid of 'Search for City' input (maybe think about an autocomplete) for the user to change the weather location.  Api call would have to change to use City Name instead of City Id etc.


## TESTING ##
Just to note that I looked into unit testing for React as this is something I have wanted to look into for a while now. Opted for manually testing for now as per below, but I am very keen to learn unit testing in the future using Jest and Ensyme etc.

# Testing a sync call in progress notification
Testing this way as the data is usually returned so fast it's hard to see the notification.  The notification is in place for any async data delay reasons.
-- While running 'npm start'
-- F12 to open Developer Tools (I use Chrome)
-- In Sources, expand the folders from localhost:3000
    - static/js > [your files location] > src
    - Open App.tsx
-- Put a breakpoint on line 34
-- Refresh the browser
-- On the first catch at the breakpoint, add the state property 'this.state.weatherData' to the watches
    - This should be null at this point as we have not fetched the data
    - Press F8
    - You can see on the second catch that the browser has rendered 'Loading...'
    - Press F8
    - The call should have returned the data and the app should be rendered in place
    - If an error occurs then a message is display to the user as per the next test

# Testing that error handling works
-- While running 'npm start'
-- In the component Index.tsx
    - remove the value for the 'apiUrl' prop to leave an empty string
    - change the props value from 'false' to 'true' for the 'flushLocalStorage' prop
    - save
-- This will cause an error to the api call and show a message to the user
-- The stack error message will be logged in the console
-- Switch the prop values back to default as they were