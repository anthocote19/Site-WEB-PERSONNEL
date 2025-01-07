function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('projects-container');
    const githubUsername = 'anthocote19';

    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        const repos = await response.json();

        container.innerHTML = '';

        if (repos.length === 0) {
            container.innerHTML = '<p>Aucun projet trouvé.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Aucune description disponible.'}</p>
                <a href="${repo.html_url}" target="_blank">Voir le projet</a>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p>Erreur lors du chargement des projets.</p>';
        console.error('Erreur:', error);
    }
});


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const hero = document.querySelector('.hero');
const colors = ['#ff6f61', '#6a11cb', '#ff9a9e', '#28a745'];

let colorIndex = 0;
setInterval(() => {
    hero.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 5000);
