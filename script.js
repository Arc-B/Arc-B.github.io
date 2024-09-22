document.addEventListener('DOMContentLoaded', function() {
    loadExperience();
    loadProjects();
});

function loadExperience() {
    let experienceData = [
        {
            company: "Accenture Solutions Pvt. Ltd.",
            position: "Software Engineer",
            duration: "Jun 2021 - Dec 2023",
            description: [
                "Constructed Python and Apps Script based automations to reduce manual tasks by 85%.",
                "Ranked among the top 3 global finalists out of 1400 total submissions in the Sustainability Innovation Challenge.",
                "Promoted within one year of joining for developing innovative solutions, saving client's time."
            ]
        },
        {
            company: "Leading India AI (LeadingIndia.ai), Bennett University",
            position: "Machine Learning Engineer",
            duration: "May 2020 - Jul 2020",
            description: [
                "Created and compared Conv2D and VGG16 CNNs to identify weeds in plants.",
                "Generated 15,000 image segments using data augmentation techniques."
            ]
        },
        {
            company: "VES Institute of Technology",
            position: "Software Developer Intern",
            duration: "Nov 2019 - Jan 2020",
            description: [
                "Forecasted flight delays using linear and polynomial regression models (MSE=40).",
                "Deployed model using Flask API, integrated with a Laravel application."
            ]
        }
    ];

    let experienceSection = document.getElementById('experience');

    experienceData.forEach(exp => {
        let expItem = document.createElement('div');
        expItem.classList.add('experience-item');
        expItem.innerHTML = `
            <h3>${exp.position} - ${exp.company} (${exp.duration})</h3>
            <ul>
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        experienceSection.appendChild(expItem);
    });
}

function loadProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            let projectsSection = document.getElementById('projects');
            data.projects.forEach(project => {
                let projectItem = document.createElement('div');
                projectItem.classList.add('project-item');
                projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><p><strong>Tech:</strong> ${project.technologies}</p>`;
                projectsSection.appendChild(projectItem);
            });
        })
        .catch(error => console.log('Error loading projects:', error));
}
