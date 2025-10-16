const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', (e) => {

        links.forEach(a => a.classList.remove('ativo'));

        link.classList.add('ativo');

    });
});