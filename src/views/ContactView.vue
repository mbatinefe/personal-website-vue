<template>
  <div class="language-switch">
      <div class="form-check form-switch">
      <label class="form-check-label left-label">EN</label>
      <input class="form-check-input" type="checkbox" id="langToggle" v-model="isTurkish" @change="toggleLanguage">
      <label class="form-check-label right-label" for="langToggle">TR</label> 
      </div>
  </div>


  <div class="contact container text-center">
    <h2 class="text-center my-4">Contact</h2>
    <p class="lead">If you're interested in working together or have a question, feel free to reach out!</p>
    <div class="contact-links">
  
      <a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info my-2">LinkedIn</a>
      <a href="https://github.com/mbatinefe" target="_blank" class="btn btn-dark my-2">GitHub</a>
    </div>
  </div>
</template>

<style scoped>


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
  
  
.contact {
  padding-top: 20px;
  padding-bottom: 60px;
  margin-top: 40px;
  background-color: #3b3b3b; /* Dark grey background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

h2.text-center {
  color: #86C232;
  font-weight: bold;
  }

.contact p.lead {
  font-size: 1.25rem;
  color: #DDD; /* Lighter grey to ensure readability */
  margin-bottom: 32px;
}

.contact-links a {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  color: white; /* White text for maximum contrast */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3); /* Subtle shadow for depth */
}

.contact-links a:hover {
  opacity: 0.85;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5); /* More pronounced shadow on hover */
}

.btn-primary {
  background-color: #0056b3; /* Adjusted to a darker shade for better visual impact */
}

.btn-info {
  background-color: #1391c4; /* A slightly deeper shade of blue for info */
}

.btn-dark {
  background-color: #2a2e33; /* Dark but slightly lighter than the darkest shades to pop out on the background */
}
</style>
