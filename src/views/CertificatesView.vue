<template>
    <div class="language-switch">
        <div class="form-check form-switch">
        <label class="form-check-label left-label">EN</label>
        <input class="form-check-input" type="checkbox" id="langToggle" v-model="isTurkish" @change="toggleLanguage">
        <label class="form-check-label right-label" for="langToggle">TR</label> 
        </div>
    </div>

    <div class="certificates container">
        <h2 class="text-center my-4">Certificates</h2>
        <div class="grid">
            <div class="certificate-card" v-for="(certificate, index) in certificates" :key="index">
            <div class="certificate-content">
                <h5 class="certificate-title">{{ certificate.title }}</h5>
                <p class="certificate-issue">{{ certificate.issue }}</p>
                <p class="certificate-body">{{ certificate.body }}</p>
                <div class="actions">
                    <button class="icon-button" @click="openModal(certificate.image)" title="Preview certificate">
                        <i class="fas fa-eye"></i> Preview
                    </button>
                </div>
            </div>
            <a v-if="certificate.link" :href="certificate.link" target="_blank" class="btn btn-primary" title="Verify certificate">
                <i class="fas fa-check-circle"></i> Verify
            </a>
            <button v-else class="btn btn-disabled" disabled title="No link available">
                <i class="fas fa-check-circle"></i> Verify
            </button>
            </div>
        </div>
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="closeModal()">&times;</span>
                <iframe v-if="isPDF(currentImage)" :src="currentImage" style="width:100%; height:600px;" type="application/pdf">
                    This site does not accept PDFs. Please download the image: <a :href="currentImage">Download PDF</a>.
                </iframe>
                <img v-else :src="currentImage" alt="Full Certificate" class="zoom-img"/>
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
                body: '',
                link: '',
                image: './certificates/hsbc-step-up-mustafa-batin.jpg',
                issue: 'April 2024'
                },
                {
                title: 'Machine Learning Specialization',
                body: '',
                link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/7LYXGR4N2WWM?trk=public_profile_see-credential',
                image: './certificates/Coursera 7LYXGR4N2WWM.jpg',
                issue: 'Jan 2024'
                },
                {
                title: 'Yarınlar Seninle Mümkün',
                body: '',
                link: '',
                image: './certificates/yarinlar-seninle-mumkun_katilim-sertifikası-mustafa-batin.jpg',
                issue: 'April 2024'
                }, 
                {
                title: 'Advanced Learning Algorithms',
                body: '',
                link: 'https://www.coursera.org/account/accomplishments/certificate/GKMDLX3RLMA6?trk=public_profile_see-credential',
                image: './certificates/Coursera GKMDLX3RLMA6.jpg',
                issue: 'Jan 2024'
                },
                {
                title: ' Unsupervised Learning, Recommenders, Reinforcement Learning',
                body: '',
                link: 'https://www.coursera.org/account/accomplishments/verify/GW2ASK54M97S?trk=public_profile_see-credential',
                image: './certificates/Coursera GW2ASK54M97S.jpg',
                issue: 'Jan 2024'
                },
                {
                title: 'Supervised Machine Learning: Regression and Classification',
                body: '',
                link: 'https://www.coursera.org/account/accomplishments/certificate/NX53ER32M3EQ?trk=public_profile_see-credential',
                image: './certificates/Coursera NX53ER32M3EQ.jpg',
                issue: 'Mar 2023'
                },
                {
                title: 'Programming for Everybody (Getting Started with Python)',
                body: '',
                link: 'https://tr.linkedin.com/in/coursera.org/verify/Q7WFH7TGLBDN?trk=public_profile_see-credential',
                image: './certificates/Coursera Q7WFH7TGLBDN.jpg',
                issue: 'Dec 2020'
                },
                {
                title: 'Career Essentials in Cybersecurity by Microsoft and LinkedIn',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/9706c23331ab50689cd0c6334ec42366521083fc3a04228c37f7d45192616a96?trk=public_profile_see-credential',
                image: './certificates/CertificateOfCompletion_Career Essentials in Cybersecurity by Microsoft and LinkedIn.jpg',
                issue: 'Jan 2024',
                },
                {
                title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/a99d6ebb48adddaafd807a7af3bf90f1b6f5463d2ee3bebf1f08fc0cd009b13e',
                image: './certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.jpg',
                issue: 'April 2024',
                },
                {
                title: 'Cybersecurity Awareness: Cybersecurity Terminology',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/37f9fca201c7186e9a7576a908eb068a7181eafcf87ea404ceac0ea87decdb18?trk=public_profile_see-credential',
                image: './certificates/cybersec-awareness.jpeg',
                issue: 'Jan 2024'
                },
                {
                title: 'Ethical Hacking: Introduction to Ethical Hacking',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/0099df67a52a0f5f0ef34fc155a6964c68f25cab62a347c54a11e8adc28c312b?trk=public_profile_see-credential',
                image: './certificates/cybersec-ethical.jpeg',
                issue: 'Jan 2024'
                },
                {
                title: 'Cybersecurity Foundations',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/799307c72934e3986ce9bf8c1e02fa25e305e53a27bf7169c7aa5951b86b5968?trk=public_profile_see-credential',
                image: './certificates/cybersec-foundations.jpeg',
                issue: 'Jan 2024'
                },
                {
                title: 'Stealth Penetration Testing with Advanced Enumeration',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/c0ff34ca9a007398af67c5ba6b2fd2277ad7b1be356119568c0a93dbc7c877d6?trk=public_profile_see-credential',
                image: './certificates/cybersec-test.jpeg',
                issue: 'Jan 2024'
                },
                {
                title: 'The Cybersecurity Threat Landscape',
                body: '',
                link: 'https://www.linkedin.com/learning/certificates/b637777ac4700dfbdd2331a869dd49206be9cbe295d8d60b7f1d681a061ac838?trk=public_profile_see-credential',
                image: './certificates/cybersec-threat.jpeg',
                issue: 'Jan 2024'
                },

                // Additional certificates
            ],
            showModal: false,
            currentImage: null,
            };
        },
    methods: {
        openModal(imageUrl) {
            console.log("Opening modal with image URL:", imageUrl);
            this.currentImage = imageUrl;
            this.showModal = true;
            console.log("Modal open state:", this.showModal);
        },
        closeModal() {
            console.log("Closing modal.");
            this.showModal = false;
            console.log("Modal open state:", this.showModal);
        },
        isPDF(url) {
            return url.toLowerCase().endsWith('.pdf');
        },
        checkPDFSupport() {
            let canvas = document.createElement('canvas');
            return !!canvas.getContext && canvas.getContext('2d') && window.FileReader && window.atob;
        }
    }
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

.certificate-issue {
    color: #86C232;
    margin-top: 0.5rem;
    font-style: italic;
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
    background: #222629;
    border: 2px solid #ccc;
    padding-top: 50px;
    border-radius: 10px;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
}

.close {
    position: absolute;
    top: 2px;
    right: 10px;
    font-size: 40px; 
    cursor: pointer;
    color: red; 
    border: #4CAF50;
}

.close:hover {
    color: green; 
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
    text-align: center;
    padding: 10px 0;
    margin-top: auto;
}

.btn-primary:hover {
    background-color: #74a131;
    border-color: #74a131;
}

.btn-disabled {
    background-color: #ccc;
    color: #666;
    border-color: #ccc;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    margin-top: auto;
    cursor: not-allowed;
}


</style>
