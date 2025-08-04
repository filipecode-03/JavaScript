<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <Info />
        <FormV />
    </div>
</template>

<script>
import Info from './Info.vue'
import FormV from './FormV.vue'

export default {
    name: 'Pessoa',
    data() {
        return {
            nome: 'Matheus'
        }
    },
    components: {
        Info,
        FormV
    }
}

</script>