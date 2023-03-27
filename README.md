# Fashion

Fashion is a social media platform created for the fashion community to interact with each other. It's for designers, stylist, brands and creatives to promote and share their take on fashion. This platform provides space for all of these creatives to interact with each and possibly collaborate. Users will be able to share their thoughts on the current climates in the fashion industry. They will also be able to post what they are working on, promote their clothing brands and to which users can then save these posts as a potentioal inspiration piece to check for or just due to admiring the content of the post.

![]()

Please find the link to "Fashion" live site [HERE](https://fashion-react.herokuapp.com/)

A DRF_API was created to support all backend functionalities needed for this application to work. You can find all the information regarding DRF-API ![HERE]() to which you'll find all the planning, setup , installationa, deployment and overall information regarding the DRF-API.

#### DEPLOYED BACKEND API [LINK](https://fshn-api.herokuapp.com/)
#### DEPLOYED BACKEND API  [REPOSITORY](https://github.com/AASanusi/fashion)

## Contents
- [User Experience (UX)](#User-Experience-UX)
   - [Aim](#Aim)
   - [Target Audience](#Target-Audience)
   - [User Stories](#User-Stories)
      - [Admin Stories](#Admin-Stories)
      - [User Stories](#User-Stories)
   - [User Goals](#User-Goals)
      - [First Time Users](#First-Time-Users)
      - [Revisiting Users](#Revisiting-Users)

- [Design](#Design)
   - [Typography](#Typography)
   - [Wireframes](#Wireframes)
   - [Entity Relationship Diagram](#Entity-Relationship-Diagram)


- [Features](#Features)
   - [Existing Features](#Existing-Features)
      - [Home](#Home)
      - [Navigation](#Navigation)
      - [Post Detail](#Post-Detail)
      - [Category](#Category)
      - [Footer Links](#Footer-Links)
   - [C.R.U.D](#CRUD)
      - [Create Comment](#Create-Comment)
      - [Read Comment](#Read-Comment)
      - [Edit Comment Page](#Edit-Comment-Page)
      - [Delete Comment Page](#Delete-Comment-Page)
      - [Admin Page](#Admin-Page)
      - [Register Page](#Register-Page)
      - [Login Page](#Login-Page)
      - [Logout Page](#Logout-Page)
   - [Features Left to Implement](#Features-Left-to-Implement)

- [Technologies Used](#Technologies-Used)
   - [Languages Used](#Languages-Used)
   - [Frameworks, Libraries And Programs Used](#Frameworks-Libraries-And-Programs-Used)
      - [Balsamiq](#Balsamiq)
      - [Smartdraw](#Smartdraw)
      - [Git](#Git)   
      - [Gitpod](#Gitpod)
      - [Github](#Github)
      - [Gitpod Python Essentials Template](#Gitpod-Python-Essentials-Template)
      - [Heroku](#Heroku)
      - [PostgreSQL](#PostgreSQL)
      - [ElephantSQL](#ElephantSQL)
      - [Google Fonts](#Google-Fonts)
      - [Favicon](#Favicon)
   - [Installed Packages](#Installed-Packages)

- [Testing](#Testing)
   - [Manual Testing](#Manual-Testing)
   - [Automated Testing](#Automated-Testing)
   - [Validator Testing](#Validator-Testing)
      - [HTML Validator](#HTML-Validator) 
      - [CSS Validator](#CSS-Validator) 
      - [Lighthouse Validator](#Lighthouse-Validator) 
      - [CI Python Linter](#CI-Python-Linter)
   - [Bugs Encountered And Solutions](#Bugs-Encountered-And-Solutions)   
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
The aim of this application is to provide a platform for users to interact with each other through sharing their thougts, posting fashion, save posts that they like, following pages you enjoy, liking and commenting. This allows users to get the full experience of the app and engulf themselves in the fashion community.

### Target Audience
For the fashion community which ranges from high-end brands, underground brands, people who want expand their fashion palette, stylist and artist who would like to collaborate.

### User Stories
To aid with viewing the users stories, you can click links to [Github Issues](https://github.com/AASanusi/fashion/issues). You can also view the [KANBAN board](https://github.com/users/AASanusi/projects/2).
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
- As a first time user, I want to be able to view application without having to register.
- As a first time user, I want to be able to register to the the site.
- As a first time user, I want to be able to view with posts such as viewing, liking and commenting.
- As a first time user, I want to be able to view profile pages.
- As a first time user, I want to be able to follow users.
- As a first time user, I want to be able to create posts.
- As a first time user, I want to be able to share thoughts.
- As a first time user, I want to be able to view thoughts wall.
- As a first time user, I want to be able to save posts.
- As a first time user, I want to be able to view all the saved posts.

#### Revisiting Users
- As a revisiting user, I want to be able to login back into the site.
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
Google Fonts was used for all the fonts on this application.
- Anton font family
- Libre Baskerville font family

### Wireframes
#### Home Wireframe:
![]()
#### Mobile Wireframe:
![]()
#### Profile Wireframe:
![]()

### Database Entity Relationship Diagram
![Database ERD](/src/assets/readme-images/database-erd.png)








