# tech-blog

When writing about tech, I want a CMS style blog site so that I can publish articles, blog posts, thoughts and opinions and my friends or collegues can respond back with their thoughts. 

## Table of Contents:
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Links](#links)
- [Questions](#questions)

## Acceptance Criteria 
- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option, THEN I am taken to the homepage
- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up, THEN I am prompted to create a username and password
- WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password
- WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation,THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time, THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Technologies Used
- HTML
- CSS
- JavaScript
- sequelize
- dotenv
- bcrypt
- express-session
- express-handlebars
- mysql2  
- deployed using Heroku

## Demo
<img src="./images/homepage.png" alt="Screenshot of Homepage">
<img src="./images/login.png" alt="Screenshot of Log-in/Sign Up page">
<img src="./images/Profile.png" alt="Screenshot of Profile page">
<img src="./images/Post.png" alt="Screenshot of Post page">

## Links
- GitHub Repo: https://github.com/mals1230/tech-blog
- Deployed Site: https://quiet-escarpment-58479.herokuapp.com/

## Questions:
Have questions about this project? Feel free to go to the project's repo and post an issue