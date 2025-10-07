// Get references to HTML elements
const movieForm = document.getElementById("movieForm");
const movieList = document.getElementById("movieList");

// Sample movie data
const movies = [
  { name: "Inception", year: 2010 },
  { name: "Avatar", year: 2009 },
  { name: "Titanic", year: 1997 },
];

// Function to render movie list
function renderMovies() {
  movieList.innerHTML = ""; // Clear previous list
  movies.forEach((movie, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${movie.name} (${movie.year})</span>
      <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
    `;
    movieList.appendChild(li);
  });
}

// Function to delete a movie
function deleteMovie(index) {
  movies.splice(index, 1);
  renderMovies();
}

// Handle form submission
movieForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page reload

  const name = document.getElementById("movieName").value;
  const year = document.getElementById("movieYear").value;

  // Add new movie
  movies.push({ name, year });
  renderMovies();

  // Reset form fields
  movieForm.reset();
});

// Initial render
renderMovies();
