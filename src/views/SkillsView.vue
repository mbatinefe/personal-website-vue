<template>
  <div class="skills container">
    <h2 class="text-center my-4">Skills</h2>
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
        { id: 3, name: 'Java', description: 'Skilled in Java for enterprise and application development.' },
        { id: 4, name: 'Solidity', description: 'Knowledgeable in Solidity for smart contracts and decentralized applications.' },
        { id: 5, name: 'HTML', description: 'Experienced with HTML for structuring web content.' },
        { id: 6, name: 'CSS', description: 'Competent in using CSS for styling and layout enhancements of web pages.' },
        { id: 7, name: 'JavaScript', description: 'Advanced proficiency in JavaScript for interactive web applications.' },
        { id: 8, name: 'React.js', description: 'Experienced in building user interfaces and SPAs with React.js.' },
        { id: 9, name: 'Vue.js', description: 'Proficient with Vue.js for developing progressive web applications.' },
        { id: 10, name: 'Node.js', description: 'Skilled in using Node.js for server-side scripting and APIs.' },
        { id: 11, name: 'Express.js', description: 'Experienced with Express.js for building web applications and RESTful APIs.' },
        { id: 12, name: 'MongoDB', description: 'Knowledgeable in using MongoDB as a NoSQL database solution.' },
        { id: 13, name: 'Tailwind CSS', description: 'Skilled in using Tailwind CSS for rapid UI development.' },
        { id: 14, name: 'Bootstrap 5', description: 'Proficient in Bootstrap 5 for responsive and mobile-first projects.' }
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
