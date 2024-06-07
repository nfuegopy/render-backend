<template>
  <div class="content">
    <div class="container">
      <h1>Items List</h1>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in items" :key="item.id">
          {{ item.name }}
          <button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
      <div class="input-group my-3">
        <input v-model="newItem" type="text" class="form-control" placeholder="Add new item" />
        <div class="input-group-append">
          <button class="btn btn-primary" @click="addItem">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemsList',
  data() {
    return {
      items: [],
      newItem: '',
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios.get('https://render-backend-ish2.onrender.com/api/items')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addItem() {
      if (this.newItem.trim() === '') {
        return;
      }
      axios.post('https://render-backend-ish2.onrender.com/api/items', { name: this.newItem })
        .then(response => {
          this.items.push(response.data);
          this.newItem = '';
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteItem(id) {
      axios.delete(`https://render-backend-ish2.onrender.com/api/items/${id}`)
        .then(() => {
          this.items = this.items.filter(item => item.id !== id);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
