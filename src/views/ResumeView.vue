<template>
    <div class="resume-view">
      <h1>My Resume</h1>
      <iframe src="/public/MustafaBatin.pdf" frameborder="0" width="100%" height="500px">
        Your browser does not support PDFs.
        <a href="/public/MustafaBatin.pdf">Download the PDF</a>.
      </iframe>
      <br/>
      <a href="/public/MustafaBatin.pdf" download="MustafaBatin.pdf" class="btn btn-primary">Download Resume</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResumeView',
  };
  </script>
  
  <style scoped>
  .resume-view {
    text-align: center;
    padding: 20px;
  }
  </style>
  
  