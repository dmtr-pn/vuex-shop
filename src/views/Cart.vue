<template>
    <div class="container mt-5">
        <div class="row" v-if="items[0]">
            <div class="col-8">
                <h3>Корзина - {{this.$store.getters.getLenght}} предметов</h3>

                <div class="item" v-for="item in items" :key="item.id">
                    <div class="item-left">
                        <div class="item-img">
                            <img :src="require(`../assets/`+item.img+`.jpg`)" class="item-img-img">
                        </div>
                        <div class="item-info">
                            <div class="item-info-name">
                                <h4>{{item.name}}</h4>
                                <div>Цвет: {{item.info.color}}</div>
                                <div>Размер: {{item.info.size}}</div>
                            </div>
                            <div class="btns">
                                <button type="button" class="btn btn-danger" v-on:click="deleteF(item.id)"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="item-count">
                        <div class="up">
                            <button type="button" class="btn btn-dark" v-on:click="remove(item.id)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="count">{{item.count}}</span>
                            <button type="button" class="btn btn-info" v-on:click="add(item.id)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="down">
                            ${{item.price.price * item.count}}
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-4">
                <h3>Сумма</h3>
                <div class="product">
                    <div class="prdct-n">Товары</div>
                    <div class="prdct-nn">${{cost}}</div>
                </div>
                <hr>
                <div class="product">
                    <div class="prdct-na">Общее</div>
                    <div class="prdct-nna">${{cost}}</div>
                </div>
                <button class="btn btn-info" style="width: 100%; margin-top: 20px">Купить</button>
            </div>
        </div>
        <div class="text-center" style="margin-top: 200px" v-else>
            <i class="fas fa-shopping-basket fa-10x"></i>
            <h4 class="mt-3">В корзине пусто</h4>
            <span>Добавьте пару товаров на главной странице</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return {
            items: this.$store.state.cart,
            cost: 0,
        }
    },
    methods: {
        add(id){
            this.$store.dispatch('addCount', id);
            this.resSum();
        },
        remove(id){
            this.$store.dispatch('removeCount', id);
            this.resSum();
        },
        resSum(){
            this.cost = 0;
            for (let i = 0; i < this.items.length; i++) {
                let price = this.items[i].count * this.items[i].price.price
                this.cost += price;
            }
        },
        deleteF(id){
            this.$store.dispatch('deleteItem', id);
        }
    },
    created() {
        this.resSum()
    },
}
</script>

<style scoped>
.prdct-na {
    font-weight: bold;
}
.prdct-nna{
    font-weight: bold;
}
.product {
    display: flex;
    justify-content: space-between;
}
.item {
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    border-radius: 20px;
    margin-bottom: 20px;
}
.item-left {
    display: flex;
    padding: 20px;
}
.item-img {
    width: 150px;
    height: 150px;
    margin-right: 20px;
}
.item-img-img {
    border-radius:  ;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.item-count {
    padding: 20px;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center!important;
}
.up {
    margin-bottom: 15px;
}
.down {
    font-weight: bold;
    font-size: 22px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.count {
    margin: 0 15px;
    font-size: 22px;
}
</style>