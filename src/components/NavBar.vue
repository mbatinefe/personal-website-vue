<template>
    <nav class="navbar navbar-expand-md navbar-light"> 
      <div class="container-fluid">

        <a href="/" class="navbar-brand">
            <img src="/mbefe-logo-w-back.png" alt="Logo" class="navbar-icon">
        </a>
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
    background-color: #3b3b3b;
    
  }
  .navbar-nav {
    align-items: center; 
  }

  .nav-link {
    display: flex;
    align-items: center; 
    height: 100%;
  }

  .navbar-icon {
    height: 70px;
    width: 100px;
    object-fit: cover; 
    align-items: center;
    display: block;
  }

  .navbar-brand {
    padding: 0;
    margin-right: 0;
    transition: filter 0.6s ease, color 0.6s ease, border 0.6s ease;
    margin-left: 0.1rem;
  }
  
  .navbar-brand:hover {
      color: white;
      filter: brightness(150%);
      border: 1px solid #86C232;
      background-color: #333333;
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

  @media (max-width: 768px) {
    .navbar-icon {
      height: 40px; 
      width: 60px; 
      margin-left: 0.1rem;
    }

  }

  
  </style>
  