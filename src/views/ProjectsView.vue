<template>
  <div class="projects container">
    <h2 class="text-center my-4">Projects</h2>
    <div class="row">
      <div class="col-md-4" v-for="project in projects" :key="project.id" >
        <div class="card mb-4">
          <img :src="project.image" class="card-img-top" alt="Project Image"  @click="activateProject(project)">
          <div class="card-body" >
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <h6 class="skills-heading">Skills Acquired</h6>
            <div class="skills-container">
              <span class="badge bg-secondary" v-for="skill in project.skills" :key="skill">{{ skill }}</span>
            </div>
            <a :href="project.link" class="btn btn-primary" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeProject" class="modal-overlay" @click="closeModal()">
      <div class="modal-content" @click.stop> 
        <img :src="activeProject.image" class="zoom-img">
        <button class="close-btn" @click="closeModal()">×</button>
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
            title: 'Full Stack Event Management',
            description: 'Event and volunteer management system website designed to improve efficiency and user engagement.',
            skills: ['HTML','JavaScript','CSS','Vue.js', 'Express.js', 'MongoDB', 'RESTful API Development', 'Database Integration', 'Authentication Mechanisms', 'Project Management','Single Page Applications (SPAs)','Software Development Lifecycle'],
            image: './project-DALL-E/DALL-E-FullStackEvent.webp',
            link: 'https://github.com/mbatinefe/event-management-full-stack'
          },
          {
            id: 2,
            title: 'Multiplayer Painting Game',
            description: 'Interactive game allowing multiple players to draw on a shared canvas in real-time.',
            skills: ['Java', 'Socket Programming', 'Client-Server Architecture', 'GUI Development', 'Event Handling', 'Concurrency in Java', 'Network Communication', 'Debugging Java Applications'],
            image: './project-DALL-E/DALL-E-MultPaintingGame.webp', 
            link: 'https://github.com/mbatinefe/painting-game-with-server'
          },
          {
            id: 3,
            title: 'Mini Neural Network',
            description: 'Demonstration of neural network concepts through a simple classification task.',
            skills: ['Python', 'Neural Network Implementation', 'PyTorch', 'Data Handling with Numpy', 'Machine Learning Fundamentals', 'Deep Learning'],
            image: './project-DALL-E/DALL-E-MiniNeuralNetwork.webp', 
            link: 'https://github.com/mbatinefe/neural-networks-mini'
          },
          {
            id: 4,
            title: 'Istanbul Traffic-Fuel Analysis',
            description: 'Analysis of traffic patterns and fuel usage to optimize transportation and reduce costs.',
            skills: ['Python', 'Data Analysis', 'Pandas Library', 'Data Visualization', 'Matplotlib', 'Data Scraping', 'Web Data Extraction', 'Automated Data Processing', 'Geospatial Analysis'],
            image: './project-DALL-E/DALL-E-IstanbulTraffic.webp', 
            link: 'https://github.com/mbatinefe/istanbul-traffic-fuel-analysis'
          },
          {
            id: 5,
            title: 'Monopoly Board Game',
            description: 'Digital version of Monopoly with enhanced gameplay features and user interface.',
            skills: ['C++ Programming', 'Object-Oriented Programming', 'Game Development', 'Dynamic Memory Management', 'File I/O'],
            image: './project-DALL-E/DALL-E-Monopoly.webp', 
            link: 'https://github.com/mbatinefe/monopoly-board-game'
          },
          {
            id: 6,
            title: 'Weekly Schedule Maker',
            description: 'Tool for efficiently managing and scheduling weekly tasks and appointments.',
            skills: ['C++ Programming', 'Algorithm Design', 'Data Structures', 'File I/O in C++', 'Problem Solving'],
            image: './project-DALL-E/DALL-E-Schedule.webp',  
            link: 'https://github.com/mbatinefe/schedule-maker'
          },
          {
            id: 7,
            title: 'Backgammon Game',
            description: 'Implementation of the classic board game Backgammon with a focus on AI gameplay.',
            skills: ['C++ Programming', 'Object-Oriented Programming', 'Game Development', 'Logical Thinking'],
            image: './project-DALL-E/DALL-E-Backgammon.webp', 
            link: 'https://github.com/mbatinefe/backgammon'
          },
          {
            id: 8,
            title: 'NFT - Educated Ape Club',
            description: 'NFT collection on the Polygon blockchain featuring unique digital artwork.',
            skills: ['Solidity Programming', 'Smart Contract Development', 'Polygon Blockchain Familiarity', 'IPFS for Metadata Storage', 'Web3 Integration', 'Cryptographic Techniques', 'Decentralized App Development', 'Blockchain Security Practices', 'Token Standards Knowledge', 'NFT Marketplace Deployment'],
            image: './project-DALL-E/EducatedApeClub-Sabanci.png', 
            link: 'https://opensea.io/collection/educatedapeclub'
          },
          // I will add other projects
        ],
        activeProject: null
      };
    },
    methods: {
      activateProject(project) {
      this.activeProject = project;  

      },
      closeModal() {
        this.activeProject = null;
      }
    }
  };
  </script>
  
<style scoped>

  .category-box {
    background-color: #3b3b3b;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .skills-heading {
    font-size: 16px;
    color: #86C232; 
    margin-top: 10px; 
    margin-bottom: 8px; 
    text-align: center;

  }

  h2.text-center {
    color: #86C232;
    font-weight: bold;
  }

  .projects {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  
  .row {
    display: flex; 
    flex-wrap: wrap; 
    margin-right: -15px;
    margin-left: -15px;
    background-color: #3b3b3b;
    
  }

  .col-md-4 {
    display: flex;
    padding-right: 15px; 
    padding-left: 15px; 

  }

  .card {
    display: flex;
    flex-direction: column; 
    background-color: #222629;
    color: #333;
    border: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    flex: 1;
    margin-top: 2.5rem;
  }

  .card-body {
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 20px;
  }

  .card-text{
    margin-bottom: 10px; 
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
    color: #86C232; 
  }
  
  .card .card-text {
    color: #666; 
  }
  
  .btn-primary {
    background-color: #86C232;
    border-color: #86C232;
    margin-top: auto;
    width: 100%;
  }
  
  .btn-primary:hover {
    background-color: #86C232;
    border-color: #86C232;
    
  }

  .skills-container {
    display: flex;
    justify-content: center; 
    flex-wrap: wrap; 
    margin-top: auto; 
    margin-bottom: 15px;
  }

  .badge {
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: white;
    background-color: #86C232; 
  }

  /* Image Zoom */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    position: relative;
    width: auto; 
    max-width: 90%;
    max-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; 
    box-shadow: 0 0 20px rgba(0,0,0,0.5); 
  }
  
  .zoom-img {
    display: block; 
    max-width: 100%;
    max-height: 80vh; 
    object-fit: contain; 
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 1.5rem;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
</style>
  