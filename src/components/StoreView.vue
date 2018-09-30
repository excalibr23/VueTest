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
            <div><button> Buy Now! </button></div>
            
            <br>
            <br>
            </b-row>
        </b-col>
        <b-col>
            Items in your Shopping Cart:
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
  computed: {
      getStoreItems: function (){
          return this.$store.state.items
      }
  }
}
</script>

<style scoped>
</style>