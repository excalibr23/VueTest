<template>
<b-container>
<h3>Welcome to the Store!</h3>
<br><br>
    <b-row>
        <b-col cols="4">
            <h5>Please select the items you wish to purchase!</h5>
            <br>
            <br>
            <b-row
                v-for="item in getStoreItems"
                v-bind:key="item.itemid"
                >
                <b-card 
                    v-bind:title="item.productName"
                    class="mb-2"
                    style="max-width: 20rem;"
                    
                    >
                <p class="card-text">Description: {{item.description}}</p>
                <p>Manufacturer: {{item.manufacturer}}</p>
                <p>Price: ${{item.price}}</p><button v-on:click="addItemToCart(item.itemid)"> Buy Now! </button>
                </b-card>
            </b-row>
        </b-col>
        <b-col cols="8">
            <h5>Items in your Shopping Cart:</h5>
            <br><br>
            <b-row
                v-for="item in getStoreItems"
                v-if="item.quantity > 0"
                v-bind:key="item.itemid"
                v-bind:title="item.description"
                >
                <p>{{item.quantity}} - {{item.productName}}: Each:{{item.price}} Total:{{item.price*item.quantity}}</p>
                <button v-on:click="removeItem(item.itemid)">Remove Item</button>
            </b-row>
            <br><br>
            <div>Total Cost: {{getCostofItems}}</div>
            <button v-on:click="saveFile()">Save Your Cart</button>
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
  created(){
      var loadedItems = JSON.parse(window.localStorage.getItem('arr'))
      if (loadedItems){
        this.$store.commit('loadItems', loadedItems)
      }
  },
  methods:{
      addItemToCart: function(itemid){
          this.$store.dispatch('addItemToCart', itemid)
      },
      removeItem: function(itemid){
          this.$store.dispatch('removeItem', itemid)
      },
      saveFile: function() {
        const data = JSON.stringify(this.$store.state.items)
        window.localStorage.setItem('arr', data);
      },
  },
  computed: {
      getStoreItems: function (){
          return this.$store.state.items
      },
      getCostofItems: function(){
          var allItems = this.$store.state.items
          var total = 0
          allItems.forEach(function(item){
              total += (item.quantity * item.price)
          })
          return total
      }
  }
}
</script>

<style scoped>
</style>