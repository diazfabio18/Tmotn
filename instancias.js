new Vue({
    el: '#appp',
    data: {
        a: 1,
        lista_numeros: [

        ],
        lista_numerosF:[],
            cant_botons : [],
        post: {
            fecha: '',
            numero: '',
            alt: '',
            enlace: '',
            parrafo: ''
        },
        
        destacados: [
            {
                
                fecha: '24 - 25/03/20',
                numero: './numbers/24number.mp4',
                alt: 24,
                enlace: 'video',
                parrafo: 'Je t\'aime by Richard Clayderman'
            },
            {
                
                fecha: '25.2 - 29/03/20',
                numero: './numbers/25_2number.gif',
                alt: 25.2,
                enlace: '',
                parrafo: 'Especial por extensión de la cuarentena'
            },
            {
                fecha: '1 - ???',
                numero: './numbers/mystery.jpg',
                alt: 'misterio',
                enlace: '',
                parrafo: '(Cuando nos veamos)'
            }
        ]
    },
    async created(){
      const posts = await fetch('https://server-tmotn.herokuapp.com/images/all')
            .then(function(response) {
                return response.json();
            })
            //Fin promesa Javascript
            //console.log(posts);
                await this.insertar_numero(posts);
            //console.log(this.lista_numeros);
                var cantidad = (this.lista_numeros.length)/6;
        console.log(this.lista_numeros.length);
        this.botones(cantidad);
        this.boton_presionado(1);

    },
    /*created(){
        var cantidad = (this.lista_numeros.length)/6;
        console.log(this.lista_numeros.length);
        this.botones(cantidad);
        this.boton_presionado(1);
    },*/
    methods: {
        //shuffle: function () {
          //this.lista_numeros = _.shuffle(this.lista_numeros);
          //this.lista_numeros = (this.lista_numeros).reverse();
        //},
        insertar_numero: async function(posts){
            for(i=(posts.length-1);i>=0;i--){

                this.post = await this.supercargar(posts[i]);

                 await (this.lista_numeros).push(this.post);

            }

        },

        botones: async function (cantidad){
            for(var i=0;i<cantidad;i++)
            {   
                await this.cant_botons.push(i+1);
            }
        },

        
        boton_presionado: function(number){
            var item = (number -1 )*6;
            this.lista_numerosF = this.lista_numeros.slice(item, item+6);
        },



        async supercargar(barra){
            var q = {};
            q.fecha = barra.numero + ' - ' + barra.fecha;
            q.numero = barra.imgURL;
            q.alt = barra.alt;
            q.enlace = await this.veri(barra.imgURL);
            q.parrafo = barra.parrafo;

            return q
        },
        veri(imgurl){
            if(imgurl.substr(-3) == 'mp4'){
                return 'video'
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


/*
            {
                
                fecha: '29.5 - 10/05/20',
                numero: './numbers/29_5number.gif',
                alt: 29.5,
                enlace: '',
                parrafo: 'La programación lleva su tiempo, sin embargo, resultados como este son espectaculares!'
            },{
                
                fecha: '29.4 - 04/05/20',
                numero: './numbers/29_4number.png',
                alt: 29.4,
                enlace: '',
                parrafo: 'Sigo trabajando para mejorar este lugar. La cuarentena me hace pensar muchas cosas creativas! 😊'
            },{
                
                fecha: '29.3 - 29/04/20',
                numero: './numbers/29_3number.png',
                alt: 29.3,
                enlace: '',
                parrafo: 'Aunque los servidores latinoamericanos de Facebook no lo han implementado, sería una buena idea implementarlo un día de estos, o ponele 🙃'
            },{
                
                fecha: '29.2 - 24/04/20',
                numero: './numbers/29_2number.mp4',
                alt: 29.2,
                enlace: 'video',
                parrafo: 'Avances acerca del número 30! 😄. Aprendiendo cada día más, y superando mis propios límites. Edition by Kizoa'
            },{
                
                fecha: '29.1 - 22/04/20',
                numero: './numbers/29_1number.jpg',
                alt: 29.1,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '29 - 20/04/20',
                numero: './numbers/29_number.jpg',
                alt: 29,
                enlace: '',
                parrafo: 'Esta flor está naciendo en mi casa. ¿Me podes decir por favor que tipo de flor es? Gracias 😃'
            },{
                
                fecha: '28.2 - 17/04/20',
                numero: './numbers/28_2number.png',
                alt: 28.2,
                enlace: '',
                parrafo: ''
            },{
                
                fecha: '28.1 - 15/04/20',
                numero: './numbers/28_1number.png',
                alt: 28.1,
                enlace: '',
                parrafo: '♋'
            },{
                
                fecha: '28 - 10/04/20',
                numero: './numbers/28number.png',
                alt: 28,
                enlace: 'https://www.ecured.cu/Los_n%C3%BAmeros_secretos_del_amor',
                parrafo: 'Significado tocando la imagen!'
            },{
                
                fecha: '27 - 06/04/20',
                numero: './numbers/27number.png',
                alt: 27,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '26 - 02/04/20',
                numero: './numbers/26number.png',
                alt: 26,
                enlace: '',
                parrafo: 'Un transistor feliz :)'
            },
            {
                
                fecha: '25.3 - 31/03/20',
                numero: './numbers/25_3number.jpg',
                alt: 25.3,
                enlace: '',
                parrafo: 'Sólo si tu quieres'
            },{
                
                fecha: '25.2 - 29/03/20',
                numero: './numbers/25_2number.gif',
                alt: 25.2,
                enlace: '',
                parrafo: 'Especial por extensión de la cuarentena'
            },
            {
                
                fecha: '25.1 - 25/03/20',
                numero: './numbers/25_1number.jpg',
                alt: 25.1,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '25 - 26/03/20 ',
                numero: './numbers/25number.png',
                alt: 25,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '24 - 25/03/20',
                numero: './numbers/24number.mp4',
                alt: 24,
                enlace: 'video',
                parrafo: 'Je t\'aime by Richard Clayderman'
            },
            {
                
                fecha: '23 - 23/03/20',
                numero: './numbers/23number.png',
                alt: 23,
                enlace: '',
                parrafo: 'Creación de Tmotn'
            },
            {
                
                fecha: '22 - 19/03/20',
                numero: './numbers/22number.mp4',
                alt: 22,
                enlace: 'video',
                parrafo: ''
            },
            {
                
                fecha: '21 - 14/03/20',
                numero: './numbers/21number.jpg',
                alt: 21,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '20 - 11/03/20',
                numero: './numbers/20number.jpg',
                alt: 20,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '19 - 06/03/20',
                numero: './numbers/19number.jpg',
                alt: 19,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '18 - 02/03/20',
                numero: './numbers/18number.jpg',
                alt: 18,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '17 - 28/02/20',
                numero: './numbers/17number.jpg',
                alt: 17,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '16 - 24/02/20',
                numero: './numbers/16number.jpg',
                alt: 16,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '15 - 22/02/20',
                numero: './numbers/15number.jpg',
                alt: 15,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '14 - 14/02/20',
                numero: './numbers/14number.png',
                alt: 14,
                enlace: 'https://diazfabio18.github.io/San_Valentin/',
                parrafo: 'Feliz San Valentin!'
            },
            {
                
                fecha: '13 - 11/02/20',
                numero: './numbers/13number.jpg',
                alt: 13,
                enlace: '',
                parrafo: 'Feliz cumple! (adelantado)'
            },
            {
                
                fecha: '12 - 13/02/20',
                numero: './numbers/12number.jpg',
                alt: 12,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '11 - 12/02/20',
                numero: './numbers/11number.jpg',
                alt: 11,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '10 - 11/02/20',
                numero: './numbers/10number.jpg',
                alt: 10,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '9 - 10/02/20',
                numero: './numbers/9number.jpg',
                alt: 9,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '8 - 08/02/20',
                numero: './numbers/8number.jpg',
                alt: 8,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '7 - 07/02/20',
                numero: './numbers/7number.jpg',
                alt: 7,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '6 - 05/02/20',
                numero: './numbers/6number.jpg',
                alt: 6,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '5 - 04/02/20',
                numero: './numbers/5number.jpg',
                alt: 5,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '4 - 02/02/20',
                numero: './numbers/4number.jpg',
                alt: 4,
                enlace: '',
                parrafo: ''
            },
            {
                
                fecha: '3 - 24/01/2020',
                numero: './numbers/3number.jpg',
                alt: 3,
                enlace: '',
                parrafo: ''
            },
            {
                fecha: '2 - 17/01/20',
                numero: './numbers/2number.jpg',
                alt: 2,
                enlace: '',
                parrafo: ''
            
            },
            {
                fecha: '1 - ??? ',
                numero: './numbers/mystery.jpg',
                alt: 'misterio',
                enlace: '',
                parrafo: '(Cuando nos veamos)'
            }*/
        //],