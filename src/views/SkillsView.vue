<template>
  <h2 v-if="!isTurkish" class="text-center my-4">Skills</h2>
  <h2 v-else class="text-center my-4">Yetenekler</h2>
  <div class="skills container">
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
  import { store } from '@/store';  
  export default {
    name: 'SkillsView',
    computed: {
      skillCategories() {
        return store.isTurkish ? this.skillCategoriesTR : this.skillCategoriesEN;
      },
      isTurkish() {
        return store.isTurkish;
      }
    },
    data() {
      return {
        skillCategoriesEN: [
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
        ],
        skillCategoriesTR: [
          {
            category: "Programlama Dilleri",
            skills: [
              { id: 35, name: 'C++', description: 'Sistem ve uygulama geliştirmede ileri düzeyde C++ kullanımı.', level: 8 },
              { id: 21, name: 'Python', description: 'Veri analizi, makine öğrenimi ve arka uç geliştirmede yetkin Python kullanımı.', level: 8 },
              { id: 13, name: 'Java', description: 'Kurumsal uygulamalar ve Android geliştirmede iyi düzeyde Java bilgisi.', level: 3 },
              { id: 1, name: 'HTML', description: 'Web sayfası içeriği oluşturma ve yapılandırmada yetenekli HTML kullanımı.', level: 7 },
            ]
          },
          {
            category: "Web Geliştirme",
            skills: [
              { id: 4, name: 'Vue.js', description: 'İlerici web uygulamaları geliştirmede deneyimli Vue.js kullanımı.', level: 5 },
              { id: 2, name: 'JavaScript', description: 'Etkileşimli web uygulamaları için derin JavaScript anlayışı.', level: 7 },
              { id: 3, name: 'CSS', description: 'Stil ve dinamik düzenler için CSS uzmanlığı.', level: 7 },
              { id: 5, name: 'Express.js', description: 'Verimli web API’leri inşa etmede Express.js kullanımı.', level: 5 },
              { id: 7, name: 'RESTful API Geliştirme', description: 'RESTful hizmetler tasarlama ve uygulama.', level: 5 },
            ]
          },
          {
            category: "Yazılım Geliştirme",
            skills: [
              { id: 10, name: 'Proje Yönetimi', description: 'Yazılım projelerini kavramdan dağıtıma kadar yönetme.', level: 8 },
              { id: 12, name: 'Yazılım Geliştirme Yaşam Döngüsü', description: 'Tam yazılım geliştirme yaşam döngüsüne kapsamlı bir anlayış.', level: 8 },
              { id: 14, name: 'Soket Programlama', description: 'Soketler kullanarak düşük seviyeli ağ iletişimi konusunda tecrübe.', level: 5 },
              { id: 15, name: 'İstemci-Sunucu Mimarisi', description: 'Karmaşık istemci-sunucu mimarilerini anlama.', level: 4 },
            ]
          },
          {
            category: "Veri Bilimi & Makine Öğrenimi",
            skills: [
              { id: 22, name: 'Sinir Ağı Uygulamaları', description: 'Çeşitli uygulamalar için sinir ağları oluşturma ve eğitme.', level: 6 },
              { id: 23, name: 'PyTorch', description: 'Derin öğrenme projelerinde PyTorch kullanımı.', level: 6 },
              { id: 24, name: 'Numpy ile Veri İşleme', description: 'Numpy ile etkin veri işlemleri.', level: 6 },
              { id: 25, name: 'Makine Öğrenimi Temelleri', description: 'Temel makine öğrenimi kavramlarında güçlü bir temel.', level: 7 },
              { id: 26, name: 'Derin Öğrenme', description: 'Karmaşık problemleri çözmek için derin öğrenme algoritmaları uygulama.', level: 6 },
              { id: 27, name: 'Veri Analizi', description: 'Python ile ileri düzey veri analizi teknikleri.', level: 8 },
              { id: 28, name: 'Pandas Kütüphanesi', description: 'Veri manipülasyonu ve analizi için Pandas kullanımı.', level: 5 },
              { id: 29, name: 'Veri Görselleştirme', description: 'Matplotlib ve diğer araçlarla etkileyici veri görselleştirmeleri oluşturma.', level: 7 },
              { id: 30, name: 'Matplotlib', description: 'Matplotlib ile statik ve etkileşimli grafikler üretme.', level: 4 },
              { id: 31, name: 'Veri Kazıma', description: 'Analiz ve raporlama için web kaynaklarından veri çıkarma.', level: 7 },
              { id: 32, name: 'Web Veri Çıkarma', description: 'Çeşitli web platformlarından veri çıkarma işlemlerini otomatikleştirme.', level: 7 },
              { id: 33, name: 'Otomatik Veri İşleme', description: 'Veri işleme iş akışlarını otomatikleştirme.', level: 7 },
              { id: 34, name: 'Coğrafi Veri Analizi', description: 'Coğrafi verileri analiz etme ve görselleştirme.', level: 6 },
            ]
          },
          {
            category: "Blockchain Teknolojileri",
            skills: [
              { id: 45, name: 'Solidity Programlama', description: 'Ethereum tabanlı uygulamalar için akıllı kontratlar geliştirme.', level: 4 },
              { id: 46, name: 'Akıllı Kontrat Geliştirme', description: 'Çeşitli blockchain platformlarında akıllı kontratlar tasarlama ve dağıtma.', level: 3 },
              { id: 47, name: 'Polygon Blockchain Bilgisi', description: 'Ethereum ölçeklenebilirliğini artırmak için Polygon ile çalışma.', level: 7 },
              { id: 48, name: 'IPFS ile Metadata Depolama', description: 'Blockchain uygulamalarında merkezi olmayan dosya depolama için IPFS kullanımı.', level: 3 },
              { id: 49, name: 'Web3 Entegrasyonu', description: 'Uygulamaları merkezi olmayan web etkileşimi için Web3 teknolojileri ile entegrasyon.', level: 3 },
              { id: 50, name: 'Kriptografik Teknikler', description: 'İşlemleri ve verileri güvenli hale getirmek için kriptografik yöntemler uygulama.', level: 3 },
              { id: 51, name: 'Merkezi Olmayan Uygulama Geliştirme', description: 'Blockchain platformlarında merkezi olmayan uygulamalar (DApps) inşa etme.', level: 3 },
              { id: 52, name: 'Blockchain Güvenlik Uygulamaları', description: 'Blockchain uygulamalarında güvenlik en iyi uygulamalarını sağlama.', level: 3 },
              { id: 53, name: 'Token Standartları Bilgisi', description: 'ERC-20 ve ERC-721 token standartlarını anlama.', level: 3 },
              { id: 54, name: 'NFT Pazar Yeri Dağıtımı', description: 'NFT pazar yerlerini dağıtma ve yönetme.', level: 7 },
            ]
          },
        ]

      };
    },
    methods: {
      toggleLanguage() {
        store.toggleLanguage();
      }
    },
    watch: {
      isTurkish(newVal) {
        console.log(`Language switched to: ${newVal ? 'Turkish' : 'English'}`);
      }
    }
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

    padding-bottom: 40px;
    background-color: #6B6E70; 
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
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
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease-in-out;
    flex: 1;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
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
  overflow: hidden;
}

.progress-bar {
  background-color: #86C232;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

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

</style>
