<template>
  <div class="language-switch">
      <div class="form-check form-switch">
      <label class="form-check-label left-label">EN</label>
      <input class="form-check-input" type="checkbox" id="langToggle" v-model="isTurkish" @change="toggleLanguage">
      <label class="form-check-label right-label" for="langToggle">TR</label> 
      </div>
  </div>

  <div class="resume-view">
    <h2 class="text-center my-4">Resume</h2>
    <iframe src="/website-resume-mustafa_batin.pdf" frameborder="0" width="100%" height="100vh">
      Your browser does not support PDFs.
      <a href="/website-resume-mustafa_batin.pdf">Download the PDF</a>.
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
