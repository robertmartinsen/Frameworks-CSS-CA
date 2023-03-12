# Social-media-platform-CA

![image](/readme-assets/readme-header.png)

## Description

This is a repositary for CSS-Frameworks-CA and Javascript-2-CA for noroff. This was essentialy a repositary just for the css-frameworks CA, but I decided to use the same repositary as it matched well within the javascript 2 CA requirements.

# CSS-Frameworks-CA

## Built with

- [HTML]
- [SASS]
- [BOOTSTRAP]

## Description for CSS-Frameworks-CA for Noroff

Goal

"To apply knowledge of Bootstrap and SASS to build a responsive front end for a social media application."

Brief

"You are tasked with creating 3 pages in HTML using Bootstrap and SASS:

- Authentication page (/index.html)
- Feed Page (/feed/index.html)
- Profile page (/profile/index.html)"

Duration for this CA: 17.01.2023 - 29.01.2023.

### Homepage

For the project I decided to create a forum/instagram type of webpage using just bootstrap and sass.

When users land the homepage I wanted them to see the form where they can create a post and under are example posts of what they can expect to see when they create a user.

![image](/readme-assets/readme-homepage.png)

### Profile

For the profile page you can see a container which includes the username, bio and a profile picture. On the user profile you will see a a form where the user can create a post, a list of who the user is following and also the user's posts.

![image](/readme-assets/readme-profile.png)

### Login

For the login page I created a simple form where users can input their email and password to login. User registration page is also linked to the "Sign up here" button, which takes them to the registration form. When user is logged in they get taken to the homepage wehre they will see an array of posts created by users and also the profile page.

![image](/readme-assets/readme-login.png)

## Conclusion

This was my first project using Bootstrap and SASS. It was definently easier to create a webpage utilizing the frameworks to make the page a bit cleaner. I could've probably made a better deign and added more color to the project, but did my best with the time I had for this assignment.

# Javascript-2-CA

## Built with

- [HTML]
- [JAVASCRIPT]
- [BOOTSTRAP]

## Description for Javascript-2-CA for Noroff

Goal

"To apply knowledge of JavaScript techniques to implement the front-end functionality for a social media application."


Brief
"You have been tasked with producing a new JavaScript front-end client for an existing social media platform. The client application must be attractive and responsive, but you have an otherwise blank slate in terms of theme design language."

"Using the provided API and API documentation, create a functioning user interface that allows for viewing, posting, editing and deleting social media content."

"Social API routes require authorisation via JWT (JSON Web Tokens). You will need to register an account and login to access your token."

"To complete the required features, you will also need to make use of GET, POST, PUT, and DELETE HTTP methods."

"Using localStorage is highly recommended, especially for storing JWT tokens."

"A finished project fulfils the requirements below with an easy to use and error-free user interface."

Required features
The following user stories are required for a passing submission:

User with @noroff.no or @stud.noroff.no email can register profile
Registered user can login
- User can view a post content feed
- User can filter the post content feed
- User can search the post content feed
- User can view a post content item by ID
- User can create a post content item
- User can update a post content item
- User can delete a post content item

Additional features
The following user stories are optional:

- User can create a comment on a post
- User can edit profile media
- User can follow/unfollow a profile
- User can react to a post content item


# Login/register page

First I made a javascript file (data.js) for the urls and the API POST requests for user registration and login

For a user to register a user I added event listener for users to input their details on the form and send their data to the API. I also added validations like users with @noroff.no or @stud.noroff.no email, and password length is minimum 8 characters. I also added "trim()" to the values so any white spaces the user inputs will be removed. When user has successfully registered their user they get redirected back to the login page.

For the login page is the same proccess as the registration, but when the user has entered in the right data (respons status = 200) they get redirected to the homepage. And a JWT token gets generated and set to the local storage.


# Post content feed

For the users to view the content feed I imported the API url needed to fetch the data in the main.js file. To fetch the posts, the JWT token was needed. I fetched the posts that contained all title, body and media as I thoguht it would match the theme of the webpage. To display the posts in the js file I created a div to hold the posts and also had used "innerHTML". 

I wouldve wished to use "getElementByID" to get the divs in the html file instead of having html in the js file. I had plans to change this, but there were 2 days left for the CA and the servers went down during the weekend, so I didnt dare to make any changes if incase it would not function.

![image](/readme-assets/readme-posts.png)

# filter/search 






