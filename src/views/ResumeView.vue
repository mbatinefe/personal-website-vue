<template>
  <div class="resume-view">
    <h2 class="text-center my-4">Resume</h2>
    <iframe src="/MustafaBatin-Website-Draft.pdf" frameborder="0" width="100%" height="100vh">
      Your browser does not support PDFs.
      <a href="/MustafaBatin-Website-Draft.pdf">Download the PDF</a>.
    </iframe>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
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
