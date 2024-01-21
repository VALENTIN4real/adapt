<template>
    <!-- ... (votre contenu existant) ... -->

    <main class="main-content">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h2>Bienvenue sur Notre Site</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                        lacus nec urna vestibulum blandit. Proin feugiat justo ut diam
                        interdum, vel varius tortor vestibulum. Nulla facilisi. Vivamus
                        sollicitudin nisi eu dolor ultricies, in tristique mauris
                        fringilla. Integer vehicula nulla ut elit sodales, vel tincidunt
                        tellus feugiat. Nullam nec enim vitae odio tincidunt varius.
                    </p>
                    <p>
                        Quisque volutpat, ligula nec ultrices consectetur, libero odio
                        egestas libero, in venenatis erat sem eget risus. Nullam vel justo
                        ut elit congue condimentum. Duis lacinia metus id tortor semper
                        cursus. Aliquam eget pharetra ligula. Suspendisse potenti. Fusce
                        vel dolor a lacus laoreet vehicula vel ut est.
                    </p>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <h3>Nos Services</h3>
                        <ul>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                        <h3>Dernières Actualités</h3>
                        <ul>
                            <li><a href="#">Nouvelles fonctionnalités ajoutées</a></li>
                            <li><a href="#">Événement à venir</a></li>
                            <li><a href="#">Nouveau produit lancé</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
/* Ajoutez du style pour la zone de contenu */
.main-content {
    padding: 2rem 0;
}

.main-content h2 {
    color: #2c3e50;
}

.main-content p {
    color: #34495e;
}

.sidebar {
    background-color: #ecf0f1;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar h3 {
    color: #3498db;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
}

.sidebar a:hover {
    color: #2c3e50;
}
</style>
