fetch('posts/posts.json')
  .then(response => response.json())
  .then(posts => {
    const postList = document.getElementById('posts');
    postList.innerHTML = posts.map(post => `
      <a href="posts/${post.file}">
        <h3>${post.title}</h3>
        <time>${post.file.substring(0, 10)}</time>
      </a>
    `).join('');
  })
  .catch(err => console.error('Error loading posts:', err));
