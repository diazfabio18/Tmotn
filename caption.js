

Vue.component('figura',{
    props:[
        'numero','fecha','alt','enlace','pp'
    ],
    template:
    `
    <div>

        <a :href="enlace" v-if="enlace !== '' && enlace !== 'video'">
            <img :src="numero" :alt="alt"/>
        </a>
        
        <img loading="lazy" :src="numero" :alt="alt" v-else-if="enlace !== 'video'" />

        <video preload="none" :src="numero"  controls :alt="alt" v-else />

            <h4 class="des">{{fecha}}</h4>

            <hr v-if="pp !== ''"/>

            <p style="text-align: center;" class="des" v-if="pp !== ''">{{pp}}</p>

        
    </div>
    `
})
