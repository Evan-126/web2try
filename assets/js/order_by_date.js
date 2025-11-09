// Simple script to list posts sorted by date in filename
fetch('posts/')
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const links = [...doc.querySelectorAll('a')]
      .map(a => a.getAttribute('href'))
      .filter(href => href.endsWith('.html'))
      .sort((a, b) => b.localeCompare(a)); // newest first

    const postList = document.getElementById('posts');
    postList.innerHTML = links.map(link => {
      const title = link.replace('.html', '').replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ');
      return `<p><a href="posts/${link}">${title}</a></p>`;
    }).join('');
  });

// would like to thank Chat GPT for this one, prompt was
// "how do i organize my personal weekly blog so it's minimal effort to upload a new article: I can simply add the html file to the github and the blog site, and poof it shows up at the top."
