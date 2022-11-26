<template>
    <div class="container">
        <div class="row mt-5" v-if="data">
            <div class="col-6 immg">
                <img :src="require(`../assets/`+data.img+`.jpg`)" class="img-fluid rou shadow-5">
            </div>
            <div class="col-6 d-flex flex-column justify-content-between">
                <div class="up">
                    <h2>{{data.name}}</h2>
                    <div class="product__categody mt-2">{{data.category}}</div>
                    <i v-if="data.stars > 0" v-for="stars in data.stars" class="fas fa-star mt-2"></i><i v-for="starss in (5-data.stars)" class="far fa-star"></i>
                    <h2><span class="badge badge-primary mt-2"><span style="font-size: 16px">{{data.price.currency}} </span> {{data.price.price}}</span></h2>
                </div>
                <div class="down">
                    <button class="btn btn-info" style="font-size: 18px" v-on:click="addItem()">В корзину <i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
        <div class="text-center" style="margin-top: 200px" v-else>
            <i class="fas fa-times fa-10x"></i>
            <h4 class="mt-3">404</h4>
            <span>Данный товар не существует</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductPage",
    data() {
        return {
            data: null,
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
        addItem() {
            this.$store.dispatch('addItem', this.data);
        }
    },
    mounted() {
        let check = this.items.find(product => product.id == this.$route.params.id);
        if(check){
            this.data = check;
        }
    }
}
</script>

<style scoped>
.immg {
    height: 500px;
}
.rou {
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
    width: 100%;
    height: 100%;
}
.product__categody {
    font-size: 20px;
}
</style>