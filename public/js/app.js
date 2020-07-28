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
            console.log(res);
        })
    }
  })