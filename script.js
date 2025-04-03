// Dynamic Skills List
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'];
const skillsList = document.getElementById('skills-list');

skills.forEach(skill => {
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Dynamic Experience
const experience = [
  { title: 'Web Developer', company: 'Tech Company', year: '2023-Present', description: 'Developing full-stack web applications.' },
  { title: 'Frontend Developer', company: 'Design Studio', year: '2021-2023', description: 'Building interactive user interfaces.' },
];

const experienceList = document.getElementById('experience-list');

experience.forEach(job => {
  const div = document.createElement('div');
  div.classList.add('experience-item');
  div.innerHTML = `
    <h3>${job.title} at ${job.company}</h3>
    <p><strong>Year:</strong> ${job.year}</p>
    <p>${job.description}</p>
  `;
  experienceList.appendChild(div);
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent!');
  contactForm.reset();
});
