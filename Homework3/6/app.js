Vue.createApp({
  data() {
    return {
    search: '',
    layout: 'grid',
    articles: [
{ name: 'Покемоны наше все', url:'https://pokeplus.org/publ/igra_pokemon_fire_red_chem_razlichajutsja_versii_1_0_i_1_1/2-1-0-10', 
pic:"https://pokeplus.org/_pu/0/95156148.png"  
},
 {name: 'Динозаврики', url:'https://pikabu.ru/story/20_samyikh_populyarnyikh_dinozavrov_s_kartinkami_8064374', 
pic:'https://cs14.pikabu.ru/post_img/big/2021/03/08/7/1615198239193929945.png'  
},
 {name: 'Машины', 
url:'https://avtocod.ru/blog', 
pic:'https://assets.avtocod.ru/storage/images/articles/kogda-ne-khvataet-na-novyj-avtomobil-top-5-nedorogikh-avto-s-probegom%200.jpg'  },
 {name: 'Ракеты и будущее', 
url:'https://naked-science.ru/article/nakedscience/kak-eto-rabotaet-kosmicheskie', 
pic:'https://naked-science.ru/wp-content/uploads/2016/07/field_image_00roket2016.jpg'  }]  
   };
  },
  computed:{
    filterArticles() {
       return this.articles.filter(mask => {
         return mask.name.toLowerCase().indexOf(this.search) !== -1;});
  }}

}
).mount('#app');