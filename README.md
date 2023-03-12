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

Duration for this CA: 17.01.2023 - 29.01.2023

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

Duration for this CA: 30.01.2023 - 12.03.2023


# Login/register page

First I made a javascript file (data.js) for the urls and the API POST requests for user registration and login

For a user to register a user I added event listener for users to input their details on the form and send their data to the API. I also added validations like users with @noroff.no or @stud.noroff.no email, and password length is minimum 8 characters. I also added "trim()" to the values so any white spaces the user inputs will be removed. When user has successfully registered their user they get redirected back to the login page.

For the login page is the same proccess as the registration, but when the user has entered in the right data (respons status = 200) they get redirected to the homepage. And a JWT token gets generated and set to the local storage.


# Post content feed

For the users to view the content feed I imported the API url needed to fetch the data in the main.js file. To fetch the posts, the JWT token was needed. I fetched the posts and used "forEach" to have the posts in their individual post cards. The posts fetched contained all title, body and media as I thoguht it would match the theme of the webpage. To display the posts in the js file I created a div to hold the posts and also had used "innerHTML". 

I wouldve wished to use "getElementByID" to get the divs in the html file instead of having html in the js file. I had plans to change this, but there were 2 days left for the CA and the servers went down during the weekend, so I didnt dare to make any changes if incase it would not function.

![image](/readme-assets/readme-postid.png)

# filter/search 

The filtering I didnt quite understad, so I used the filter url provided in the API documentation. I included it in the GET request to fetch the posts and used template literals, which allows variables to be turned in to a string. The displayPosts(tag = '') function takes an optional tag parameter, and calls getPosts(tag) to fetch the posts based on the specified tag. When the user inputs the tag in the search form it will filter the displayed posts and show posts that have a title or a body that includes the search input text.

# Create a post content item

For a user to create a post I used the event listener function on the form. A post request will be sent when the user has input a title, body and media. When user has submitted thei data and everything checks out, the page will be reloaded and their post will be displayed.

# User can view a post content by ID

For a user to view a post by ID, a user can click on the title of the post on the homepage which directs them to an html where it shows the post card only. I made a GET request using the fetch method, with a URL that includes the specific ID. The second code snippet creates a postId variable by extracting the value of a query parameter ID from the URL of the current page. This was done using the "URLSearchParams" constructor and the "get()" method to extract the value of the id parameter. 

![image] (/readme-assets/readme-posts.png)

# User can update a post content item

For a user to update their post, they can click on the edit button on the post ID page reveals a form just like in the homepage. Method used was a PUT request for this function. When user has entered in a new title, body and media and clicked submit the page will reload, new data will be sent to the API and a new post card will be displayed. If the user is not authorized to change the post a pop up message will appear. I would've wished the edit button was not displayed to the user who are not authorized to edit the post ID. 

# User can delte a post content item

For a user to delete a post content ID I created a delete button, so the user can delete the post. Method used was a DELETE request for this function. When user deletes a post, they will be redirected to the homepage. If the user is not authorized to delete the post a pop up message will appear.

## Conclusion

For this CA I didnt focus too much on the HTML aspects and focused solely on Javascript. I wished I could've utilized ES6 modules in a more effective way and created more folders to hold functions. I spent half of this deadline trying to learn how to use synchronous functions to pass data from the html to the API server, which I think I managed quite well in the end for this CA. Having html in the js file was something I was going to remove, but had a bit of a time scramble and also having the edit and delete button hidden for unauthorized users. The additional features I didn't have time to do either.

This was a project I did alone. 

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
gh repo clone robertmartinsen/Social-media-platform-CA
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contact

[My email] (robertmartinsen2000@gmail.com)
[My Discord] (robmartinsen#6005)
[My Instagram page](www.instagram.com/robertmartinsen_)





