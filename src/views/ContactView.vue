<template>
  <div class="contact container text-center">
    <h2 class="text-center my-4">{{ textContent.title }}</h2>
    <p class="lead">{{ textContent.lead }}</p>
    <div class="contact-links">
  
      <a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info my-2">LinkedIn</a>
      <a href="https://github.com/mbatinefe" target="_blank" class="btn btn-dark my-2">GitHub</a>
    </div>
  </div>
</template>


<script>
import { store } from '@/store';

export default {
    name: 'ContactView',
    computed: {
        textContent() {
            if (store.isTurkish) {
                return {
                    title: 'İletişim',
                    lead: 'Birlikte çalışmak ilginizi çekiyorsa veya bir sorunuz varsa benimle iletişime geçmekten çekinmeyin!'
                };
            } else {
                return {
                    title: 'Certificates',
                    lead: 'If you are interested in working together or have a question, feel free to reach out!'
                };
            }
        }
    },
};

</script>

<style scoped>

.contact {
  padding-top: 20px;
  padding-bottom: 60px;
  margin-top: 40px;
  background-color: #3b3b3b;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

h2.text-center {
  color: #86C232;
  font-weight: bold;
  }

.contact p.lead {
  font-size: 1.25rem;
  color: #DDD;
  margin-bottom: 32px;
}

.contact-links a {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  color: white; 
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.contact-links a:hover {
  opacity: 0.85;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5); 
}

.btn-primary {
  background-color: #0056b3; 
}

.btn-info {
  background-color: #1391c4;
}

.btn-dark {
  background-color: #2a2e33; 
}
</style>
