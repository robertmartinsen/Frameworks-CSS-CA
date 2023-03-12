
import { posts } from "./data.js";

const accessToken = localStorage.getItem('accessToken');


/**
 * Fetches posts from the API with an optional tag filter.
 * @param {string} tag  - user enters a tag to filter the posts in the search form.
 * @returns {Promise} - an array of posts.
 */

async function getPosts(tag = '') {
    const response = await fetch (`${posts}?_tag=${tag}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
    });
    const data = await response.json();
    return data
}

/**
 * Displays posts in the html with an optional tag filter.
 * @param {string} tag - filters the postfeed when user has entered a tag in the search form.
 * ```js
 * displayPosts();
 * ```
 */

async function displayPosts(tag = '') {
    const posts = await getPosts(tag);
    const postsContainer = document.getElementById('post-container');
    postsContainer.innerHTML = '';
    
    posts.forEach((post) => {
        if (post.title && post.body && post.media) {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <div class="container" id="post-container">
            <div class="col-sm-12 col-md-12 col-lg-12 offset-md-12">
                <div class="post-card bg-white rounded-lg overflow-hidden mb-4 shadow">
                    
                    <div class="post-card_img">
                        <img src="${post.media}" alt="post.title">
                    </div>
    
                    <div class="post-card_i d-flex justify-content-end">
                            <a href="#">
                                <i class="bi bi-heart fs-2 text-secondary"></i>
                            </a>
                    </div>
                
                   
                    <div class="post-card_content d-flex justify-content-between">
                        <div class="post-card_title-section overflow-hidden">
                            <div class="d-flex justify-content-between">
                            <h4 class="post-card_title">
                                <a href="authpost.html?id=${post.id}" class="text-decoration-none text-dark">${post.title}</a>
                            </h4>
                            <a href="#" class="post-card_author fs-5 text-dark">@user</a>
                            </div>
                                <div class="text">
                                    <p>${post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    `
            postsContainer.appendChild(postElement)
        }
    })
}

const filterSearch = document.getElementById('filter-search')
filterSearch.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchInput = document.getElementById('search-input').value
    displayPosts(searchInput)
})

const postButton = document.getElementById('post-btn')
postButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value
    const media = document.getElementById('media').value

    try {
        const response = await fetch(posts, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ title, body, media})
        });
        const data = await response.json();
        window.location.href = 'authindex.html';
      } catch (error) {
        console.error(error);
      }
});
      

displayPosts();