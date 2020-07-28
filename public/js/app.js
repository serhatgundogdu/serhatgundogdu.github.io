const router = new VueRouter({
  mode: 'history',
  routes: []
});
const app = new Vue({
    el: '#app',
    data: {
      config: "",
      blog: [],
      port: [],
      education: []      
    },
    created(){
        fetch('config.json')
        .then((res) => {  
        this.config = res.json(); 
        return this.config
        }).then((res) => {
            this.blog = res.blogs;
            this.port = res.port;
            this.education = res.education;
            setTimeout(function () { this.fetchHole() 
              var swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  dynamicBullets: true,
                },
              });
            }, 3000)
            
        })
    }
  })


  
$(document).ready(function () {
  //initialize swiper when document ready
  
});