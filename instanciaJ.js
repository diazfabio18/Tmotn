new Vue({
    el: '#appp',
    data: {
        lista_numerosJ: [],
        post: {
            fecha: '',
            numero: '',
            alt: '',
            enlace: '',
            parrafo: ''
        }
    },
    async created(){
        //this.cargarr(); 
        //console.log(this.lista_numeros);
        const posts = await fetch('https://server-tmotn.herokuapp.com/images/juli/all')
              .then(function(response) {
                  return response.json();
              })
  
         // console.log(this.post);
          //var q = this.post;
          //console.log(q);
                  //console.log(this.lista_numeros[0]);
                  //console.log(this.post);
  
                  for(i=(posts.length-1);i>=0;i--){
                      //console.log(posts[i]);
                      //console.log(q.fecha);
  
                      this.post = await this.supercargar(posts[i]);
                      //console.log(this.post);
                      //console.log(q);
  
                       await (this.lista_numerosJ).push(this.post);
  
                    
                  }
                  //console.log(this.lista_numerosJ);
  
  
      },
      methods: {
          //shuffle: function () {
            //this.lista_numeros = _.shuffle(this.lista_numeros);
            //this.lista_numeros = (this.lista_numeros).reverse();
          //},
          async supercargar(barra){
              //console.log(barra);
              var q = {};
              q.fecha = barra.numero + ' - ' + barra.fecha;
              q.numero = barra.imgURL;
              q.alt = barra.alt;
              q.enlace = await this.veri(barra.imgURL, barra.enlace);
              q.parrafo = barra.parrafo;
  
              return q
          },
          veri(imgurl,enlace){
              if(imgurl.substr(-3) == 'mp4'){
                  return 'video';
              }
              else{
                  return enlace;
              }
          },
          cargarr(){
              fetch('https://server-tmotn.herokuapp.com/images/all')
              .then(function(response) {
                  return response.json();
              })
              /*.then(function(posts){
                  console.log(posts[0]);
              })*/
              .then(function(posts) {
                  //console.log(myJson);
                  console.log(posts);
  
                  var post1 =  {
                      fecha: '',
                      numero: '',
                      alt: '',
                      enlace: '',
                      parrafo: ''
                  };
                  console.log(post1);
                  console.log(this.lista_numeros);
                  //console.log(this.post);
  
                  for(i in posts){
                      console.log(posts[i]);
                      (this.post).fecha = posts[i].numero + ' - ' + posts[i].fecha;
                      (this.post).numero = posts[i].imgURL;
                      (this.post).alt = posts[i].alt;
                      (this.post).enlace = posts[i].enlace;
                      (this.post).parrafo = posts[i].parrafo;
  
                      (this.lista_numeros).push(post);
                  }
  
              });
          }
        }
  })
  