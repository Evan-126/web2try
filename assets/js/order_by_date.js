// Simple script to list posts from posts.json (GitHub Pages friendly)
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    // Sort posts so newest filenames come first
    posts.sort((a, b) => b.file.localeCompare(a.file));

    const postList = document.getElementById('posts');
    postList.innerHTML = posts.map(post => {
      return `<p><a href="posts/${post.file}">${post.title}</a></p>`;
    }).join('');
  })
  .catch(err => {
    console.error('Error loading posts:', err);
  });
