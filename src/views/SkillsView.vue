<template>
  <div class="skills container">
    <h2 class="text-center my-4">Skills</h2>
    <div class="row">
      <div class="col-md-4" v-for="skill in skills" :key="skill.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ skill.name }}</h5>
            <p class="card-text">{{ skill.description }}</p>
            <div class="progress" style="height: 20px;">
              <div class="progress-bar" :style="{ width: skill.level * 10 + '%' }" :aria-valuenow="skill.level * 10" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
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
        { id: 1, name: 'C++', description: 'Experienced in object-oriented programming and software development.', level: 9 },
        { id: 2, name: 'Python', description: 'Proficient in Python with experience in data analysis and machine learning.' , level: 9 },
        { id: 3, name: 'Java', description: 'Skilled in Java for enterprise and application development.', level: 3 },
        { id: 4, name: 'Solidity', description: 'Knowledgeable in Solidity for smart contracts and decentralized applications.', level: 3 },
        { id: 5, name: 'HTML', description: 'Experienced with HTML for structuring web content.', level: 7 },
        { id: 6, name: 'CSS', description: 'Competent in using CSS for styling and layout enhancements of web pages.', level: 7 },
        { id: 7, name: 'JavaScript', description: 'Advanced proficiency in JavaScript for interactive web applications.', level: 7 },
        { id: 8, name: 'React.js', description: 'Experienced in building user interfaces and SPAs with React.js.', level: 5 },
        { id: 9, name: 'Vue.js', description: 'Proficient with Vue.js for developing progressive web applications.', level: 5 },
        { id: 10, name: 'Node.js', description: 'Skilled in using Node.js for server-side scripting and APIs.', level: 5 },
        { id: 11, name: 'Express.js', description: 'Experienced with Express.js for building web applications and RESTful APIs.', level: 5 },
        { id: 12, name: 'MongoDB', description: 'Knowledgeable in using MongoDB as a NoSQL database solution.', level: 5 },
        { id: 13, name: 'Tailwind CSS', description: 'Skilled in using Tailwind CSS for rapid UI development.', level: 5},
        { id: 14, name: 'Bootstrap 5', description: 'Proficient in Bootstrap 5 for responsive and mobile-first projects.', level: 5 }
      ],
    };
  },
};
</script>
<style scoped>

h2.text-center {
  color: #86C232;
  font-weight: bold;
}

.skills {
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: #6B6E70; /* Optional: background color for the skills section */
}

.card {
  background-color: #222629; /* White background for clarity */
  border: 1px solid #333; /* Light border for definition */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow for depth */
  transition: transform 0.3s ease-in-out; /* Smooth transition for hover effects */
}

.card:hover {
  transform: translateY(-5px); /* Slightly raise the card on hover */
  box-shadow: 0 5px 15px rgba(0,0,0,0.2); /* Enhanced shadow on hover */
}

.card img {
  border-top-left-radius: calc(0.25rem - 1px); /* Ensures the image aligns with rounded card corners */
  border-top-right-radius: calc(0.25rem - 1px);
}

.card .card-body {
  padding: 20px; /* More padding for spacing inside the card */
}

.card .card-title {
  color: #86C232; /* Specific color for titles */
}

.card .card-text {
  color: #666; /* Lighter text color for descriptions */
}

.progress {
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden; /* Ensures the rounded corners are applied to child elements */
}

.progress-bar {
  background-color: #86C232;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; /* Ensures text inside the progress bar is readable */
}

</style>
