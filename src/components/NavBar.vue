<template>
    <nav class="navbar navbar-expand-md navbar-light"> 
      <div class="container-fluid">
        <a class="navbar-brand" href="/">MUSTAFA BATIN EFE</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            
            <li class="nav-item">
              <router-link class="nav-link" to="/activities" active-class="active-link">Activities</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/projects" active-class="active-link">Projects</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/skills" active-class="active-link">Skills</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/education" active-class="active-link">Education</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/certificates" active-class="active-link">Certificates</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/resume" active-class="active-link">Resume</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact" active-class="active-link">Contact</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style>
  .navbar {
    background-color: #474b4f;
    
  }
  .navbar-nav {
    align-items: center; 
  }

  .nav-link {
    display: flex;
    align-items: center; 
    height: 100%;
  }

  .navbar .navbar-brand {
    color: #86C232;
    font-weight: bold;
    margin-left: 0.5rem;
  }
  
  .navbar .navbar-nav .nav-link {
    color: #86C232;
    
  }
  
  .navbar .navbar-nav .nav-link:hover {
    color: 86C232;
    font-weight: bold;
  }
  
  .navbar .navbar-toggler {
      margin-right: 0.5rem;
    }
  
  </style>
  