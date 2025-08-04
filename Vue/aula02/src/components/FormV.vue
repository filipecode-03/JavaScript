<template>
    <div>
        <h2>Meu Formulário:</h2>
        <form action="">
            <div>
                <InputText />
            </div>
            <div>
                <InputText />
            </div>
            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>

<script>
import InputText from './form/InputText'
import Submit from './form/Submit'

export default {
    name: 'FormV',
    components: {
        InputText,
        Submit
    }
}

</script>