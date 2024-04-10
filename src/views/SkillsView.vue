<template>
    <div class="skills container">
      <h2 class="text-center my-4">Skills & Courses</h2>
      <div class="row">
        <!-- Skill Card -->
        <div class="col-md-4" v-for="skill in skills" :key="skill.id">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <p class="card-text">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsView',
    data() {
      return {
        skills: [
          { id: 1, name: 'C++', description: 'Experienced in object-oriented programming and software development.' },
          { id: 2, name: 'Python', description: 'Proficient in Python with experience in data analysis and machine learning.' },
          // I will add other skills and courses
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  </style>
  