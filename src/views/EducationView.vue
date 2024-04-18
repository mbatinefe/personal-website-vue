<template>
    <div class="education container">
      <h2 class="text-center my-4">Education</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(education, index) in educationalBackground" :key="index">
          <div class="timeline-icon">
            <i class="fas fa-school"></i>
          </div>
          <div class="timeline-content">
            <h5 class="timeline-title">{{ education.institution }}</h5>
            <p class="timeline-subtitle">{{ education.program }}</p>
            <p class="timeline-duration">{{ education.duration }}</p>
            <p class="timeline-description">{{ education.description }}</p>
            <ul class="courses-list">
              <li v-for="course in education.courses" :key="course.name">
                <a :href="course.link" target="_blank">{{ course.name }}</a>
              </li>
            </ul>
            <a :href="education.link" target="_blank" class="timeline-link">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EducationView',
    data() {
      return {
        educationalBackground: [
          {
            institution: 'Sabancı University',
            program: 'Bachelor, Computer Science and Engineering',
            duration: 'October 2020 - June 2025',
            description: 'Pursuing a major in Computer Science and Engineering with a minor in Business Analytics. Involved in various academic and extracurricular activities.',
            link: 'https://cs.sabanciuniv.edu/en/education/undergraduate',
            courses: [
                { name: 'Logic & Digital System Design - CS303', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-303' },
                { name: 'Advanced Programming - CS204', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-204' },
                { name: 'Introduction to Data Science - CS210', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-210' },  
                { name: 'Discrete Mathematics - MATH204', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MATH-204' },
                { name: 'Calculus 1 - MATH101', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MATH-101' },
                { name: 'Calculus 2 - MATH102', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MATH-102' },
                { name: 'Civic Involvement Projects - CIP101', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CIP-101' },
                { name: 'Computational Approaches to Problem Solving - IF100', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/IF-100' },
                { name: 'Humanity & Society 1 - SPS101', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/SPS-101' },
                { name: 'Humanity & Society 2 - SPS102', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/SPS-102' },
                { name: 'Introduction to Computing - CS201', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-201' },
                { name: 'Introduction to Data Analysis & Resolutions in Business - MGMT203', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MGMT-203' },
                { name: 'Introduction to Materials Science - ENS205', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/ENS-205' },
                { name: 'Introduction to Probability - MATH203', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MATH-203' },
                { name: 'Linear Algebra - MATH201', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MATH-201' },
                { name: 'Major Works of Western Art - HUM202', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/HUM-202' },
                { name: 'Principles of Atatürk 1 - HIST191', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/HIST-191' },
                { name: 'Principles of Atatürk 2 - HIST192', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/HIST-192' },
                { name: 'Project - PROJ201', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/PROJ-201' },
                { name: 'Science of Nature 1 - NS101', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/NS-101' },
                { name: 'Science of Nature 2 - NS102', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/NS-102' },
                { name: 'Turkish Language & Literature 1 - TLL101', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/TLL-101' },
                { name: 'Turkish Language & Literature 2 - TLL102', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/TLL-102' }
            ]
          },
          {
            institution: 'Management Center Innsbruck',
            program: 'Erasmus, Business and Management',
            duration: 'March 2024 - July 2024',
            description: 'Exchange program focused on business management theories and practices.',
            link: 'https://www.mci.edu/en/study/international',
            courses: [
                { name: 'Business Elective - B&M-B-5-EEM-EEM-IEL', link: 'https://www.mci4me.at/en/component/syllabi/detail/44057/23097' },
                { name: 'Innovation Management - B&M-B-4-INM-INM-ILV', link: 'https://www.mci4me.at/en/component/syllabi/detail/43552/23097' },
                { name: 'International Management - BAM-B-5-EIN-INM-SE', link: 'https://www.mci4me.at/en/component/syllabi/detail/43624/23097' },
                { name: 'Leadership - BAM-B-5-EIN-LEA-SE', link: 'https://www.mci4me.at/en/component/syllabi/detail/43625/23097' },
                { name: 'EU values & digitalisation - IFLV6571', link: 'https://www.mci4me.at/en/component/syllabi/detail/44530/23097' },
                { name: 'International Marketing - IFLV6512', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/MKTG-403' }
            ]
          },
          {
            institution: 'Hong Kong Baptist University',
            program: 'Erasmus Worldwide, Computer Science',
            duration: 'August 2023 - January 2024',
            description: 'International academic experience to enhance expertise in Computer Science.',
            link: 'https://intl.hkbu.edu.hk/student-exchange/incoming-students',
            courses: [
                { name: 'Algorithms - CS301', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-301' },
                { name: 'Artificial Intelligence - CS404', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-404' },
                { name: 'Computer Networks - CS408', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-408' },
                { name: 'Machine Learning - CS412', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-412' },
                { name: 'Software Engineering - CS308', link: 'https://www.sabanciuniv.edu/en/aday-ogrenciler/lisans/ders-katalogu/course/CS-308' }
            ]
          },
          {
            institution: 'Cozum Akademi High School',
            program: 'High School',
            duration: 'September 2018 - June 2020',
            description: 'High school focused on science, math, and university entrance exam (YKS).',
          },
          {
            institution: 'Burak Bora Anatolian High School',
            program: 'High School',
            duration: 'September 2016 - June 2018',
            description: 'Achieved top 1.06% performance in the national TEOG exam in Turkiye.',
            link: 'https://burakbora.meb.k12.tr/'
        }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
.education {
    padding: 20px;
    margin-top: 3rem;
    background-color: #3b3b3b;
}

.text-center {
    color: #86C232;
    font-weight: bold;
}

.timeline {
    position: relative;
    padding: 20px 0;
    margin-left: 40px;
}

.timeline-item {
    margin-bottom: 20px;
    position: relative;
    background-color: #222629;
    border: 1px solid #ccc; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
    padding: 5px;
    border-radius: 8px;

}

.timeline-icon {
    position: absolute;
    top: 0.5rem;
    left: -40px;
    width: 25px;
    height: 25px;
    background-color: #86C232;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.timeline-content {
    margin-left: 20px;
    border-left: 2px solid #86C232;
    
    padding-left: 20px;
    border-radius: 8px;
    padding: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.timeline-title {
    color: #fff;
    font-weight: bold;
}

.timeline-subtitle {
    color: #ccc;
    font-size: 0.9em;
}

.timeline-duration {
    color: #999;
    font-size: 0.8em;
    margin-bottom: 5px;
}

.timeline-description {
    color: #bbb;
}

.timeline-link {
    color: #86C232;
    text-decoration: none;
}

.timeline-link:hover {
    text-decoration: underline;      
}

.courses-list  {
    padding-left: 20px; 
    list-style-type: square;
}

.courses-list a {
    color: #999;
    display: flex; /* Makes the link flex container to align icon and text */
    align-items: center;
}

.courses-list a::after {
    content: '\f35d';
    font-family: 'Font Awesome 5 Free'; 
    font-weight: 900;
    padding-left: 8px;
    font-size: 0.8em; 
  }

</style>
  