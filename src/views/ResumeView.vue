<template>
  <h2 class="text-center my-4">{{textContent.title}}</h2>
  <div class="resume-view">

    <iframe v-if="isTurkish" src="/website-resume-mustafa_batin-EN.pdf" frameborder="0" width="100%" height="100vh">
      Your browser does not support PDFs.
      <a href="/website-resume-mustafa_batin-EN.pdf">Download the PDF</a>.
    </iframe>

    <iframe v-else src="/website-resume-mustafa_batin-EN.pdf" frameborder="0" width="100%" height="100vh">
      Your browser does not support PDFs.
      <a href="/website-resume-mustafa_batin-EN.pdf">Download the PDF</a>.
    </iframe>

    <br/>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'ResumeView',
  computed: {
      textContent() {
        return store.isTurkish
          ? { title: 'Özgeçmiş' }
          : { title: 'Resume' };
      },
      isTurkish() {
        return store.isTurkish;
      }     
    },
};
</script>

<style scoped>

h2.text-center {
  color: #86C232;
  font-weight: bold;
}

.resume-view {
  text-align: center;
  padding: 20px;
  height: calc(100vh - 40px);
}

iframe {
  width: 100%; 
  height: 80vh; 
  border: none; 
}

@media (max-width: 768px) {
  iframe {
    height: 60vh;
  }
}

</style>
