<script >
import Popup from "../components/Popup.vue"
export default {
    components: {
        Popup
    },
    data() {
        return {
            isShow: false,
            modelInfo: {
                title: "標題",
                content: "內文"
            }
        }
    },
    methods: {
        changeShow() {
            this.isShow = !this.isShow
        }
    }
}
</script>

<template>
    <div class="modal-ex">
        <h2>Model</h2>
        <button type="button" @click="changeShow">open</button>
    </div>
    <Popup v-show="isShow" @switch="changeShow" :title="modelInfo.title" :content="modelInfo.content" :isShow="isShow" />
</template>

<style lang="scss" scoped>
.modal-ex {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
