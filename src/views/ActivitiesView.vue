<template>
  <h2 class="text-center my-4" v-if="isTurkish">Aktiviteler</h2>
  <h2 class="text-center my-4" v-else>Activities</h2>
  <div class="activities container">
    <div class="timeline">
      <div class="timeline-item" v-for="(activity, index) in currentActivities" :key="index">
        <div class="timeline-date">
          <span class="date-start">{{ activity.start }}</span>
          <span class="date-dash">to</span>
          <span class="date-end">{{ activity.end }}</span>
        </div>
        <div class="timeline-content">
          <div class="timeline-icon">
            <i class="fas fa-laptop-code"></i>
          </div>
          <div class="content-details">
            <h5 class="timeline-name">{{ activity.name }}</h5>
            <h6 class="timeline-title">{{ activity.title }}</h6>
            <h6 class="timeline-location">{{ activity.location }}</h6>
            <div class="timeline-details">
              <ul>
                <li v-for="detail in activity.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'ActivitiesView',
  data() {
    return {
      activitiesBackgroundEN: [

          {
              title: 'Board Member',
              name: 'Sabancı University Computer Science Society (CSS)',
              start: 'Oct 2022',
              end: 'Aug 2023',
              location: 'Istanbul, Turkiye',
              details: [
                  'Moderated education department and recruited active team members.',
                  'Searched certificate programs for members.'
              ],
          },
          {
              title: 'Student Worker',
              name: 'Summer Work and Travel Exchange',
              start: 'June 2023',
              end: 'Aug 2023',
              location: 'Massachusetts, USA',
              details: [
                  'Gained significant cultural exposure and developed global communication skills.'
              ],
          },
          {
              title: 'Student Worker',
              name: 'Summer Work and Travel Exchange',
              start: 'June 2022',
              end: 'Sept 2022',
              location: 'Massachusetts, USA',
              details: [
                  'Adapted new cultures, new friends and new impressions.'
              ],
          },
          {
              title: 'Student Worker',
              name: 'Summer Work and Travel Exchange',
              start: 'June 2021',
              end: 'Sept 2021',
              location: 'Wisconsin, USA',
              details: [
                  'Built fluent English proficiency.'
              ],
          },
          {
              title: 'Project Team',
              name: 'Sabancı University Computer Science Society (CSS)',
              start: 'Oct 2020',
              end: 'June 2021',
              location: 'Istanbul, Turkiye',
              details: [
                  'Integrated APIs for the official Discord Server.'
              ],
          },
          {
              title: 'Volunteer',
              name: 'Turk Kizilayi',
              start: 'Jan 2016',
              end: 'Jan 2018',
              location:'Istanbul, Turkiye',
              details: [
                  'Marketed blood donation campaigns in Istanbul.'
              ],

          },
          {
              title: 'Volunteer',
              name: 'Istanbul Genclik Platformu',
              start: 'Jan 2017',
              end: 'Jan 2018',
              location:'Istanbul, Turkiye',
              details: [
                  'Moderated weekly lessons for the children with disabilities.'
              ],
          }
      ],
      activitiesBackgroundTR: [
        {
            title: 'Yönetim Kurulu Üyesi',
            name: 'Sabancı Üniversitesi Bilgisayar Bilimleri Topluluğu (CSS)',
            start: 'Ekim 2022',
            end: 'Ağustos 2023',
            location: 'İstanbul, Türkiye',
            details: [
                'Eğitim bölümü yönetildi ve aktif takım üyeleri alımı yapıldı.',
                'Üyeler için sertifika programları araştırıldı.'
            ],
        },
        {
            title: 'Öğrenci - Çalışan',
            name: 'Yaz İş ve Seyahat Değişim Programı',
            start: 'Haziran 2023',
            end: 'Ağustos 2023',
            location: 'Massachusetts, ABD',
            details: [
                'Önemli kültürel maruziyet kazanıldı ve küresel iletişim becerileri geliştirildi.'
            ],
        },
        {
            title: 'Öğrenci Çalışanı',
            name: 'Yaz İş ve Seyahat Değişim Programı',
            start: 'Haziran 2022',
            end: 'Eylül 2022',
            location: 'Massachusetts, ABD',
            details: [
                'Yeni kültürler, yeni arkadaşlar ve yeni izlenimler kazanıldı.'
            ],
        },
        {
            title: 'Öğrenci Çalışanı',
            name: 'Yaz İş ve Seyahat Değişim Programı',
            start: 'Haziran 2021',
            end: 'Eylül 2021',
            location: 'Wisconsin, ABD',
            details: [
                'Akıcı İngilizce yeteneği geliştirildi.'
            ],
        },
        {
            title: 'Proje Ekibi',
            name: 'Sabancı Üniversitesi Bilgisayar Bilimleri Topluluğu (CSS)',
            start: 'Ekim 2020',
            end: 'Haziran 2021',
            location: 'İstanbul, Türkiye',
            details: [
                'Resmi Discord Sunucusu için API ler entegre edildi.'
            ],
        },
        {
            title: 'Gönüllü',
            name: 'Türk Kızılayı',
            start: 'Ocak 2016',
            end: 'Ocak 2018',
            location: 'İstanbul, Türkiye',
            details: [
                'İstanbul’da kan bağışı kampanyaları pazarlandı.'
            ],
        },
        {
            title: 'Gönüllü',
            name: 'İstanbul Gençlik Platformu',
            start: 'Ocak 2017',
            end: 'Ocak 2018',
            location: 'İstanbul, Türkiye',
            details: [
                'Engelli çocuklar için haftalık dersler yönetildi.'
            ],
        }
      ],
    };
  },
  computed: {
    isTurkish() {
      return store.isTurkish;
    },
    currentActivities() {
      return this.isTurkish ? this.activitiesBackgroundTR : this.activitiesBackgroundEN;
    }
  },
  mounted() {
    this.currentActivities = store.isTurkish ? this.activitiesBackgroundTR : this.activitiesBackgroundEN;
  },
  methods: {
    toggleLanguage() {
      store.isTurkish = !store.isTurkish;
      localStorage.setItem('isTurkish', JSON.stringify(store.isTurkish));
}
  },
  watch: {
    'store.isTurkish': {
      handler(newVal) {
        this.currentActivities = newVal ? this.activitiesBackgroundTR : this.activitiesBackgroundEN;
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
  .activities {
    padding: 20px;
;
    background-color: #3b3b3b;
  }

  .text-center {
    color: #86C232;
    font-weight: bold;
  }

  .timeline {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }

  .timeline-item {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      background-color: #222629;
      border: 1px solid #ccc; 
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
      padding: 5px;
      padding-bottom: 0;
      border-radius: 8px;

  }
 
  .timeline-name {
      display: flex;
      color: #86C232;
      width: 100%;
      margin-bottom: 15px;
  }

  .timeline-title {
    color: #fff;
    font-weight: bold;
    margin-left: 1rem;
  }

  .timeline-location {
    color: #86C232;
    font-style: italic;
    margin-top: 5px;
    margin-left: 1rem;
  }

  .timeline-icon {
    position: absolute;
    top: 0;
    left: -30px;
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
    flex-grow: 1;
    border-radius: 8px;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .timeline-details {
      color: #bbb;
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

  .date-start, .date-end {
      background-color: #86C232;
      color: white;
      font-weight: bold;
      font-style: italic;
      padding: 3px 10px;
      border-radius: 5px;
  }

  .date-dash {
      margin: 0 5px;
      color: #86C232;
      font-weight: bold;
      font-style: italic;
  }
  
  .timeline-date {
      width: 220px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 20px;
      margin-left: 20px;

  }

  @media (max-width: 768px) {
      .timeline-date {
          width: 230px;
          font-size: 0.9em;
          margin-top: 1rem;
      }

      .timeline-item {
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
      }

      .timeline-content {
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
      }

      .timeline-icon {
          margin-bottom: 10px;
      }
  }

  @media (min-width: 769px) and (max-width: 991px) {
      .timeline-date {
          width: 340px;
          font-size: 0.9em;
      }

      .timeline-content {
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
      }

      .timeline-icon {
          margin-bottom: 10px;
      }
  }
</style>