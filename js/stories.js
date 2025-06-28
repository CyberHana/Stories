const storiesContainer = document.getElementById("storiesContainer");

window.addEventListener("DOMContentLoaded", () => {
  loadStories();
});

function loadStories() {
  storiesContainer.innerHTML = "";
  const stories = JSON.parse(localStorage.getItem("stories")) || [];

  stories.forEach(story => {
    const div = document.createElement("div");
    div.className = "story";
    div.innerHTML = `<strong>${story.title}</strong><br>${story.content}`;
    if (story.imgURL) {
      const img = document.createElement("img");
      img.src = story.imgURL;
      div.appendChild(img);
    }
    storiesContainer.appendChild(div);
  });
}
