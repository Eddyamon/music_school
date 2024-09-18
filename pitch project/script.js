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
