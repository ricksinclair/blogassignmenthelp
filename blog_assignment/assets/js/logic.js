// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const handleDarkModeStyles = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const section = document.querySelector("section");
  const circle = document.querySelector("aside");
  const darkModeToggle = localStorage.getItem("toggleDarkMode") ?? "light";
  const lightModeCircleColor = "#ffb100";
  const darkModeCircleColor = "blue";

  if (darkModeToggle === "light") {
    header.classList.add("light");
    header.classList.remove("dark");

    main.classList.add("light");
    main.classList.remove("dark");

    if (footer) {
      footer.classList.add("light");
      footer.classList.remove("dark");
    }

    if (section) {
      section.classList.add("light");
      section.classList.remove("dark");
    }

    if (circle) {
      circle.style.setProperty("--circle-color", lightModeCircleColor);
    }
  } else if (darkModeToggle === "dark") {
    header.classList.add("dark");
    header.classList.remove("light");

    main.classList.add("dark");
    main.classList.remove("light");

    if (footer) {
      footer.classList.add("dark");
      footer.classList.remove("light");
    }

    if (section) {
      section.classList.add("dark");
      section.classList.remove("light");
    }

    if (circle) {
      circle.style.setProperty("--circle-color", darkModeCircleColor);
    }
  }
};
const toggleDarkMode = () => {
  let darkModeToggle = localStorage.getItem("toggleDarkMode");

  if (darkModeToggle == null) {
    darkModeToggle = "light";
    localStorage.setItem("toggleDarkMode", darkModeToggle);
    return;
  }

  darkModeToggle = darkModeToggle === "light" ? "dark" : "light";
  localStorage.setItem("toggleDarkMode", darkModeToggle);

  handleDarkModeStyles();
};

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));

  if (!formData) {
    return [];
  }

  return formData;
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const saveToLocalStorage = (blogEntry) => {
  console.log("called save!");
  const allBlogPosts = readLocalStorage();
  console.log(allBlogPosts);
  allBlogPosts.push(blogEntry);
  localStorage.setItem("formData", JSON.stringify(allBlogPosts));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
handleDarkModeStyles();
