<template>
    <!-- ... (votre contenu existant) ... -->

    <footer class="main-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>Liens Utiles</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Produits</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Ressources</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Suivez-nous</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" target="_blank"><i class="bi bi-facebook"></i> Facebook</a></li>
                        <li><a href="#" target="_blank"><i class="bi bi-twitter"></i> Twitter</a></li>
                        <li><a href="#" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a></li>
                        <li><a href="#" target="_blank"><i class="bi bi-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
/* Ajoutez du style pour le footer */
.main-footer {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 0;
}

.main-footer h5 {
    color: #3498db;
}

.main-footer a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.main-footer a:hover {
    color: #3498db;
}
</style>
