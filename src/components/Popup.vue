<script >
export default {
    props: [
        "title",
        "content",
        "isShow"
    ],
    methods: {
        // 丟到外面的emit，其他頁只要v-on:emit就能使用
        changeShowOutSide() {
            this.$emit("switch")
        }
    },
    mounted() {

    }
}
</script>

<template>
    <div class="modal" :class="{ show: isShow }">

        <!-- Modal Card  -->
        <div class="modal-card">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <button type="button" @click="changeShowOutSide">Close</button>
        </div>

        <!-- Background  -->
        <div class="bg"></div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;

    .modal-card {
        background-color: #fff;
        color: black;
        width: 30vw;
        border-radius: 2rem;
        padding: 2rem;
        text-align: center;

        h2 {
            margin: 0;
        }

        button {
            width: 70px;
        }

    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 70%;
        z-index: -1;
    }
}

.show {
    opacity: 1;
}
</style>
