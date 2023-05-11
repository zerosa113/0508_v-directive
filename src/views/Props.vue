<script >
import Child from "../components/Child.vue"
export default {
    components: {
        Child
    },
    data() {
        return {
            // title: "Props標題",
            // title2: "Test",
            cardData: [
                {
                    title: "MelonStar",
                    cardImg: "../../public/img/5DIbVQGYPIOL1VirHquAUj.png"
                },
                {
                    title: "testeat",
                    cardImg: "../../public/img/7pQeUnHu4HLgd85OUP0Xle.png"
                },
                {
                    title: "eat",
                    cardImg: "../../public/img/7fRlnrZhgF29UsZONDhPTG.png"
                }
            ]

        }
    }
}
</script>

<template>
    <h2>Props</h2>
    <div class="props-area">
        <!-- v-bind:前內後外 -->
        <!-- <Child v-bind:childTitle="title" /> -->
        <!-- <Child v-bind:test123="title2" /> -->

        <!-- 綁定Child=Props的資料 -->
        <!-- <Child :title="cardData[0].title" :imgData="cardData[0].cardImg" /> -->

        <!-- v-for取資料 v-bind綁Child與props資料 -->
        <Child v-for="card in cardData" :key="card.title" :title="card.title" :imgData="card.cardImg" />

        <!-- <div v-for="item in cardData">
            <img :src="item.cardImg" alt="">
            <h2>{{ item.title }}</h2>
            <p></p>
        </div> -->

    </div>
</template>

<style scoped>
.props-area {
    display: flex;
}
</style>
