<template>
  <div class="language-switch">
    <div class="form-check form-switch">
      <label class="form-check-label left-label">EN</label>
      <input class="form-check-input" type="checkbox" id="langToggle" v-model="isTurkish" @change="toggleLanguage">
      <label class="form-check-label right-label" for="langToggle">TR</label> 
    </div>
  </div>
  <div class="home" v-if="!isTurkish">
    <h2 class="text-center my-4"> Welcome to My Portfolio</h2>
    <div class="header-with-clock">
      <div class="digital-clock">{{ currentTime }}</div>
    </div>
    <p>{{ timeOfDayGreeting }}! This is <strong>Mustafa Batın Efe</strong>, an enthusiastic Computer Science student at Sabancı University, specializing in Machine Learning, Cybersecurity, and Blockchain technologies. Currently based in Istanbul, I am deeply engaged in integrating cutting-edge technological solutions with real-world applications.</p>
    <p><strong>Specialist in Cutting-Edge Technologies:</strong> Passionate about Machine Learning, Cybersecurity, and Blockchain. My projects range from developing mini neural networks to NFT projects based on blockchain technology, showcasing my ability to innovate and enhance efficiencies using complex technologies.</p>
    <p><strong>Global Experience and Leadership:</strong> With academic experiences in Austria and Hong Kong, I've gained a global perspective that enhances my understanding of technological landscapes worldwide. As a former board member of the Sabancı University Computer Science Society, I've fostered an educational environment that encourages advanced technological learning.</p>
    <p><strong>Dedication to Lifelong Learning:</strong> My journey of continuous learning through courses in machine learning, AI, and cybersecurity is evidenced by my certifications from Coursera and Microsoft. This ongoing education keeps me at the forefront of technological advancements.</p>
    <p><strong>Community Involvement:</strong> Committed to service, I participate in initiatives like Türk Kızılayı to support vital community services such as blood donation campaigns.</p>
    <p>I invite you to explore the projects and experiences that define my professional path as a Software Engineer. Connect with me on LinkedIn for collaborations. Discover how we can drive innovations together in Machine Learning, Cybersecurity, and Blockchain!</p>
    <a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info mt-4">Connect on LinkedIn</a>
  </div>

  <div class="home" v-else>
    <h2 class="text-center my-4">Portföyüme Hoş Geldiniz</h2>
    <div class="header-with-clock">
      <div class="digital-clock">{{ currentTime }}</div>
    </div>
    <p>{{ timeOfDayGreetingTR }}! Ben <strong>Mustafa Batın Efe</strong>, Sabancı Üniversitesi'nde Bilgisayar Bilimi öğrencisiyim ve Makine Öğrenimi, Siber Güvenlik ve Blockchain teknolojileri alanlarında uzmanlaşmaktayım. Şu anda İstanbul'da bulunuyorum ve teknolojik çözümleri gerçek dünya uygulamalarıyla entegre etmeye büyük bir ilgi duyuyorum.</p>
    <p><strong>Yeni Teknolojilerde Uzman:</strong> Makine Öğrenimi, Siber Güvenlik ve Blockchain konularında tutkuluyum. Projelerim, blockchain teknolojisi temelinde NFT projelerinden mini sinir ağları geliştirmeye kadar uzanmakta ve karmaşık teknolojileri kullanarak yenilik yapma ve verimlilikleri artırma yeteneğimi sergilemektedir.</p>
    <p><strong>Küresel Deneyim ve Liderlik:</strong> Avusturya ve Hong Kong'daki akademik deneyimlerim, dünya çapında teknolojik manzaraların anlaşılmasını artıran küresel bir perspektif kazandırmıştır. Sabancı Üniversitesi Bilgisayar Bilimi Topluluğu'nun eski bir yönetim kurulu üyesi olarak, ileri teknolojik öğrenmeyi teşvik eden bir eğitim ortamı oluşturdum.</p>
    <p><strong>Ömür Boyu Öğrenmeye Adanmışlık:</strong> Makine öğrenimi, AI ve siber güvenlik kursları aracılığıyla sürekli öğrenme yolculuğum, Coursera ve Microsoft'tan aldığım sertifikalarla kanıtlanmıştır. Bu sürekli eğitim, beni teknolojik ilerlemelerin ön saflarında tutmaktadır.</p>
    <p><strong>Toplum Katılımı:</strong> Türk Kızılayı gibi inisiyatiflere katılarak önemli toplum hizmetlerini desteklemeye adanmış durumdayım, örneğin kan bağışı kampanyaları.</p>
    <p>Yazılım Mühendisi olarak profesyonel yolculuğumu tanımlayan projeleri ve deneyimleri keşfetmek için sizi davet ediyorum. LinkedIn üzerinden işbirliği için benimle iletişime geçebilirsiniz. Makine Öğrenimi, Siber Güvenlik ve Blockchain'de birlikte nasıl yenilikler yapabileceğimizi keşfedelim!</p>
    <a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info mt-4">LinkedIn'de Bağlantı Kurun</a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentTime: this.getCurrentTime(),
      isTurkish: false,
      timeOfDayGreeting: this.getTimeOfDayGreeting(),
      timeOfDayGreetingTR: this.getTimeOfDayGreetingTR(),
    };
  },
  created() {
    this.startClock();
  },
  methods: {
    getTimeOfDayGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good Morning';
      if (hour < 18) return 'Good Afternoon';
      return 'Good Evening';

    },
    getTimeOfDayGreetingTR() {
      const hour = new Date().getHours();
      if (hour < 12) return 'Günaydın';
      if (hour < 18) return 'Tünaydın';
      return 'İyi Akşamlar'; 
    
    },
    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    },
    startClock() {
      setInterval(() => {
        this.currentTime = this.getCurrentTime();
      }, 1000);
    }
  },
  
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

  .header-with-clock {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .digital-clock {
    background: #222629;
    color: #86C232;
    padding: 10px;
    font-size: 1.5em;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
  }

  .home {
    text-align: center;
    margin-top: 20px;
    background-color: #333333; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2.text-center {
    color: #86C232; 
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    color: #86C232; 
    font-size: 16px; 
    line-height: 1.6; 
  }

  a.btn-info {
    background-color: #17a2b8; 
    border: none;
    padding: 10px 20px;
    color: white;
    border-radius: 5px; 
    text-decoration: none;
  }

  a.btn-info:hover {
    background-color: #139ca3; 
  }
</style>
