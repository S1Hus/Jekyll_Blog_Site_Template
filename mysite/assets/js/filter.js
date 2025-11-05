function filterProjects(topic) {
  const post_items = document.querySelectorAll('.post-item');

  if (topic === 'All') {
    // Show all projects
    post_items.forEach(post => {
      post.style.display = 'block';
    });
  } else {
    // Filter projects by topic
    post_items.forEach(post => {
      const cats = post.getAttribute('data-cats').split(',');

      if (cats.includes(topic)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }
}
