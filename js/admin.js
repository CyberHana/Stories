const ADMIN_LOGIN = "Abbosbek0407";
const ADMIN_PASSWORD = "Aisha0704";

const loginSection = document.getElementById("loginSection");
const adminPanel = document.getElementById("adminPanel");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
    loginSection.style.display = "none";
    adminPanel.style.display = "block";
  } else {
    alert("Login yoki parol noto‘g‘ri!");
  }
});

// Hikoya saqlash
document.getElementById("newStoryForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("storyTitle").value;
  const content = document.getElementById("storyContent").value;
  const fileInput = document.getElementById("storyImage");
  let imgURL = "";

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    imgURL = URL.createObjectURL(file);
  }

  const newStory = {
    title,
    content,
    imgURL
  };

  let stories = JSON.parse(localStorage.getItem("stories")) || [];
  stories.push(newStory);
  localStorage.setItem("stories", JSON.stringify(stories));

  alert("Hikoya qo‘shildi!");

  document.getElementById("newStoryForm").reset();
});
