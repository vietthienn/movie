const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("Film ID:" + id);
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ5N2UxNjVmZWZkZDNmZDQ3Yjc4Y2MzMTRiNTExYSIsIm5iZiI6MTc2MDg1OTEwMC42NDksInN1YiI6IjY4ZjQ5M2RjM2I0NzliYTVjNGY5OWM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JUPi03idqfQuc3DQGjpjlcsetzyNth8BNywtbLNfWZY",
  },
};

const rest = await fetch(
  `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  options
);
async function getFilmDetail(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ5N2UxNjVmZWZkZDNmZDQ3Yjc4Y2MzMTRiNTExYSIsIm5iZiI6MTc2MDg1OTEwMC42NDksInN1YiI6IjY4ZjQ5M2RjM2I0NzliYTVjNGY5OWM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JUPi03idqfQuc3DQGjpjlcsetzyNth8BNywtbLNfWZY",
    },
  };

  const rest = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  const data = await rest.json();
  return data;
}
const data = await getFilmDetail(id);
console.log(data);
const main = document.getElementById("main");

main.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
    <p>Name : ${data.title}</p>
    <p> ${data.original_language}</p>
    <p>Vote : ${data.vote_count}</p>
    <p> ${data.release_date}</p>
    <p>${data.overview}</p>
    <p>${data.vote_average}</p>
    <p>Country : ${data.origin_country}</p>

`;
