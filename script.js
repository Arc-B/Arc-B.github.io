
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

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
