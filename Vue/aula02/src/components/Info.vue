<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Vue</li>
            <li>React</li>
            <li>Angular</li>
        </ul>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">Clique aqui</a></p>
    </div>
</template>

<script>

    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: true,
                meu_link: 'https://google.com'
            }
        }
    }

</script>