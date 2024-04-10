<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/social">Social Media</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/resume">Resume</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/skills">Skills</router-link>
            </li>
        </ul>
    </div>
    </div>
</nav>
</template>
