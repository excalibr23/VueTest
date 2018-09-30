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
                v-bind:title="item.description"
                >
            <p>Product Name: {{item.productName}}</p>
            <p>Description: {{item.description}}</p>
            <p>Manufacturer: {{item.manufacturer}}</p>
            <p>Price: ${{item.price}}</p>
            <br>
            <div><button v-on:click="addItemToCart(item.itemid)"> Buy Now! </button></div>
            <br>
            <br>
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