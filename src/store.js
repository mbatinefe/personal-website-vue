import { reactive } from 'vue';

export const store = reactive({
    isTurkish: JSON.parse(localStorage.getItem('isTurkish')) || false,
    toggleLanguage() {
      this.isTurkish = !this.isTurkish;
      localStorage.setItem('isTurkish', JSON.stringify(this.isTurkish));
      console.log('Toggled isTurkish to:', this.isTurkish);
    }
});
