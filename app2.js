// Events introduction

const app = Vue.createApp({
    // Option API
    // template: `
    //     <h1>Hola mundo</h1>
    //     <p>{{ 1 + 1 }}</p>
    //     <p>{{ 'Juanjito' + ' Calderonsito' }}</p>
    // `
    data() {
        return {
            message: 'Hola mundo',
            quote: 'Soy el JJ'
        }
    },
    methods: {
        changeQuote(event) {
            console.log('Hola mundo', event);
            this.quote = 'Fernando Herrera';
            this.capitalize();
        },
        capitalize() {
            this.message = this.message.toUpperCase();
        }
    },

    // Composition API with setup
    // setup() {}
});
app.mount('#app2');