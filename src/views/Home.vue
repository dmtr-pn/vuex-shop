<template>
    <div class="container">
        <div class="row">

            <div class="col-3 pt-5" v-for="item in items" :key="item.id">
                <div class="item" v-on:click="addItem(item)">
                    <div class="item-img">
                        <img :src="require(`../assets/`+item.img+`.jpg`)" class="img-fluid rou shadow-5">
                    </div>
                    <div class="item-body">
                        <div class="item-body-name mt-2">
                            <h5>{{item.name}}</h5>
                        </div>
                        <div class="item-body-category text-muted  mt-2">{{item.category}}</div>
                        <div class="item-body-stars mt-2">
                            <i v-if="item.stars > 0" v-for="stars in item.stars" class="fas fa-star"></i><i v-for="starss in (5-item.stars)" class="far fa-star"></i>
                        </div>
                        <div class="item-body-price mt-2">
                            <h5>{{item.price.currency}} {{item.price.price}}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            items: [
                {
                    id: 0,
                    name: 'Очень крутая толстовка',
                    category: 'Толстовка',
                    stars: 3,
                    img: 1,
                    price: {
                        currency: "USD",
                        price: 100
                    },
                    info: {
                        size: "XL",
                        color: "Черный"
                    },
                    count: 0
                },
                {
                    id: 1,
                    name: 'Еще круче толстовка',
                    category: 'Толстовка',
                    stars: 4,
                    img: 2,
                    price: {
                        currency: "USD",
                        price: 550
                    },
                    info: {
                        size: "XL",
                        color: "Черный"
                    },
                    count: 0
                },
                {
                    id: 2,
                    name: 'Мерч Лепса',
                    category: 'Толстовка',
                    stars: 5,
                    img: 3,
                    price: {
                        currency: "USD",
                        price: 1000
                    },
                    info: {
                        size: "XL",
                        color: "Черный"
                    },
                    count: 0
                }
            ]
        }
    },
    methods: {
        addItem(data) {
            this.$store.dispatch('addItem', data);
        }
    }
}
</script>

<style scoped>
.item:hover {
    cursor: pointer;
}
.rou {
    border-radius: 20px;
}
</style>
