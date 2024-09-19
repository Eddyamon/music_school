document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function showCourse(courseId) {
    // Hide all course sections
    document.querySelectorAll('.course-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected course section
    document.getElementById(courseId).classList.remove('hidden');
    
    // Optionally, scroll to the section
    document.getElementById(courseId).scrollIntoView({ behavior: 'smooth' });
}

function backToCourses() {
    // Hide all course sections
    document.querySelectorAll('.course-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Optionally, scroll back to the courses section
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

const API_KEY = 'AIzaSyA7sflrtejadyiRmAYjRcOQP9ZY2B_Tx5I'; // Replace with your actual YouTube API key

    // Function to fetch videos from YouTube
    function fetchYouTubeVideos(course) {
        const query = `${course} music lessons`;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=5&key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayVideos(data.items))
            .catch(error => console.error('Error fetching videos:', error));
    }

    // Function to display fetched YouTube videos
    function displayVideos(videos) {
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '';  // Clear previous results

        videos.forEach(video => {
            const videoId = video.id.videoId;
            const videoTitle = video.snippet.title;
            const videoThumbnail = video.snippet.thumbnails.medium.url;

            const videoElement = `
                <div class="video">
                    <img src="${videoThumbnail}" alt="${videoTitle}">
                    <h3>${videoTitle}</h3>
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch on YouTube</a>
                </div>
            `;

            videoContainer.innerHTML += videoElement;
        });
    }