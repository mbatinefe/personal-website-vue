<template>
    <div class="language-switch">
      <div class="form-check form-switch">
        <label class="form-check-label left-label">EN</label>
        <input class="form-check-input" type="checkbox" id="langToggle" v-model="store.isTurkish">

        <label class="form-check-label right-label" for="langToggle">TR</label> 
      </div>
    </div>

    <nav class="navbar navbar-expand-md navbar-light"> 
      <div class="container-fluid">

        <router-link class="navbar-brand nav-link" to="/">
            <img src="/mbefe-logo-w-back.png" alt="Logo" class="navbar-icon">
        </router-link>
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
  
  <script>
  import { store } from '@/store'; // Ensure this path is correct based on your project structure

  export default {
    setup() {

      return {
        store
      };
    }
  };
  </script>

<style>

.language-switch {
    position: fixed;
    top: 5px;
    right: 20px;
    display: flex;
    align-items: center;
    z-index: 1000;
    color: #86C232;
  }

  .left-label {
    margin-right: 50px;
    font-weight: bold;
  }

  .right-label {
    font-weight: bold;
  }

  .form-check-input:checked {
    background-color: #3b3b3b;
    border-color: #222629;
  }

  .form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 66, 66, 0.5);
  }

  .form-check-input:checked + .form-check-label::before {
    background-color: #222629;
  }

  .form-check-input + .form-check-label::before {
    background-color: #222629;
  }

  .language-switch .form-check-input {
    cursor: pointer;
  }

  .language-switch .form-check-label {
    cursor: pointer;
  }


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
  