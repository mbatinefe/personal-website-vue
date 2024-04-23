import { reactive } from 'vue';

const initialState = JSON.parse(localStorage.getItem('isTurkish')) || false;

export const store = reactive({
    isTurkish: JSON.parse(localStorage.getItem('isTurkish')) || false,
    toggleLanguage() {
      this.isTurkish = !this.isTurkish;
      localStorage.setItem('isTurkish', JSON.stringify(this.isTurkish));
      console.log('Toggled isTurkish to:', this.isTurkish);
    }
});
