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
  .projects {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  </style>
  