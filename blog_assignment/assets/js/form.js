// TODO: Create a variable that selects the form element
const formElement = document.querySelector("form");
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission() {
  console.log("SUBMIT PRESSED!");
  const username = document.getElementById("username").value;
  console.log(username);
  const title = document.getElementById("title").value;
  console.log(title);
  const content = document.getElementById("content").value;
  console.log(content);

  const errorElement = document.getElementById("error");

  function isDataComplete() {
    if (!username || !title || !content) {
      return false;
    }

    return true;
  }

  const errorMsg = !isDataComplete() ? "Please complete the form." : "";

  errorElement.innerText = errorMsg;

  if (isDataComplete()) {
    console.log("entered complete branch");
    const blogEntry = {
      username: username,
      title: title,
      content: content,
    };

    //TODO: store in local storage
    saveToLocalStorage(blogEntry);
    console.log("BlogData\n", readLocalStorage());
    redirectPage("blog.html");
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  handleFormSubmission();
});
