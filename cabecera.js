Vue.component('cabecera',{
    template: 
    `
    <div>
    <footer >
    
        <p class="copy">Tmotn &copy; 2020</p>
    
        <a href="https://www.instagram.com/tmo_tn/?hl=es-la"><img src="./img/icons/instagram_logo.png" alt="1"></a>
    
    </footer>
    </div>
    `
    
});

Vue.component('actualizacion',{
    template:
    `
    <p><strong>Actualización {{todo.fecha.slice(5)}}: ¡El número {{todo.fecha.slice(0,2)}} ha sido añadido!</strong></p>
    `,
    props: ['todo']
})

