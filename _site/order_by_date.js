// Load posts from posts.json and display them nicely on blog.html
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    posts.sort((a, b) => b.file.localeCompare(a.file));

    const postList = document.getElementById('posts');
    postList.innerHTML = posts.map(post => {
      // Extract the date from filename (YYYY-MM-DD)
      const match = post.file.match(/^(\d{4}-\d{2}-\d{2})/);
      const date = match ? new Date(match[1]).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}) : '';
      return `
        <a href="posts/${post.file}">
          <h3>${post.title}</h3>
          <time>${date}</time>
        </a>
      `;
    }).join('');
  })
  .catch(err => console.error('Error loading posts:', err));
