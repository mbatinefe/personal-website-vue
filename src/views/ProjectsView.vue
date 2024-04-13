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
            description: 'A Vue.js and Bootstrap 5 based personal portfolio website showcasing my projects, skills, and experiences.',
            image: '/path/to/portfolio-image.jpg', // Update path
            link: 'http://www.mbefe.com'
          },
          {
            id: 2,
            title: 'Full Stack Event Management Website',
            description: 'Event and volunteer management system designed to improve efficiency and user engagement.',
            image: '/path/to/event-management-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/event-management-full-stack'
          },
          {
            id: 3,
            title: 'Multiplayer Painting Game',
            description: 'Interactive game allowing multiple players to draw on a shared canvas in real-time.',
            image: '/path/to/painting-game-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/painting-game-with-server'
          },
          {
            id: 4,
            title: 'Mini Neural Network',
            description: 'Demonstration of neural network concepts through a simple classification task.',
            image: '/path/to/neural-network-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/neural-networks-mini'
          },
          {
            id: 5,
            title: 'Istanbul Traffic-Fuel Analysis',
            description: 'Analysis of traffic patterns and fuel usage to optimize transportation and reduce costs.',
            image: '/path/to/traffic-analysis-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/istanbul-traffic-fuel-analysis'
          },
          {
            id: 6,
            title: 'Monopoly Board Game',
            description: 'Digital version of Monopoly with enhanced gameplay features and user interface.',
            image: '/path/to/monopoly-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/monopoly-board-game'
          },
          {
            id: 7,
            title: 'Weekly Schedule Maker',
            description: 'Tool for efficiently managing and scheduling weekly tasks and appointments.',
            image: '/path/to/schedule-maker-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/schedule-maker'
          },
          {
            id: 8,
            title: 'Backgammon Game',
            description: 'Implementation of the classic board game Backgammon with a focus on AI gameplay.',
            image: '/path/to/backgammon-image.jpg', // Update path
            link: 'https://github.com/mbatinefe/backgammon'
          },
          {
            id: 9,
            title: 'NFT - Educated Ape Club',
            description: 'NFT collection on the Polygon blockchain featuring unique digital artwork.',
            image: '/path/to/nft-educated-ape-club-image.jpg', // Update path
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
    background-color: #222629; /* Light grey background */
    color: #333; /* Darker text for better readability */
    border: none; /* Removes default border */
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow for depth */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition for hover effects */
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
  
  .btn-primary {
    background-color: #86C232; /* Primary button color for 'View Project' */
    border-color: #86C232;
  }
  
  .btn-primary:hover {
    background-color: #86C232; /* Darker shade on hover */
    border-color: #86C232;
  }
  </style>
  