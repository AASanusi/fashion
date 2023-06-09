# Fashion

Fashion is a social media platform created for the fashion community to interact with each other. It's for designers, stylist, brands and creatives to promote and share their thoughts on fashion. This platform provides a space for all of these users to interact and collaborate. Users will be able to share their thoughts, post what they are working on, promote their clothing brands, save their favourite posts and many more.

![Am I Responsive image](/src/assets/readme-images/responsiveness.png)

Please find the link to "Fashion" live site [HERE](https://fashion-react.herokuapp.com/)

A DRF_API was created to support all backend functionalities needed for this application to work. You can find all the information regarding DRF-API [HERE](https://github.com/AASanusi/fshn-api) to which you'll find all the planning, setup , installation and deployment

#### DEPLOYED BACKEND API [LINK](https://fshn-api.herokuapp.com/)
#### DEPLOYED BACKEND API  [REPOSITORY](https://github.com/AASanusi/fshn-api)

## Contents
- [User Experience (UX)](#User-Experience-UX)
   - [Aim](#Aim)
   - [Target Audience](#Target-Audience)
   - [User Stories](#User-Stories)
   - [User Goals](#User-Goals)
      - [First Time Users](#First-Time-Users)
      - [Revisiting Users](#Revisiting-Users)

- [Design](#Design)
   - [Typography](#Typography)
   - [Wireframes](#Wireframes)
   - [Database Entity Relationship Diagram](#Database-Entity-Relationship-Diagram)
   - [Colour Palette](#Colour-Palette)


- [Features](#Features)
   - [Existing Features](#Existing-Features)
      - [Home page](#Home-page)
      - [Navigation bar](#Navigation-bar)
      - [Thought Wall](#Thought-Wall)
      - [Saved Page](#Saved-Page)
      - [Sign in page](#Sign-in-page)
      - [Sign up page](#Sign-up-page)
      - [Profile page](#Profile-page) 
   - [C.R.U.D](#CRUD)
      - [Create Thought](#Create-Thought)
      - [Read Thought](#Read-Thought)
      - [Edit Thought](#Edit-Thought)
      - [Delete Thought](#Delete-Thought)
   - [Features Left to Implement](#Features-Left-to-Implement)

- [Technologies Used](#Technologies-Used)
   - [Languages Used](#Languages-Used)
   - [Frameworks, Libraries And Programs Used](#Frameworks-Libraries-And-Programs-Used)
      - [Font Awesome](#Font-Awesome)
      - [Google Fonts](#Google-Fonts)
      - [Balsamiq](#Balsamiq)
      - [Lucid Chart](#Lucid-Chart)
      - [Git](#Git)   
      - [Gitpod](#Gitpod)
      - [Github](#Github)
      - [Heroku](#Heroku)
      - [PostgreSQL](#PostgreSQL)
      - [ElephantSQL](#ElephantSQL)
      - [Favicon](#Favicon)
      - [ReactJS](#ReactJS)
      - [React-Bootstrap](#React-Bootstrap)
   - [Components](#Components)

- [Testing](#Testing)
   - [Manual Testing](#Manual-Testing)
   - [Validator Testing](#Validator-Testing)
      - [CSS Validator](#CSS-Validator)
      - [ESlint Testing](#ESlint-Testing)
      - [Lighthouse Performance](#Lighthouse-Performance)  
   - [Unfixed Bugs](#Unfixed-Bugs)

- [Deployment](#Deployment)
   - [Step 1](#Step-1)
   - [Step 2](#Step-2)
   - [Step 3](#Step-3)

- [Credits](#Credits)
   - [Content](#Content)
   - [Media](#Media)
   - [Acknowledgments](#Acknowledgments)

## User Experience (UX)

### Aim
The aim of this application is to provide a platform for users to interact with each other through sharing their thoughts, posting fashion, save posts that they like, following pages they enjoy, liking and commenting. This allows users to get the full experience of the application and be part of the fashion community.

### Target Audience
Diverse audience that ranges from high-end brands, underground brands, people who want to expand their fashion palette, stylist and artist who would like to collaborate.

### User Stories
To help with viewing the users stories, click the link to the [Github Issues](https://github.com/AASanusi/fashion/issues) and the [KANBAN board](https://github.com/users/AASanusi/projects/2).
#### Epic 1: Navigation
1. As a user I can view user's avatars so that I can easily identify users of the application.
2. As a user I can view a navbar from every page so that I can navigate easily between pages.
3. As a logged out user I can see sign in and sign up options so that I can sign in/sign up.
4. As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.
#### Epic 2: Authentications
5. As a user I can create a new account so that I can access all the features for signed up users.
6. As a user I can sign in to the app so that I can access functionality for logged in users.
7. As a user I can tell if I am logged in or not so that I can log in if needed.
8. As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.
#### Epic 3: Posts
9. As a logged in user I can create posts so that I can share my images with the world!
10. As a user I can view the details of a single post so that I can learn more about it.
11. As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content.
12. As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
13. As a user I can keep scrolling through the page and scrolls are automatically loaded with no pagination.
14. As a user I can view the posts page so that I can read the comments about the post.
15. As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created.
16. As a logged in user I can add comments to a post so that I can share my thoughts about the post.
17. As a user I can see how long ago a comment was made so that I know which comments are new.
18. As a user I can read comments on posts so that I can read other users thoughts.
19. As an owner of a comment I can delete my comment so that I can remove comments I no longer want on a post.
20. As an owner of a comment I can edit my comment so that I can fix or update existing comments on posts.
21. As a logged in user I can like a post so that I can show appreciation for the post.
#### Epic 4: Profiles
22. As a user I can view other users profiles so that I can see their posts and learn more about them.
23. As a user I can see a list of people to follow based on being the most followed profiles so that I can see which profiles are popular.
24. As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them.
25. As a logged in user I can follow and unfollow other users so that I can follow profiles I like or unfollow users I no longer want to follow.
26. As a logged in user I can edit my profile so that I can change my profile picture and bio.
27. As a logged in user I can update my username and password so that I can change my display name and keep my profile secure.
#### Epic 5: Saves
28. As a logged in user I can save a post so that I can bookmark the posts that interest me.
29. As a logged in user I can unsave a post I longer like.
30. As a logged in user I can view the posts I saved so that I can find the posts I enjoy the most.
#### Epic 6: Messages
31. As a logged in user I can message other users so that I can chat with them.
32. As a logged in user I can view the message so that I can see what I said.
33. As a logged in user I can edit and delete my messages so that I can update and remove my messages.
#### Epic 7: Thoughts
34. As a logged in user, I can share my thoughts and mood with everyone on the app.
35. As a logged in user, I can write my location and share it with everyone on the app.

### User Goals
#### First Time Users
- As a first time user, I want to be able to access the site.
- As a first time user, I want to be able to view site without having to register.
- As a first time user, I want to be able to register to the the site.
- As a first time user, I want to be able to interact with posts such as viewing, liking and commenting.
- As a first time user, I want to be able to view profile pages.
- As a first time user, I want to be able to follow users.
- As a first time user, I want to be able to create posts.
- As a first time user, I want to be able to share thoughts.
- As a first time user, I want to be able to view thoughts wall.
- As a first time user, I want to be able to save posts.
- As a first time user, I want to be able to view all the saved posts.

#### Revisiting Users
- As a revisiting user, I want to be able to log back into the site.
- As a revisiting user, I want to be able to view more posts.
- As a revisiting user, I want to be able to unsave posts.
- As a revisiting user, I want to be able to edit posts.
- As a revisiting user, I want to be able to delete posts.
- As a revisiting user, I want to be able to edit thoughts.
- As a revisiting user, I want to be able to delete thoughts.
- As a revisiting user, I want to be able to change my profile avatar.
- As a revisiting user, I want to be able to unfollow pages.

## Design

### Typography
The following fonts were taken from [Google Fonts](https://fonts.google.com/) and used throughout the site:
- Anton font family
- Libre Baskerville font family

### Wireframes
#### Home Wireframe:
![Home Wireframe image](/src/assets/readme-images/home-wireframe.png)
#### Mobile Wireframe:
![Mobile Wireframe image](/src/assets/readme-images/mobile-wireframe.png)
#### Thought Wireframe:
![Thought Wireframe image](/src/assets/readme-images/thought-wireframe.png)
#### Profile Wireframe:
![Profile Wireframe image](/src/assets/readme-images/profile-wireframe.png)

### Database Entity Relationship Diagram:
![Database ERD image](/src/assets/readme-images/database-erd.png)

### Colour Palette:
![Colour Palette image](/src/assets/readme-images/colour-palette.png)

## Features
### Existing Features
#### Home page
- The home page showcases what the application is about and what you can do and view
- Both Unregisted and registered users can view the home
- Only regsitered users can save, like and comment
- ##### Home Page desktop
![Home Page desktop image](src/assets/readme-images/home-page.png)
- ##### Home Page mobile
![Home Page mobile image](src/assets/readme-images/home-page-mobile.png)
#### Navigation bar
- The navigation bar consists of all the icons with links to all the pages
- The pages available to users in the navigation depends if they are signed in or not (see below images)
- ##### Navigation bar when user sign in
![Sign in Navigation bar image](src/assets/readme-images/sign-in-nav.png)
- ##### Navigation bar when user sign out
![Sign out Navigation bar image](src/assets/readme-images/sign-out-nav.png)
#### Thoughts Wall
- Thoughts wall is a page that consists of all users thoughts
- This is for registered users to share their burning thoughts and have it on a wall for everyone to see
- On the wall, users can let us know their random locations, what they are thinking and what mood they are in
![Thought Wall image](src/assets/readme-images/thought-wall.png)
#### Saved Page
- This page consists of all the users favourite posts
- Only registered users can save and view this page
![Saved Page image](src/assets/readme-images/saved-page.png)
#### Sign in page
- Users can sign in once registered
![Sign in page image](src/assets/readme-images/sign-in-page.png)
#### Sign up page
- An easy sign up form to register users
![Sign up page image](src/assets/readme-images/sign-up-page.png)
#### Profile page
- The profile page consists of the user avatar and name
- It consists of the users posts, thoughts, following and followers statistics
- It also has the posts and the thoughts wall the users have posted and shared
![Profile page image](src/assets/readme-images/profile-page.png)


### C.R.U.D:
Few examples of the CRUD functionality:
#### Create Thought
- Registered users are capable of creating and sharing a thought
![Create Thought image](src/assets/readme-images/create-thought.png)
#### Read Thought
- Once thought has been shared, users can then view and read it
![Read Thought image](src/assets/readme-images/read-thought.png)
#### Edit Thought
- Users are then capable of updating and editing (content characters are limited) 
![Update Thought image](src/assets/readme-images/update-thought.png)
#### Delete Thought
- Users can then delete the thought if they no longer what it on their wall
![Delete Thought image](src/assets/readme-images/delete-thought.png)

### Features Left to Implement
Due to time and complexity, I wasn't able to implement certain features. Future implementations can be observed below:
- To implement notifications so that users can see when other users posts
- To implement direct messaging for users to communicate
- Increase the word count for posting thoughts
- For users to be able to repost other users posts or thoughts
- To create a function that syncs the users location when providing their location

## Technologies Used
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
- [Django](https://www.djangoproject.com/)

### Frameworks, Libraries And Programs Used 
1. #### [Font Awesome](https://fontawesome.com/)
   - Font awesome icons were used to create the NavBar pages links.

2. #### [Google Fonts](https://fonts.google.com/)
   - Used for all texts created on this application.

3. #### [Balsamiq](https://balsamiq.com/)
   - Balsamiq was used to create the basic frameworks of the project to which helped to coding the website.

4. #### [Lucid Chart](https://lucid.app/)
   - Used to create Database ERD.

5. #### [Git:](https://git-scm.com/)
   - Git was used in the Gitpod terminal to add, commit and push code to Github.

6. #### [Gitpod:](https://www.gitpod.io/)
   - Gitpod is the Integrated Developer Environment used to code this project.

7. #### [Github:](https://github.com/)
   - Github was used to hold and keep the pushed codes by Git and store projects

8. #### [Heroku](https://id.heroku.com/login)
   - Heroku was used to deploy the project.

9. #### [PostgreSQL](https://www.postgresql.org/)
   - This was used for database.

10. #### [ElephantSQL](https://www.elephantsql.com/)
   - This was used as the new database.

12. #### [Favicon](https://www.favicon.cc/)
   - This was used to create an icon for the site tab.

13. #### [ReactJS](https://react.dev/)
    - This was used to create the components required to build a full front-end application.

14. #### [React-Bootstrap](https://react-bootstrap.github.io/)
    - Used to style the layout and design of the application.

### Components
- Numerous components were created and reused throughout the development of the project.
#### Assets.js
- This provides a loading spinner throughout the site to which provides better UX.
#### Avatar.js
- User avatar used across the site to showcase users as they interact with different pages.
#### MoreDropdown.js
- Allows users to be able to edit and delete their thoughts, posts and many more.
#### NavBar.js
- This is useful as it's observed across all pages and changes depending if user is logged in/out.
#### NotFound.js
- Uses Asset component and provide message to users when searching for pages that do not exists.
#### utils.js
- Provides all components with the functionality to use infinite scroll.
#### useRedirect.js
- This redirects users to another page if they aren't authorised for that page.
#### CurrentUserContext.js
- This provides the functionality availability for users based on the logged in status.
#### ProfileDataContext.js
- Provides the follow and unfollow functionality for users across the page.
#### axiosDefault.js
- To allow smooth communication with the backend API.

## Testing

### Manual Testing
- This application has been manually tested using the C.R.U.D functionality for:
   - Thoughts:
      - As seen above in the CRUD example, user can create, read, update and delete thoughts.
   - Saves:
      - Users can save and unsave posts.
   - Posts:
      - Users can create, read, update and delete posts.
   - Comments:
      - Users can create, read, update and delete comments.
   - Likes:
      - Users can like and unlike posts.
   - Follow:
      - Users can follow and unfollow users.
   - Profile:
      - User can update their profile information.
        - Updating profile
      ![Profile updating image](src/assets/readme-images/change-profile.png)
        - Profile updated
      ![Profile updated image](src/assets/readme-images/profile-changed.png)
   - All the nav links were manually tested and they all navigated to the correct pages with no issues.
   - Logging out redirects users to home page.
   - Unregistered users will be redirected when trying to edit content that isn't their own.
   - Registered users can't save their own content.
   - Thoughts wall is just a wall with thoughts and no other functionality as it was intented to be shared for people to only see and not judge.
   - Existing users can log in and out with ease.
   - Unregistered users can easily register by creating a profile.
   - Site is responsive as it should be.

### Validator Testing
#### [CSS Validator](https://jigsaw.w3.org/css-validator/)
   - CSS files passed through [Jigsaw Validator](https://jigsaw.w3.org/css-validator/) with no errors found. 
![CSS testing image](src/assets/readme-images/css-testing.png)
### ESlint Testing
- JSX code was passed through [ESLint](https://eslint.org/) to carry out the tests. There were no ternminal errors or warning observed when testing was done. The setup for this was carried by following the steps on [ESLint](https://eslint.org/docs/latest/use/getting-started):
1. Install npm via this command
```
npm init @eslint/config
```
2. The below file will be created once installed:
```
eslintrc.json
```
3. The following code was then added to check for errors
```
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": ["react"],
	"rules": {
		"react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }],
		"react/prop-types": [0, { "ignore": ["children"] }],
		"react/no-children-prop": [
			0,
			{
				"allowFunctions": true
			}
		]
	}
}
```
- There were no errors found. There was was deployment issues which were fixed by reinstalling "npm" again.

- JSX code was also passed through an online [ESLint](https://eslint.org/play/) validator for extra checks. Below shows an example of no errors observed.
![Thought wall eslint testing online image](/src/assets/readme-images/thought-wall-eslint.png)
### Lighthouse Performance
- Accessibility of the page is excellent and the slight dip in performance is due to the images that were loaded on the page.
![Lighthouse performance image](/src/assets//readme-images/lighthouse-performance.png)
### Unfixed Bugs
- All bugs were fixed before submitting this project.

## Deployment
### Step 1:
#### Prepare and Install frameworks/packages
- Create Github repository and launch Gitpod workspace, install ReactJS
```
npx create-react-app . --use-npm
```
- Load up the application in the browser
```
npm start
```
- Install packages below via npm install:
```
react-bootstrap@1.6.3 bootstrap@4.6.0
react-router-dom@5.3.0
axios
react-infinite-scroll-component
msw --save-dev
jwt-decode
```
- Git add, commit and push all the changes to Github.
- Log in or Sign up to [Heroku](https://www.heroku.com/).
- On dashboard, click "Create New App" or click the "New" dropdown menu on the top right of the page to access "Create New App"
- On the "Create New App" page, name your app (needs to be a unique name), choose a region and click the "Create App" button.
- Scroll back up and locate the "Deploy" tab and select to access the page.
- Once on the "Deploy" page, find "Deployment method" section, select "Github" and click the "Connect to Github" button.
- On "Connect to Github" section, search for your Github repository name you want to deploy by using the empty input field provided and click "Search" to search for the repository name.
- After clicking "Search", repository name should appear and then click "Connect" button beside it. Now everytime you push to Github, you will be able to deploy on Heroku.
- Scroll down, to "Automatic deploys" and "Manual deploy" section. You can deploy via these two options.
- You can set up "Automatic deploys" by clicking on "Enable Automatic Deploys"
- To deploy manually, click the "Deploy Branch" button.
- Finally, you'll see "Your app was successfully deployed" pop up message with a "View" button to access the deployed application.

### Step 2:
#### Connecting API & React
- To connect API to React, on the DRF-API under the setting tab reveal config Vars and add the following:
```
Key: CLIENT_ORIGIN | Value: https://react-app-name.herokuapp.com
Key: CLIENT_ORIGIN_DEV | Value: https://gitpod-browser-link.ws-eu92.gitpod.io
```
- Install the Axios package and create file "axiosDefaults.js"

### Step 3:
####  Deployment to Heroku
- Make sure the below is in your package.json and if not, add the below to the scripts section:
```
"heroku-prebuild": "npm install -g serve",
```
- Create a Procfile and insert the below in it:
```
web: serve -s build
```
- Once again, git add, commit and push all the changes to Github.
- Log in or Sign up to [Heroku](https://www.heroku.com/).
- Scroll back up and locate the "Deploy" tab and select to access the page.
- Once on the "Deploy" page, find "Deployment method" section, select "Github" and click the "Connect to Github" button.
- On "Connect to Github" section, search for your Github repository name you want to deploy by using the empty input field provided and click "Search" to search for the repository name.
- After clicking "Search", repository name should appear and then click "Connect" button beside it. Now everytime you push to Github, you will be able to deploy on Heroku.
- Scroll down, to "Automatic deploys" and "Manual deploy" section. You can deploy via these two options.
- You can set up "Automatic deploys" by clicking on "Enable Automatic Deploys"
- To deploy manually, click the "Deploy Branch" button.
- Finally, you'll see "Your app was successfully deployed" pop up message with a "View" button to access the deployed application.

## Credits
### Content
- The [Code Institue](https://codeinstitute.net/) walkthrough video was used to help form the basic parts of the projects.
- [Code Institue](https://codeinstitute.net/) walkthrough video was used to install all the packages and libraries required for the project.
- [Stack Overflow](https://stackoverflow.com/questions/43527045/react-bootstrap-tooltip-throws-error-react-children-only-expected-to-receive-a) aided with sorting out the overlay trigger function.
- [AZMIND](https://azmind.com/bootstrap-align-center/) helped to align my forms correctly.
- [DigitalOcean](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react) aided with providing more clarification of the relationship between API and React.
### Media
- All images taken from google.
### Acknowledgments
- #### Tutor Support Team
- Thanks to Joshua for helping me sort out the structure issues for my posts and thoughts on the profile page.
- Thanks to Sean for providing some help with the overlay trigger functionality for the NavBar icons.
- Thanks to Oisin for aiding me with fixing all posts to be for specific to owner's profile.
- Thanks to Ed for helping me sort the statistics for my thoughts count and sorting it out on my API.
- Thanks to Gemma for providing help with my thought form when it's updated.
- #### Fellow classmates/aluminis on Slack
- Thanks to Tony for providing me with help with the requirement.txt file which caused deployment issues.
- Thanks to Lauren-Nicole for helping me to optimise my thoughts form.
- Thanks Tom for providing help with the MoreDroDown function and showing me how to setup eslint properly.
- #### Mentor
- Thanks to my Mentor for providing me with resources to help me with this project.
- Thanks to my Mentor for sharing knowledge and experience which aided me in building this project.
- Thanks to my mentor for providing constructive criticisms on my project to help me improve it.










