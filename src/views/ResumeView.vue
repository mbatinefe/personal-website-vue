<template>
  <div class="resume-view">
    <h2 class="text-center my-4">Resume</h2>
    <iframe src="/MustafaBatin.pdf" frameborder="0" width="100%" height="500px">
      Your browser does not support PDFs.
      <a href="/MustafaBatin.pdf">Download the PDF</a>.
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
}
</style>
