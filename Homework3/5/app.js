Vue.createApp({
  data() {
    return {
      valueInput: '',
      needDoList: [{title: 'Спа-массаж',
        id: 1, cena: 1500},
{title: 'Продажа ковра',
        id: 2, cena: 500},
{title: 'Покраска',
        id: 3, cena: 700},
{title: 'Стрижка ',
        id: 4, cena: 1000},
{title: 'Массаж',
        id: 5, cena: 3000},
{title: 'Аэро-труба',
        id: 6, cena: 250},
{title: 'Грязевые ванны',
        id: 7, cena: 2500},],
      checked: []
      };
  },
  computed: {
    sum() {
      let price = 0
      for (const mask of this.checked) {
            price += mask.cena 
      }
      return { price }
    }
  },
  methods: {
   isSelected(mask) {
   	 return this.checked.indexOf(mask) >=0
   }
  }
}).mount('#app');