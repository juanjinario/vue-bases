// Declarative representation

const app = Vue.createApp({
    template: `
        <h1>Hola mundo</h1>
        <p>{{ 1 + 1 }}</p>
        <p>{{ 'Juanjito' + ' Calderonsito' }}</p>
    `
});
app.mount('#app');