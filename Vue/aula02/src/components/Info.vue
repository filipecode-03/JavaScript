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
    </div>
</template>

<script>

    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: true
            }
        }
    }

</script>