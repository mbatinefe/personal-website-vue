<template>
  <div class="language-switch">
    <div class="form-check form-switch">
      <label class="form-check-label left-label">EN</label>
      <input class="form-check-input" type="checkbox" id="langToggle" v-model="isTurkish" @change="toggleLanguage">
      <label class="form-check-label right-label" for="langToggle">TR</label> 
    </div>
  </div>

  <div class="projects container">
    <h2 v-if="!isTurkish" class="text-center my-4">Projects</h2>
    <h2 v-else class="text-center my-4">Projeler</h2>
    <div class="row">
      <div class="col-md-4" v-for="project in currentProjects" :key="project.id" >
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
        projectsTR: [
          {
            id: 1,
            title: 'Tam Kapsamlı Etkinlik Yönetimi',
            description: 'Kullanıcı etkileşimini ve verimliliği artırmak amacıyla tasarlanmış etkinlik ve gönüllü yönetim sistemi web sitesi.',
            skills: ['HTML', 'JavaScript', 'CSS', 'Vue.js', 'Express.js', 'MongoDB', 'RESTful API Geliştirme', 'Veritabanı Entegrasyonu', 'Kimlik Doğrulama Mekanizmaları', 'Proje Yönetimi', 'Tek Sayfa Uygulamaları (SPA)', 'Yazılım Geliştirme Yaşam Döngüsü'],
            image: './project-DALL-E/DALL-E-FullStackEvent.webp',
            link: 'https://github.com/mbatinefe/event-management-full-stack'
          },
          {
            id: 2,
            title: 'Çok Oyunculu Resim Oyunu',
            description: 'Çok sayıda oyuncunun gerçek zamanlı olarak ortak bir tuval üzerinde çizim yapmasına olanak tanıyan etkileşimli oyun.',
            skills: ['Java', 'Soket Programlama', 'İstemci-Sunucu Mimarisi', 'GUI Geliştirme', 'Olay Yönetimi', 'Java’da Eşzamanlılık', 'Ağ İletişimi', 'Java Uygulamalarını Hata Ayıklama'],
            image: './project-DALL-E/DALL-E-MultPaintingGame.webp',
            link: 'https://github.com/mbatinefe/painting-game-with-server'
          },
          {
            id: 3,
            title: 'Mini Sinir Ağı',
            description: 'Basit bir sınıflandırma görevi üzerinden sinir ağı kavramlarının gösterimi.',
            skills: ['Python', 'Sinir Ağı Uygulaması', 'PyTorch', 'Numpy ile Veri İşleme', 'Makine Öğrenimi Temelleri', 'Derin Öğrenme'],
            image: './project-DALL-E/DALL-E-MiniNeuralNetwork.webp',
            link: 'https://github.com/mbatinefe/neural-networks-mini'
          },
          {
            id: 4,
            title: 'İstanbul Trafik-Yakıt Analizi',
            description: 'Trafik desenlerini ve yakıt kullanımını analiz ederek ulaşımı optimize etmek ve maliyetleri azaltmak.',
            skills: ['Python', 'Veri Analizi', 'Pandas Kütüphanesi', 'Veri Görselleştirme', 'Matplotlib', 'Veri Kazıma', 'Web Verisi Çıkarma', 'Otomatik Veri İşleme', 'Coğrafi Analiz'],
            image: './project-DALL-E/DALL-E-IstanbulTraffic.webp',
            link: 'https://github.com/mbatinefe/istanbul-traffic-fuel-analysis'
          },
          {
            id: 5,
            title: 'Monopoly Tahta Oyunu',
            description: 'Geliştirilmiş oyun özellikleri ve kullanıcı arayüzüne sahip dijital Monopoly oyunu.',
            skills: ['C++ Programlama', 'Nesne Yönelimli Programlama', 'Oyun Geliştirme', 'Dinamik Bellek Yönetimi', 'Dosya G/Ç'],
            image: './project-DALL-E/DALL-E-Monopoly.webp',
            link: 'https://github.com/mbatinefe/monopoly-board-game'
          },
          {
            id: 6,
            title: 'Haftalık Program Yapıcı',
            description: 'Haftalık görevleri ve randevuları verimli bir şekilde yönetmek ve planlamak için araç.',
            skills: ['C++ Programlama', 'Algoritma Tasarımı', 'Veri Yapıları', 'C++’da Dosya G/Ç', 'Problem Çözme'],
            image: './project-DALL-E/DALL-E-Schedule.webp',
            link: 'https://github.com/mbatinefe/schedule-maker'
          },
          {
            id: 7,
            title: 'Tavla Oyunu',
            description: 'AI oyun odağı ile klasik tavla oyununun uygulaması.',
            skills: ['C++ Programlama', 'Nesne Yönelimli Programlama', 'Oyun Geliştirme', 'Mantıksal Düşünme'],
            image: './project-DALL-E/DALL-E-Backgammon.webp',
            link: 'https://github.com/mbatinefe/backgammon'
          },
          {
            id: 8,
            title: 'NFT - Educated Ape Club',
            description: 'Polygon blockchain üzerinde benzersiz dijital sanat eserlerine sahip NFT koleksiyonu.',
            skills: ['Solidity Programlama', 'Akıllı Sözleşme Geliştirme', 'Polygon Blockchain ile Tanışıklık', 'Metadata Depolama için IPFS', 'Web3 Entegrasyonu', 'Kriptografik Teknikler', 'Merkezi Olmayan Uygulama Geliştirme', 'Blockchain Güvenlik Uygulamaları', 'Token Standartları Bilgisi', 'NFT Pazar Yeri Dağıtımı'],
            image: './project-DALL-E/EducatedApeClub-Sabanci.png',
            link: 'https://opensea.io/collection/educatedapeclub'
          },
          // Diğer projeler eklenecek
        ],
        isTurkish: false,
        activeProject: null,
        currentProjects: []
      };
    },
    mounted() {
      this.currentProjects = this.projects;
    },
    methods: {
      activateProject(project) {
        this.activeProject = project;  

      },
      closeModal() {
        this.activeProject = null;
      },
      toggleLanguage() {
        this.currentProjects = this.isTurkish ? this.projectsTR : this.projects;
      }
    },
    watch: {
      isTurkish(newVal) {
        this.currentProjects = newVal ? this.projectsTR : this.projects;
      }
    }
  };
  </script>
  
<style scoped>
  .language-switch {
    position: fixed;
    top: 5px;
    right: 20px;
    display: flex;
    align-items: center;
    z-index: 1000;
    color: #86C232;
  }

  .left-label {
    margin-right: 50px;
    font-weight: bold;
  }

  .right-label {
    font-weight: bold;
  }

  .form-check-input:checked {
    background-color: #3b3b3b;
    border-color: #222629;
  }

  .form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 66, 66, 0.5);
  }

  .form-check-input:checked + .form-check-label::before {
    background-color: #222629;
  }

  .form-check-input + .form-check-label::before {
    background-color: #222629;
  }

  .language-switch .form-check-input {
    cursor: pointer;
  }

  .language-switch .form-check-label {
    cursor: pointer;
  }

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
    margin-bottom: 10px; 
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
    border: 1px solid #ccc; 
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
    height: 7rem;
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

  @media (max-width: 768px) {
  .close-btn {
      right: 1.2rem;
    }
}

</style>
  