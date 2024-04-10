<template>
    <div class="projects container">
      <h2 class="text-center my-4">Projects</h2>
      <div class="row">
        <!-- Project Card -->
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <div class="card mb-4">
            <img :src="project.image" class="card-img-top" alt="Project Image">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.link" class="btn btn-primary" target="_blank">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsView',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Personal Portfolio Website',
            description: 'A Vue.js and Bootstrap 5 based personal portfolio website.',
            image: 'path_to_image',
            link: 'http://www.yourportfolio.com'
          },
          // I will add other projects
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .projects {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  </style>
  