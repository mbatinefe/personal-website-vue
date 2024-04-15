<template>
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
.contact {
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: #6B6E70; /* Dark grey background */
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
