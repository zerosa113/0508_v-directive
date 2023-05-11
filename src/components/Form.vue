<script>
export default {
    props: [
        "inputText"
    ],
    data() {
        return {
            sourceData: ""
        }
    },
    methods: {
        push() {
            console.log("456");
            this.$emit("emitPush", this.sourceData)
            this.sourceData = null
        }
    }
}
</script>

<template>
    <div class="form">
        <p>{{ sourceData }}</p>
        <form>
            <input type="text" v-model="sourceData">
            <button type="button" @click="push">Click</button>
        </form>
    </div>
</template>

<style scoped>
.form {
    border: 1px solid #000;
    padding: 4rem;
}
</style>
