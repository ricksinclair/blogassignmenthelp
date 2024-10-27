// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton = document.getElementById("#back");
// TODO: Create a function that builds an element and appends it to the DOM
const buildBlogPost = (username, title, content) => {
  const postEl = document.createElement("article");
  const blogPost = document.querySelector("main").appendChild(postEl);

  const titleEl = document.createElement("h2");
  const postTitle = blogPost.appendChild(titleEl);
  postTitle.innerText = title;

  const contentEl = document.createElement("blockquote");
  const postContent = blogPost.appendChild(contentEl);
  postContent.innerText = content;

  const authorEl = document.createElement("p");
  const postAuthor = blogPost.appendChild(authorEl);
  postAuthor.innerText =   `Posted By: ${username}`;


};

// TODO: Create a function that handles the case where there are no blog posts to display
const noBlogPosts = () => {
  const numBlogPosts = readLocalStorage().length;
  if (numBlogPosts < 1) {
    const noPostsEl = document.createElement("article");
    const noPostsMessage = document
      .querySelector("main")
      .appendChild(noPostsEl);
    noPostsMessage.innerText = "No blog posts to display!";
  }
};
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = () => {
  const blogPosts = readLocalStorage();
  if (blogPosts.length > 0) {
    for (let post of blogPosts) {
      buildBlogPost(post.username, post.title, post.content);
    }
  } else {
    noBlogPosts();
  }

  handleDarkModeStyles();

};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

const handleBack = () => {
  redirectPage("index.html");
};
