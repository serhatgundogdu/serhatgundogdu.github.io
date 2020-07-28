const app = new Vue({
    el: '#app',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      config: "",
      blog: []
    },
    created(){
        fetch('./config.json')
        .then((res) => {  
        this.config = res.json(); 
        return this.config
        }).then((res) => {
            this.blog = res.blogs;
        })
    }
  })