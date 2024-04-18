<template>
    <div class="certificates container">
        <h2 class="text-center my-4">Certificates</h2>
        <div class="grid">
            <div class="certificate-card" v-for="(certificate, index) in certificates" :key="index">
            <div class="certificate-content">
                <h5 class="certificate-title">{{ certificate.title }}</h5>
                <p class="certificate-body">{{ certificate.body }}</p>
                <div class="actions">
                <button class="icon-button" @click="openModal(certificate.image)" title="Preview certificate">
                    <i class="fas fa-eye"></i> Preview
                </button>
                <a :href="certificate.link" target="_blank" class="btn btn-primary" title="Verify certificate">
                    <i class="fas fa-check-circle"></i> Verify
                </a>
                </div>
            </div>
            </div>
        </div>
        <div v-if="showModal" class="modal">
            <div class="modal-content">
            <span class="close" @click="closeModal()">&times;</span>

            <object v-if="isPDF(currentImage)" :data="currentImage" type="application/pdf" width="100%" height="600px">
                This browser does not support PDFs. Please download the PDF to view it: <a :href="currentImage">Download PDF</a>.
            </object>
            <img v-else :src="currentImage" alt="Full Certificate" class="full-image"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'CertificatesView',
        data() {
            return {
            certificates: [
                {
                title: 'HSBC StepUp Adım Adım Bankacılık Programı',
                body: 'Completed the StepUp Banking Program by HSBC in April 2024.',
                link: 'https://example.com/certificate-link',
                image: './certificates/hsbc-step-up-mustafa-batin.pdf'
            },
                {
                title: 'Career Essentials in Cybersecurity by Microsoft and LinkedIn',
                body: 'Accredited by Microsoft and LinkedIn, February 2024.',
                link: 'https://example.com/certificate-link',
                image: './certificates/CertificateOfCompletion_Career Essentials in Cybersecurity by Microsoft and LinkedIn.pdf'
                },
                {
                title: 'Machine Learning Specialization',
                body: 'Advanced series completed on Coursera, March 2023.',
                link: 'https://example.com/certificate-link',
                image: './certificates/Coursera 7LYXGR4N2WWM.pdf'
                },
                {
                title: 'Yarınlar Seninle Mümkün',
                body: 'Awarded for successful participation to the program, a collaborative initiative under the Sabancı Republic Mobilization involving Çimsa, Enerjisa Energy, SabancıDx, Sabancı University, and Bilim Virusu.',
                link: 'https://example.com/certificate-link',
                image: './certificates/Coursera 7LYXGR4N2WWM.pdf'
                },
                {
                title: 'Advanced Learning Algorithms',
                body: 'Awarded for successful participation to the program, a collaborative initiative under the Sabancı Republic Mobilization involving Çimsa, Enerjisa Energy, SabancıDx, Sabancı University, and Bilim Virusu.',
                link: 'https://example.com/certificate-link',
                image: './certificates/Coursera GKMDLX3RLMA6.pdf'
                },
                // Additional certificates
            ],
            showModal: false,
            currentImage: null,
            };
        },
    methods: {
        openModal(imageUrl) {
            this.currentImage = imageUrl;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        isPDF(url) {
            return url.toLowerCase().endsWith('.pdf');
        }
    }
};

</script>

<style scoped>

.certificates {
    padding: 20px;
    background-color: #3b3b3b;
    margin-top: 3rem;
}

.text-center {
    color: #86C232;
    font-weight: bold;
}

.certificate-title {
    color: #fff;
    font-weight: bold;
}

.certificate-body {
    color: #bbb;
    margin-top: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
}

.certificate-card {
    background-color: #222629;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.icon-button {
    background: none;
    border: none;
    margin-bottom: 1rem;
    flex: 1;
    text-align: center;
    color: #4CAF50;
    cursor: pointer;
    font-size: 1.1em;

}

.icon-button:hover {
    text-decoration: underline;
}

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    background: #86C232;
    padding: 20px;
    padding-top: 50px;
    border-radius: 10px;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
}
.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px; 
    cursor: pointer;
    color: black; 
    border: #4CAF50;
}

.close:hover {
    color: red; 
}

.full-image {
    width: 100%;
    height: auto;   
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}


.btn-primary {
    background-color: #86C232;
    border-color: #86C232;
    width: 100%;
    text-align: center; /* Center text within the button */
    padding: 10px 0; /* Adds padding for better visual */
    margin-top: auto; /* Pushes the button to the bottom */
}

.btn-primary:hover {
    background-color: #86C232;
    border-color: #86C232;
}

</style>
