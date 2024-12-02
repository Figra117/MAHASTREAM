const movies = [
    {
        title: "Bolehkah Sekali Saja Kumenangis",
        genre: "Drama",
        year: 2024,
        synopsis: "Film Bolehkah Sekali Saja Ku Menangis mengisahkan tentang perjuangan Tari (diperankan oleh Prilly Latuconsina), seorang perempuan muda yang harus menghadapi trauma masa lalu akibat kekerasan dalam rumah tangga. .",
        videoSrc: "videoplayback.mp4"
    },
    {
        title: "DEADSHOT — Official AI Trailer (2024)",
        genre: "Action",
        year: 2024,
        synopsis: "Film B adalah film aksi yang penuh dengan petualangan dan tantangan.",
        videoSrc: "videoplayback (1).mp4"
    },
    {
        title: "THE GUYS",
        genre: "Komedi",
        year: 2017,
        synopsis: "Film C adalah komedi yang mengisahkan tentang kesalahpahaman lucu di antara teman-teman.",
        videoSrc: "THE GUYS Official Trailer (2017) - Raditya Dika, Pevita Pearce.mp4"
    },
    {
        title: "Film D",
        genre: "Thriller",
        year: 2022,
        synopsis: "Film D adalah thriller yang menegangkan tentang seorang detektif yang mengejar penjahat berbahaya.",
        videoSrc: ""
    },
    {
        title: "Film E",
        genre: "Romantis",
        year: 2021,
        synopsis: "Film E adalah kisah cinta yang tak terduga di antara dua orang yang berasal dari latar belakang berbeda.",
        videoSrc: ""
    },
    {
        title: "Film F",
        genre: "Fantasi",
        year: 2020,
        synopsis: "Film F mengisahkan petualangan di dunia fantasi yang penuh dengan makhluk ajaib.",
        videoSrc: ""
    },
    {
        title: "Film G",
        genre: "Dokumenter",
        year: 2023,
        synopsis: "Film G adalah dokumenter tentang keindahan alam dan upaya pelestariannya.",
        videoSrc: ""
    },
    {
        title: "Film H",
        genre: "Horor",
        year: 2022,
        synopsis: "Film H adalah film horor yang menceritakan tentang rumah berhantu yang menyimpan rahasia gelap.",
        videoSrc: ""
    },
    {
        title: "Film I",
        genre: "Animasi",
        year: 2019,
        synopsis: "Film I adalah film animasi yang mengisahkan petualangan lucu seekor hewan peliharaan.",
        videoSrc: ""
    },
    {
        title: "Film J",
        genre: "Sci-Fi",
        year: 2021,
        synopsis: "Film J adalah film fiksi ilmiah yang menggambarkan perjalanan ke luar angkasa dan penemuan baru.",
        videoSrc: ""
    }
];

const movieList = document.getElementById('movie-list');
const moviesSection = document.getElementById('movies-section');
const detailSection = document.getElementById('detail-section');
const detailTitle = document.getElementById('detail-title');
const detailSynopsis = document.getElementById('detail-synopsis');
const detailGenre = document.getElementById('detail-genre');
const detailVideo = document.getElementById('detail-video');
const backToMoviesButton = document.getElementById('back-to-movies');
const searchInput = document.getElementById('search-input');
const genreButtons = document.getElementById('genre-buttons');

// Mengambil daftar genre unik dari film
const genres = [...new Set(movies.map(movie => movie.genre))];

// Membuat dan menampilkan tombol genre
genres.forEach(genre => {
    const button = document.createElement('button');
    button.textContent = genre;
    button.classList.add('genre-button');
    button.addEventListener('click', () => filterByGenre(genre));
    genreButtons.appendChild(button);
});

// Fungsi untuk menampilkan daftar film
function displayMovies(filter = '') {
    movieList.innerHTML = ''; // Kosongkan daftar film
    movies.forEach((movie) => {
        if (movie.title.toLowerCase().includes(filter.toLowerCase())) {
            const li = document.createElement('li');
            li.textContent = `${movie.title} (${movie.genre})`; // Tampilkan genre
            li.addEventListener('click', () => showDetail(movie));
            movieList.appendChild(li);
        }
    });
}

// Tampilkan semua film saat pertama kali
displayMovies();

// Fungsi untuk memfilter film berdasarkan genre
function filterByGenre(selectedGenre) {
    const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
    displayMovies(); // Tampilkan semua film jika tidak ada genre yang dipilih
    movieList.innerHTML = ''; // Kosongkan daftar film sebelum menampilkan yang difilter
    filteredMovies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.genre})`;
        li.addEventListener('click', () => showDetail(movie));
        movieList.appendChild(li);
    });
}

// Fungsi untuk menampilkan detail film
function showDetail(movie) {
    detailTitle.textContent = movie.title;
    detailSynopsis.textContent = movie.synopsis;
    detailGenre.textContent = `Genre: ${movie.genre}`;
    
    if (movie.videoSrc) {
        detailVideo.src = movie.videoSrc;
        detailVideo.style.display = 'block';
    } else {
        detailVideo.style.display = 'none';
    }

    moviesSection.classList.add('hidden');
    detailSection.classList.remove('hidden');
}

backToMoviesButton.onclick = function() {
    detailSection.classList.add('hidden');
    moviesSection.classList.remove('hidden');
}

// Event listener untuk pencarian film
searchInput.addEventListener('input', (e) => {
    const filter = e.target.value;
    displayMovies(filter);
});