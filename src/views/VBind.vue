<script >
export default {
    data() {
        return {
            isRounded: false,
            move: false,
            imgArr: [
                "https://images.plurk.com/70nakSJdUWGtLRDR7alQg4.png",
                "https://images.plurk.com/19IGkgMVvwL2zjnk964bSE.png",
                "../../public/img/poke.png",
                "../../public/img/5DIbVQGYPIOL1VirHquAUj.png"
            ],
            imgNum: 0,
        }
    },
    methods: {
        changeRounded() {
            this.isRounded = !this.isRounded
            this.move = !this.move
        },
        changeImg() {
            this.imgNum = this.imgNum === 1 ? 0 : 1
        }
    }
}
</script>

<template>
    <header>
        <h2>VBind</h2>
        <button type="button" @click="changeRounded">Rounded</button>
        <div class="box" v-bind:class="{
            rounded: isRounded,
            'to-right': move,
        }">
        </div>
        <button type="button" @click="changeImg">changeImg</button>
        <img class="img" v-bind:src="imgArr[this.imgNum]">
    </header>
</template>

<style scoped>
.v-bind {
    position: relative;
}

.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    position: absolute;
    top: 300px;
    left: 0;
    transition: 1s;
}

.rounded {
    border-radius: 20px;
}

.to-right {
    left: 200px;
}

.img {
    width: auto;
    height: 200px;
    border-radius: 10px;
}
</style>
