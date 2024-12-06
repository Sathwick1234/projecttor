function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => console.error('Error loading component:', error));
}

loadComponent('about-us', './components/about-us.html');
loadComponent('our-services', './components/our-services.html');
loadComponent('our-customers', './components/our-customers.html');
