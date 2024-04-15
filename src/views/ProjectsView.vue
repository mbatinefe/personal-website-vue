<template>
  <div class="projects container">
    <h2 class="text-center my-4">Projects</h2>
    <div class="row">
      <div class="col-md-4" v-for="project in projects" :key="project.id">
        <div class="card mb-4">
          <img :src="project.image" class="card-img-top" alt="Project Image">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="skills-container">
              <span class="badge bg-secondary" v-for="skill in project.skills" :key="skill">{{ skill }}</span>
            </div>
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
            title: 'Full Stack Event Management',
            description: 'Event and volunteer management system website designed to improve efficiency and user engagement.',
            skills: ['HTML','JavaScript','CSS','SDLC','Vue.js', 'Node.js', 'Express', 'MongoDB'],
            image: './project-DALL-E/DALL-E-FullStackEvent.webp',
            link: 'https://github.com/mbatinefe/event-management-full-stack'
          },
          {
            id: 2,
            title: 'Multiplayer Painting Game',
            description: 'Interactive game allowing multiple players to draw on a shared canvas in real-time.',
            image: './project-DALL-E/DALL-E-MultPaintingGame.webp', 
            link: 'https://github.com/mbatinefe/painting-game-with-server'
          },
          {
            id: 3,
            title: 'Mini Neural Network',
            description: 'Demonstration of neural network concepts through a simple classification task.',
            image: './project-DALL-E/DALL-E-MiniNeuralNetwork.webp', 
            link: 'https://github.com/mbatinefe/neural-networks-mini'
          },
          {
            id: 4,
            title: 'Istanbul Traffic-Fuel Analysis',
            description: 'Analysis of traffic patterns and fuel usage to optimize transportation and reduce costs.',
            image: './project-DALL-E/DALL-E-IstanbulTraffic.webp', 
            link: 'https://github.com/mbatinefe/istanbul-traffic-fuel-analysis'
          },
          {
            id: 5,
            title: 'Monopoly Board Game',
            description: 'Digital version of Monopoly with enhanced gameplay features and user interface.',
            image: './project-DALL-E/DALL-E-Monopoly.webp', 
            link: 'https://github.com/mbatinefe/monopoly-board-game'
          },
          {
            id: 6,
            title: 'Weekly Schedule Maker',
            description: 'Tool for efficiently managing and scheduling weekly tasks and appointments.',
            image: './project-DALL-E/DALL-E-Schedule.webp',  
            link: 'https://github.com/mbatinefe/schedule-maker'
          },
          {
            id: 7,
            title: 'Backgammon Game',
            description: 'Implementation of the classic board game Backgammon with a focus on AI gameplay.',
            image: './project-DALL-E/DALL-E-Backgammon.webp', 
            link: 'https://github.com/mbatinefe/backgammon'
          },
          {
            id: 8,
            title: 'NFT - Educated Ape Club',
            description: 'NFT collection on the Polygon blockchain featuring unique digital artwork.',
            image: './project-DALL-E/EducatedApeClub-Sabanci.png', 
            link: 'https://opensea.io/collection/educatedapeclub'
          },
          // I will add other projects
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

  .projects {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  
  .card {
    background-color: #222629; 
    color: #333; 
    border: none; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; 
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
  }
  
  .btn-primary:hover {
    background-color: #86C232;
    border-color: #86C232;
  }


  .skills-container {
    display: flex;
    justify-content: center; /* Center the badges horizontally */
    flex-wrap: wrap; /* Allow the badges to wrap */
    margin-bottom: 10px; /* Spacing below the badge container */
  }

  .badge {
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: white;
    background-color: #86C232; 
  }

</style>
  