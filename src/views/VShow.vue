<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        change() {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<template>
    <div class="div">
        <h2>VShow</h2>
        <div class="boxes">
            <!-- v-show只是隱藏 v-if會註解掉 -->
            <div v-show="isShow" class="box box1"></div>
            <div v-if="isShow" class="box box2"></div>
        </div>
        <button type="button" @click="change">change</button>
        {{ isShow }}
    </div>
</template>

<style scoped>
.boxes {

    position: relative;
}

.box {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 60px;
}

.box1 {
    background-color: blue;
    left: 0;
}

.box2 {
    background-color: red;
    left: 100px;
}
</style>