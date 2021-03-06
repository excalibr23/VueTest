import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        "image": "https://media.sweetwater.com/images/items/120/SM57-medium.jpg",
        "url": "https://www.sweetwater.com/store/detail/SM57",
        "manufacturer": "Shure",
        "productName": "Sm57",
        "itemid": "SM57",
        "quantity": 1,
        "price": 99.00,
        "description": "Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case",
        "available": 9
      },
      {
        "image": "https://media.sweetwater.com/images/guitars/SGS17HCCH/170099523/170099523-body-small.jpg",
        "url": "https://www.sweetwater.com/store/detail/SGS17HCCH/sn170099523",
        "manufacturer": "Gibson",
        "productName": "SG Standard 2017 T - Heritage Cherry",
        "itemid": "SGS17HCCH",
        "quantity": 1,
        "price": 1169.00,
        "serial": 170099523,
        "description": "Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry",
        "available": 1
      },
      {
        "image": "https://media.sweetwater.com/images/items/120/SM58-medium.jpg",
        "url": "https://www.sweetwater.com/store/detail/SM58",
        "manufacturer": "Shure",
        "productName": "SM58",
        "itemid": "SM58",
        "quantity": 3,
        "price": 99.00,
        "description": "Dynamic Vocal Microphone with Cardioid Pickup Pattern and 50Hz-15kHz Frequency Response, Includes Stand Adapter, and Zippered Carrying Case",
        "available": 6
      },
      {
        "image": "https://media.sweetwater.com/images/items/120/R16-medium.jpg",
        "url": "https://www.sweetwater.com/store/detail/R16",
        "manufacturer": "Zoom",
        "productName": "R16",
        "itemid": "R16",
        "quantity": 1,
        "price": 399.99,
        "description": "16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC",
        "available": 14
      }
    ],
    itemsInCart:[
      {
        "itemid": "R16",
        "productName": "R16",
        "quantity": 1,
        "price": 399.99
      }
    ]
  },
  mutations: {
    addItemToCart(state, itemid){
      var foundItem = state.items.findIndex(i => i.itemid === itemid)
      console.log(foundItem)
      state.items[foundItem].quantity++
    },
    removeItem(state, itemid){
      var foundItem = state.items.findIndex(i => i.itemid === itemid)
      if (state.items[foundItem].quantity > 0){
        state.items[foundItem].quantity--
      }
    },
    loadItems(state, items){
      Vue.set(state, 'items', items)
    }
  },
  actions: {
    addItemToCart({commit}, itemid){
      commit('addItemToCart', itemid)
    },
    removeItem({commit}, itemid){
      commit('removeItem', itemid)
    },
  }
})
