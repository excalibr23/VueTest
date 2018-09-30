<template>
<b-container>
<h3>Welcome to the Store!</h3>
    <b-row>
        <b-col>
            Please select the items you wish to purchase!
            <br>
            <br>
            <b-row
                v-for="item in getStoreItems"
                v-bind:key="item.itemid"
                >
                <b-card 
                    v-bind:title="item.productName"
                    v-bind:img-src="item.image"
                    img-top
                    class="mb-2"
                    style="max-width: 20rem;"
                    >
                <p class="card-text">Description: {{item.description}}</p>
                <p>Manufacturer: {{item.manufacturer}}</p>
                <p>Price: ${{item.price}}</p><button v-on:click="addItemToCart(item.itemid)"> Buy Now! </button>
                </b-card>
            </b-row>
        </b-col>
        <b-col>
            Items in your Shopping Cart:
            <b-row
                v-for="item in getStoreItems"
                v-bind:key="item.itemid"
                v-bind:title="item.description"
                >
            <p>{{item.quantity}} - {{item.productName}}: Each:{{item.price}} Total:{{item.price*item.quantity}}</p>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'StoreView',
  data: function (){
    return {
        dataHere: ''
    }
  },
  methods:{
      addItemToCart: function(itemid){
          this.$store.dispatch('addItemToCart', itemid)
      }
  },
  computed: {
      getStoreItems: function (){
          return this.$store.state.items
      }
  }
}
</script>

<style scoped>
</style>