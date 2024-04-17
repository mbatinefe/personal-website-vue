<template>
  <div class="home">
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
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentTime: this.getCurrentTime(),
      timeOfDayGreeting: this.getTimeOfDayGreeting(),
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
  background-color: #333333; /* Light grey background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2.text-center {
  color: #86C232; /* Your brand green color */
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  color: #86C232; /* Darker text for better readability */
  font-size: 16px; /* Slightly larger font size for readability */
  line-height: 1.6; /* Improved line spacing for better reading experience */
}

a.btn-info {
  background-color: #17a2b8; /* Bootstrap info blue */
  border: none;
  padding: 10px 20px;
  color: white; /* White text for contrast */
  border-radius: 5px; /* Rounded corners for the button */
  text-decoration: none; /* Removes underline from the link */
}

a.btn-info:hover {
  background-color: #139ca3; /* Slightly darker shade on hover */
}
</style>
