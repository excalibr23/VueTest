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
            <div>Product Name: {{item.productName}}</div>
            <div>Description: {{item.description}}</div>
            <div>Manufacturer: {{item.manufacturer}}</div>
            <div>Price: ${{item.price}}</div>
            <div><button> Buy Now! </button></div>
            <br>
            </b-row>
        </b-col>
        <b-col>
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