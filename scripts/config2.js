const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ5N2UxNjVmZWZkZDNmZDQ3Yjc4Y2MzMTRiNTExYSIsIm5iZiI6MTc2MDg1OTEwMC42NDksInN1YiI6IjY4ZjQ5M2RjM2I0NzliYTVjNGY5OWM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JUPi03idqfQuc3DQGjpjlcsetzyNth8BNywtbLNfWZY",
  },
};

async function getData(params) {
  const res = await fetch(
    "https://api.themoviedb.org/3/person/person_id/movie_credits?language=en-US",
    options
  );
  const data = await res.json();

  return data.results;
}

const data = await getData();
console.log(data);

const listfilm = document.getElementById("listfilm");
for (let i = 0; i < data.length; i++) {
  const film = data[i];
  let card = document.createElement("div");
  card.className = "movie-card";

  let poster_path = "https://image.tmdb.org/t/p/w500" + film.poster_path;
  cardd.innerHTML = `
    <img src = "${poster_path}" alt ="">
        <p>${film.title}</p>
    </img>
    `;
  listfilm.appendChild(cardd);
}
