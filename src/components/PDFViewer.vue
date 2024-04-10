<template>
    <div class="pdf-viewer">
      <canvas ref="pdfCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import pdfjsLib from 'pdfjs-dist/webpack';
  
  export default {
    name: 'PDFViewer',
    props: ['pdfUrl'],
    mounted() {
      this.loadPdf();
    },
    methods: {
      async loadPdf() {
        const loadingTask = pdfjsLib.getDocument(this.pdfUrl);
        try {
          const pdf = await loadingTask.promise;
          const firstPageNumber = 1;
          const page = await pdf.getPage(firstPageNumber);
  
          const scale = 1.5;
          const viewport = page.getViewport({ scale: scale });
  
          const canvas = this.$refs.pdfCanvas;
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
  
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;
        } catch (error) {
          console.error('Error loading PDF: ', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pdf-viewer canvas {
    width: 100%;
    height: auto;
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
  }
  </style>
  