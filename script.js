let blogPosts = [];

function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function addBlogPost() {
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;

  if (title && content) {
    const blogPost = {
      title: title,
      content: content
    };
    blogPosts.push(blogPost);
    displayBlogPosts();
    closeModal();
    // Clear input fields
    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";
  }
}

function displayBlogPosts() {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];
    const blogItem = document.createElement("div");
    blogItem.classList.add("blog-item");
    blogItem.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    blogList.appendChild(blogItem);
  }
}
