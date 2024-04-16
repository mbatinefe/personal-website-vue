<template>
  <div class="skills container">
    <h2 class="text-center my-4">Skills</h2>
    <div v-for="(category, index) in skillCategories" :key="index" class="category-box">
      <h3 class="category-title">{{ category.category }}</h3>
      <div class="row">
        <div class="col-md-4" v-for="skill in category.skills" :key="skill.id">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <p class="card-text">{{ skill.description }}</p>
              <div class="progress" style="height: 20px;">
                <div class="progress-bar" :style="{ width: skill.level * 10 + '%' }" aria-valuenow="skill.level * 10" aria-valuemin="0" aria-valuemax="100"></div>
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
        skillCategories: [
          {
            category: "Programming Languages",
            skills: [
              { id: 35, name: 'C++', description: 'Advanced use of C++ for system and application development.', level: 8 },
              { id: 21, name: 'Python', description: 'Proficient in Python for data analysis, machine learning, and back-end development.', level: 8 },
              { id: 13, name: 'Java', description: 'Good knowledge of Java for enterprise applications and Android development.', level: 3 },
              { id: 1, name: 'HTML', description: 'Skilled in HTML for creating and structuring web page content.', level: 7 },
            ]
          },
          {
            category: "Web Development",
            skills: [
              { id: 4, name: 'Vue.js', description: 'Experienced with Vue.js for developing progressive web applications.', level: 5 },
              { id: 2, name: 'JavaScript', description: 'Deep understanding of JavaScript for interactive web applications.', level: 7 },
              { id: 3, name: 'CSS', description: 'Expertise in CSS for styling and dynamic layouts.', level: 7 },
              { id: 5, name: 'Express.js', description: 'Utilization of Express.js in building efficient web APIs.', level: 5 },
              { id: 7, name: 'RESTful API Development', description: 'Designing and implementing RESTful services.', level: 5 },
            ]
          },
          {
            category: "Software Development",
            skills: [
              { id: 10, name: 'Project Management', description: 'Managing software projects from conception through to deployment.', level: 8 },
              { id: 12, name: 'Software Development Lifecycle', description: 'Comprehensive understanding of the full software development lifecycle.', level: 8 },
              { id: 14, name: 'Socket Programming', description: 'Experience with low-level network communication using sockets.', level: 5 },
              { id: 15, name: 'Client-Server Architecture', description: 'Understanding of complex client-server architectures.', level: 4 },
            ]
          },
          {
            category: "Data Science & Machine Learning",
            skills: [
              { id: 22, name: 'Neural Network Implementation', description: 'Building and training neural networks for various applications.', level: 6 },
              { id: 23, name: 'PyTorch', description: 'Utilizing PyTorch for deep learning projects.', level: 6 },
              { id: 24, name: 'Data Handling with Numpy', description: 'Efficient data operations with Numpy.', level: 6 },
              { id: 25, name: 'Machine Learning Fundamentals', description: 'Strong foundation in core machine learning concepts.', level: 7 },
              { id: 26, name: 'Deep Learning', description: 'Implementing deep learning algorithms for complex problem solving.', level: 6 },
              { id: 27, name: 'Data Analysis', description: 'Advanced data analysis techniques with Python.', level: 8 },
              { id: 28, name: 'Pandas Library', description: 'Data manipulation and analysis using Pandas.', level: 5 },
              { id: 29, name: 'Data Visualization', description: 'Creating engaging data visualizations with Matplotlib and other tools.', level: 7 },
              { id: 30, name: 'Matplotlib', description: 'Producing static and interactive plots with Matplotlib.', level: 4 },
              { id: 31, name: 'Data Scraping', description: 'Extracting data from web sources for analysis and reporting.', level: 7 },
              { id: 32, name: 'Web Data Extraction', description: 'Automating data extraction from various web platforms.', level: 7 },
              { id: 33, name: 'Automated Data Processing', description: 'Streamlining data processing workflows.', level: 7 },
              { id: 34, name: 'Geospatial Analysis', description: 'Analyzing and visualizing geographic data.', level: 6 },
            ]
          },
          {
            category: "Blockchain Technologies",
            skills: [
              { id: 45, name: 'Solidity Programming', description: 'Developing smart contracts with Solidity for Ethereum-based applications.', level: 4 },
              { id: 46, name: 'Smart Contract Development', description: 'Crafting and deploying smart contracts on various blockchain platforms.', level: 3 },
              { id: 47, name: 'Polygon Blockchain Familiarity', description: 'Working with Polygon to enhance Ethereum scalability.', level: 7 },
              { id: 48, name: 'IPFS for Metadata Storage', description: 'Using IPFS for decentralized file storage in blockchain applications.', level: 3 },
              { id: 49, name: 'Web3 Integration', description: 'Integrating Web3 technologies into applications for decentralized web interaction.', level: 3 },
              { id: 50, name: 'Cryptographic Techniques', description: 'Applying cryptographic methods to secure transactions and data.', level: 3 },
              { id: 51, name: 'Decentralized App Development', description: 'Building decentralized applications (DApps) on blockchain platforms.', level: 3 },
              { id: 52, name: 'Blockchain Security Practices', description: 'Ensuring security best practices in blockchain applications.', level: 3 },
              { id: 53, name: 'Token Standards Knowledge', description: 'Understanding ERC-20 and ERC-721 token standards.', level: 3 },
              { id: 54, name: 'NFT Marketplace Deployment', description: 'Deploying and managing NFT marketplaces.', level: 7 },
            ]
          },
        ]
      };
    },
  };
</script>

<style scoped>

.category-title {
  color: #86C232;
  font-size: 1.75rem;
  margin-top: 1px;
  margin-bottom: 20px;
}

.category-box {
  background-color: #3b3b3b;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

h2.text-center {
  color: #7ac019;
  font-weight: bold;
}

.skills {
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #6B6E70; 
}

.card {
  background-color: #222629; 
  border: 1px solid #333;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
  transition: transform 0.3s ease-in-out; 
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
}

.card img {
  border-top-left-radius: calc(0.25rem - 1px); 
  border-top-right-radius: calc(0.25rem - 1px);
}

.card .card-body {
  padding: 20px; 
}

.card .card-title {
  color: #64a706;
}

.card .card-text {
  color: #666; 
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
  color: white;
}

</style>
