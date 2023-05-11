<script>
export default {
    components: {

    },
    props: [
        // "childTitle",
        // "test123",
        "imgData",
        "title"
    ],
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="card">
        <!-- 綁定props傳來的資料 -->
        <img class="img" :src="imgData" :alt="title">
        <!-- <h2>{{ childTitle }}</h2> -->
        <h2>{{ title }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, non.
        </p>
    </div>
</template>

<style>
.card {
    width: 250px;
    border: 0;
    background-color: rgb(102, 204, 124);
    color: rgb(243, 249, 156);
    border: 0;
    border-radius: 10px;
    text-align: center;
    padding: 15px;
    margin: 5px;
}

.img {
    width: 100%;
    /* height: 200px; */
}
</style>
