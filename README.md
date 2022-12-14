# Sound Space

## Overview

Sound Space is a fictional music streaming platform which enables users to share their music with one another via their own profile. Users can follow each others profiles and engage with their content either by liking, commenting or reposting.

The target audience is wide as it encompasses music fans and artists/producers of any genre of music, essentially meaning anyone with a passion for music. The social media element to it will appeal more to younger demographics, however music fans of any age will find use from the site.

Due to time restraints and limited cloud storage the site does not give users the ability to upload their own audio files to the database, instead tracks are embedded using links from existing websites to represent this.

<img src="src/assets/screenshots/responsive.png">

Live Link: https://soundspace-fe.herokuapp.com/

## Project Goals

The main goal for the project is to build a music sharing platform which allows users to discover new music and interact with other artists and fans. The main features include:

- Sign up/authentication capabitlities
- Functionality to follow/unfollow other users
- A profile page displaying all users tracks, liked & resposted tracks and information about themselves
- A track page allowing users to comment on one anothers tracks
- A home page displaying all tracks on the site
- A feed displaying tracks from users who have been followed by the logged in user
- Easy and clear site navigation
- Functionaility to update profiles, authentication details & tracks

## User Stories

The user stories were split into EPICS so that I could utilise GitHub projects and build the site with an agile approach, splitting these into sprints - see [here](https://github.com/vfg-95/soundspace/projects/1). These were as follows:

### User Authentication

- As a user I can sign up for an account so that I can access all features available on the site
- As a user I can log in to my account so that I can make use of all the features an authetnicated user possesess
- As a user I can log out of my account so that I can prevent other people accessing my account
- As a user I can stay logged in so that my user experience is not affected by having to continuously log back into my account whilst using the site

### User Profiles

- As a user I can view other users profiles so that I can decide whether I like their music/tracks and follow them
- As a logged in user I can follow/unfollow other users so that I decide the users/tracks appearing on my feed
- As a user I can see my own and other users followed/followers stats so that I can gauge fan base/following
- As a logged in user I can customise my profile so that I can keep it up to date with my current information
- As a logged in user I can update my username and/or password so that I can securely manage my account

### User Tracks

- As a user I can view individual tracks on their own page so that I can access all the feature available for a track
- As a logged in user I can edit/delete my posted tracks so that I have control of the tracks which I have posted
- As a logged in user I can post my own tracks so that I can share my music
- As a logged in user I can view, add, & delete comments via the individual track page so that I can communicate with other users

### Feed

- As a logged in user I can like or repost other users tracks from my feed so that I can save the track for later/support the artist
- As a user I can see the relevant tracks on my feed with newest tracks first so that the tracks I see are the most up to date
- As a user I can see all the tracks posted by other users I'm following on my feed so that I can follow their new music

### Site Navigation

- As a user I can search the site so that I can find the specific content I am looking for
- As a user I can intuitively navigate the site so that I can access all content and features

## Design

The site was designed with a desktop first approach, as it's main intended use it to be via desktop browsers.

### Colour Scheme

The main colour scheme for the website is based on white & gray to keep things clean and simple. A teal colour was then used to accentuate other features/elements such as hovering over links, or the background colour for forms.

<img src="src/assets/screenshots/colourscheme.png">

## Fonts

For the site I made use of just one font, Titillium Web, which was taken from google fonts. I felt this matched the simplistic clean look I was aiming for.

## Wireframes

The wireframes for the site were made from https://wireframe.cc/ and are attahced below:

- Desktop
    - [Homepage](src/assets/wireframes/desktopfeed.png)
    - [Blog post](src/assets/wireframes/desktopprofile.png)
    - [Mix page](src/assets/wireframes/desktoptrack.png)

- Tablet
    - [Homepage](src/assets/wireframes/tabletfeed.png)
    - [Blog post](src/assets/wireframes/tabletprofile.png)
    - [Mix page](src/assets/wireframes/tablettrack.png)

- Mobile
    - [Homepage](src/assets/wireframes/mobilefeed.png)
    - [Blog post](src/assets/wireframes/mobileprofile.png)
    - [Mix page](src/assets/wireframes/mobiletrack.png)

## Features & User Story Testing

### Navigation Bar

- Displays the logo, which can be clicked to get back to the home page
- Displays naivgation links depending on users authentication status

(Meets authentication user story 1 - 3, tracks 3 & navigation 2)

<img src="src/assets/nav/navlogin.png" width=1000>
<img src="src/assets/nav/navlogout.png" width=1000>

### Search

- Filters search results and displays relevant tracks to the user

(Meets navigation user story 1)

<img src="src/assets/feed/search.png" width=600>

### Profile Suggest

- Displays other users on the home page/feed

(Meets profile user story 1 & 2)

<img src="src/assets/profile/profilesuggest.png" width=400>

### User Profile

- Displays user image, bio, stats, liked tracks & reposts

(Meets profile user story 1 & 3, feed 1)

<img src="src/assets/profile/userprofile.png" width=600>

### Profile Edit

- Allows users to update their profile and also their log in details

(Meets profile user story 4 & 5)

<img src="src/assets/profile/profileedit.png" width=600>
<img src="src/assets/profile/profileeditform.png" width=600>
<img src="src/assets/profile/passwordeditform.png" width=600>
<img src="src/assets/profile/usernameeditform.png" width=600>

### Track Page

- Allows users to comment on one anothers tracks and interact with one another
- Allows users to update/delete their own tracks or like/repost other users tracks

(Meets tracks user story 1,2 & 4)

<img src="src/assets/track/trackpage.png" width=800>

### Track Edit Form

- Allows users to update/delete their own tracks

(Meets tracks user story 2)

<img src="src/assets/track/trackeditform.png" width=800>


### Feed

- Allows users to see posts by all the users they are following and interact with them

(Meets feed users story 1-3)

<img src="src/assets/feed/feed.png" width=800>

## Database / API

The API for the project was built with Django REST Framework, the repository for that is [here](https://github.com/vfg-95/ss_api).

The [readme](https://github.com/vfg-95/ss_api/blob/main/README.md) file contains all the information on the database, testing & deployment.

## Front End Development

Front end developers are responsible for handling the user-facing side of an applicaiton. Front end developers will work as part of a development team with both UI/UX designers and the team handling the back end of an application. Their main objectives are to provide user friendly applications which meet performance, accessability & responsivity standards. Front end developers will still typically need a good understanding of all aspects of the project development in order to provide the best possible end product.

React enables front end developers to provide great user experience. One of they key features of react is the reuse of components across code. For example, in this project I make use of a loading component, which can then be imported into any other page and implemented. The same loading compent is displayed across the site whenever data is being retrieved from the API - this can be when tracks are loading in the feed/home page, when suggested profiles are loading, or while liked tracks/reposts are loading on the profile page. Another key feature of react is the virtual DOM. This allows components to re-render accordingly without the need to refresh the page - for example on this site when a user follows another user the follow button will render to say unfollow.

In the project I also made use of React Bootstrap. This front end end library again allows you to quickly and easily implement components like a repsonsive Navbar, or forms. Combined with the features of React these allow you to build cohesive rich user interfaces, which are hallmarks of good front end development and were why they were a good choice/combination for the project.

## Programs, Libraries, Frameworks and Dependencies

- [Gitpod](https://gitpod.io)
  - Gitpod to host a virtual workspace.
- [Git](https://git-scm.com/)
  - Git for version control by utilizing the Gitpod terminal to commit and push to GitHub and Heroku.
- [GitHub](https://github.com/)
  - GitHub to store the project code after being pushed from Git.
- [React 17](https://17.reactjs.org/)
  - React Router for dynamic routing.
- [Axios](https://axios-http.com/docs/intro)
  - Axios for promise-based HTTP.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
  - React Router for dynamic routing.
- [JWT](https://jwt.io/)
  - JWT for tokens and timestamping tokens.
- [React-Bootstrap 1.6](https://react-bootstrap-v4.netlify.app/)
  - React-Bootstrap for styling and responsiveness.
- [Heroku](https://id.heroku.com/login)
  - Heroku to host both the frontend and backends applications and connect them.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts for importing the Roboto Condensed font.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome for icons.

## Testing

I tested the site using W3C Markup Validator, W3C CSS Validator Services and ESLint.

- [W3C Markup Validator](https://validator.w3.org/) Passed with no errors
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) Passed with no errors
- [ESLint](https://eslint.org/play/) I ran all my Javascript files through here which showed no relevant errors. I had installed ESLint into the project however due to time constraints I did not have time to figure out configuration and test it this way.

Lighthouse testing displayed these results:

<img src="src/assets/screenshots/lighthouse.png" width=600 >

### Manual Testing

Below is a screenshot of the manual testing process undertaken on the site:

<img src="src/assets/screenshots/manualtesting.png">

### Bugs

- When trying to log into the site on Safari, where it instead refreshes the page and does not allow you to log in. This is rectified by turning off 'Prevent cross site tracking' in the privacy settings of the browser.

The following bugs I am aware of but due to time constraints I did not have time to debug these:

- In the comment section of track pages the user profile image displays all users with the current user's profile image
- The track upload form accepts images and submits sucessfully, however once submitted the value in the database is null

## Future Development

There is plenty of scope for future development with the site, I would like to implement:

- Allow users to upload actual audio files to the site and host them
- Update the like & repost sections with small renders of the uploaded audio
- Allow users to update their comments
- Add user messaging so users can direct message one another
- Allow users to add a header image for the background of their profile
- Improve mobile funcitonailty so all the same features are accessable as on desktop

## Development

1.  Clone the template [repository](https://github.com/TimSchulz1991/project5-8gag-react).
2.  Open your IDE and connect to your repo, then enter this command in the terminal:

        npm install

- Ensure package.json dependencies are as follows:

      "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^0.27.2",
        "bootstrap": "^4.6.0",
        "jwt-decode": "^3.1.2",
        "react": "^17.0.2",
        "react-bootstrap": "^1.6.3",
        "react-dom": "^17.0.2",
        "react-infinite-scroll-component": "^6.1.0",
        "react-router-dom": "^5.3.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },

3.  Add url for the deployed DRF API in the axiosDefaults.js file (as baseURL).
3.  Git add, commit and push all changes to your repo.
4.  Create or log in to an account on Heroku.
5.  Create a new app on Heroku.
6.  Link your GitHub repository in the deploy tab of Heroku.
7.  Enable automatic deployments or do this manually.

## Credits

A lot of the code/functionality for the site was based upon the Code Institute Moments walkthrough [project]([GitHub](https://github.com/Code-Institute-Solutions/moments)) as there were plenty of features which I wanted to include in my own site.

The general idea for the site was also based upon [SoundCloud](https://soundcloud.com/) and this is where I took a lot of inspiration for the site.

I made imitation profiles for my site based upon real SoundCloud accounts, as well as the media used for them. Credit for those below:

- [Oddity-Radio](https://soundcloud.com/oddityradio)
- [Telephones](https://soundcloud.com/telephones)












