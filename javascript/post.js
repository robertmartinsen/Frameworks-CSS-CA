
import { posts } from "./data.js";

const accessToken = localStorage.getItem('accessToken')


/**
 * Fetches post by ID.
 * @async
 * @function
 * @param {number} id - The Id of the post. 
 * @returns {Promise} the post ID data.
 */
async function getPostById(id) {
    const response = await fetch(`${posts}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  }

const postId = new URLSearchParams(window.location.search).get('id');
const postContainer = document.getElementById('post-container');

/**
 * Fetches and displays post by ID in the html.
 * @async
 * @function displayPost()
 * @returns {Promise} Promise that resolves when post is displayed.
 */
async function displayPost() {
  const post = await getPostById(postId);
  postContainer.innerHTML = `
    <div class="post-card bg-white rounded-lg overflow-hidden mb-4 shadow">
      <div class="post-card_img">
        <img src="${post.media}" alt="${post.title}">
        </div>
        <div class="post-card_i d-flex justify-content-end">
            <a href="#">
                <i class="bi bi-heart fs-2 text-secondary"></i>
            </a>
        </div>
        <div class="post-card_content d-flex justify-content-between">
            <div class="post-card_title-section overflow-hidden">
                <div class="d-flex justify-content-between">
                    <h4 class="post-card_title">${post.title}</h4>
                    <a href="#" class="post-card_author fs-5 text-dark">@user</a>
                </div>
                    <div class="text">
                        <p>${post.body}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
}
        
displayPost();

const editBtn = document.getElementById ('edit-btn')
editBtn.addEventListener('click', () => {
    const editForm = document.getElementById('edit-form')
    editForm.style.display = 'block'
})

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', async () => {
  const postId = new URLSearchParams(window.location.search).get('id');
  const editTitle = document.getElementById('edit-title').value;
  const editBody = document.getElementById('edit-body').value;
  const editMedia = document.getElementById('edit-media').value;
  const response = await fetch(`${posts}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ title: editTitle, body: editBody, media: editMedia }),
  });
  const data = await response.json()
  if (response.ok) {
    window.location.href = `authpost.html?id=${postId}`;
  } else {
    alert('Failed to edit post. You are not authorized to make changes to this post.');
  }
})

const deletePostBtn = document.getElementById('delete-btn');
deletePostBtn.addEventListener('click', async () => {
  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    const response = await fetch(`${posts}/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.ok) {
      window.location.href = 'authindex.html';
    } else {
      alert('Failed to delete post. You are not authorized to make changes to this post.');
    }
  }
});

