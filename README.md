# Emme Coding Jr Challenge

## Get started
1. Clone project
2. cd into the project
3. `yarn install`
4. `yarn start`

## What is expected?
1. Have a PR online before or at the agreed on time.
2. Document in the dedicated section below in this file your thoughts and reasoning for your solution. Feel free to add comments to your code to explain there as well.
3. You implement 2 pages: Movies and Movie (see UI requirements below).
4. It should not take you more than 4h to finish this challenge.
5. The UI should look clean but does not need to be super pretty.
6. Pick one (or more if you want) optional Enhancement to show off your strength
7. If you have questions, please feel free to reach out to me.
8. I will review your code and give you some feedback, which I expect to result in a dialog and potential improvements.
9. Expected total time: 4h

## UI requirements Movies
1. Fetch the needed data from /helpers/db
2. Show a list of all movie titles.
3. When clicking on a row, redirect the user to the page of that movie.

## UI requirements Movie
1. Fetch the needed data from /helpers/db
2. Render the image who's url is found in the data.
3. Show all the rest of the data on this page.
4. Have a back button

## Enhancements (optional)

#### 1) Add a header and footer to the project.
    Ideas:
     - The header should only be shown when the user is logged in.
     - The header shows the current user's email.
     - The header has an option to log out.
     - The footer fixed on the bottom of the window.
     - The header shows the back button if the user is on the Movie page

#### 2) Show off your testing skills
    Ideas:
     - Add unit tests to all helpers
     - Add component tests if you have created any
     - Add [Nightwatch.js](https://nightwatchjs.org/) or a similar tool and do some feature testing
     - Create a test plan for manual testing

#### 3) Show off your design and CSS skills and make (all?) the pages pretty
    Ideas:
     - Style some or all of the files in the /pages folder
     - Add styled components
     - Break out reusable components and collect them in a components folder, like styled text, inputs, buttons, alerts,...
     - If you actually used Figma or a similar tool to design, add a link ot screenshots.
     - Make the Home page more welcoming.
     - Add [Storybook](https://storybook.js.org/) and show reusable components there

#### 4) Show off your data handling skills
    Ideas:
     - Add a Redux store and selectors
     - Add store driven error handling and loading
     - Add additional CRUD calls to /helpers/db
     - Make additions to the UI to show the calls in action
        (ATTENTION: Do NOT delete or alter data that was not created by yourself!)

#### 5) Any other ideas? Just go for it!
    Ideas:
     - Add packages you like to work with
     - Thoughts on how to structure the project better
     - Found and fixed a bug
     - ...


----------

## Thoughts and decisions while developing:

    Use this space to document your thought process. Reserve for this part at least 30 mins!

### How did you approach this challenge?

#### I approached the challenge with excitement. I knew I would want to add a Redux store as my first enhancement, and I knew I also wanted to moderately style the pages. I knew I had a limited amount of time, and I wanted the small site to look presentable, be functionable, and user-friendly.

### What did you find challenging?

#### For me, a challenge is always trying to figure out the style I want to go towards. I love bright, bold colors, but I find that it is more generally inviting to go with warmer tones. 

### Did you get stuck?

#### Not for long. The below image issue confused me for a moment until I found the solution.

### Why did you do what you did?

#### I chose to use Redux because I enjoy having a store that holds all of my state. I like to separate my API calls and data gathering from the main components for organizational sake, and a Redux store offers that naturally. I decided to style and add the header because I enjoy the process of learning how all the different components can work best together. I think the look of a site is very important to how well the user can interact with it.
   
### What did you learn or found interesting?

#### I learned what it is like to work within the established code. This is very familiar to me through App Academy projects, but those involve a lot more direct instruction on how to change code. With this, I felt very much like I was searching through and deciding the best way to place my code in.

### Did you find a bug? How did you fix it?

#### The images were not showing up. For some reason the links are not working properly. I figured out that if you go to the link and select the "zoomed" version of the image, that URL will work, so I created an object that stores the working URLs according to their movie ID. This way, I could have the image properly render on the page.

### At the end of the challenge, would you have done something different, if you could do it over?

#### If I could do it over, I would want to incorporate tests. I have not previoulsy worked with Jest before, so it would have been a longer task to take on, but if I could go back, I would definitely write tests for the helpers/pages/components.
