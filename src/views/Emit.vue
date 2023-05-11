<script>
import FormView from "../components/Form.vue"
export default {
    components: {
        FormView
    },
    data() {
        return {
            inputText: null
        }
    },
    methods: {
        getPush(sourceData) {
            this.inputText = sourceData;
        }
    }

}
</script>

<template>
    <div class="emit">
        <h2>Emit</h2>
        <p>{{ inputText }}</p>
        <!-- <button type="button" @click="getPush">push</button> -->
        <FormView :inputText="inputText" v-on:emitPush="getPush" />
    </div>
</template>

<style scoped>
.emit {
    height: 100%;
}
</style>
