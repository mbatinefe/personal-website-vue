<template>
  <div class="resume-view">
    <h1>My Resume</h1>
   
    <iframe :src="pdfUrl" frameborder="0" width="100%" height="500px">
      Your browser does not support PDFs.
      <a :href="pdfUrl">Download the PDF</a>.
    </iframe>
    <br/>
    
    <a :href="pdfUrl" download="MustafaBatin-resume.pdf" class="btn btn-primary">Download Resume</a>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  data() {
    return {
      // Include the BASE_URL in the path for proper referencing
      pdfUrl: `${import.meta.env.BASE_URL}MustafaBatin.pdf`,
    };
  },
};
</script>

<style scoped>
.resume-view {
  text-align: center;
  padding: 20px;
}
</style>
