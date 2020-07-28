const app = new Vue({
    el: '#app',
    data: {
      config: "",
      blog: [],
      port: []
    },
    created(){
        fetch('config.json')
        .then((res) => {  
        this.config = res.json(); 
        return this.config
        }).then((res) => {
            this.blog = res.blogs;
            this.port = res.port;
            console.log(res);
        })
    }
  })