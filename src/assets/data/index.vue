<template>
  <div class="main-content">
    <div v-for="group in groups" :key="group.titleId" class="group">
      <div class="group-title">{{ group.title }}</div>
      <div class="item-list">
        <div v-for="item in group.items" :key="item.itemId" class="item">
          <div class="item-img-placeholder">
            <img v-if="item.image && typeof item.image === 'string' && item.image.trim() !== ''" :src="getPublicImgUrl(item.image)" alt="" />
          </div>
          <div class="item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const groups = ref([])

function getPublicImgUrl(img) {
  if (!img || typeof img !== 'string' || img.trim() === '') return '';
  return import.meta.env.BASE_URL + 'assets/images/' + img;
}

onMounted(async () => {
  const res = await fetch(import.meta.env.BASE_URL + 'assets/json/data.json')
  groups.value = await res.json()
})
</script>

<style scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background: #fff;
}

.main-content {
  width: 90vw;
  margin-left: 5vw;
  margin-right: 5vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 24px 0;
}

.group {
  margin-bottom: 32px;
  background: #282828;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}

.group-title {
  background: #e65100;
  color: #fff;
  font-size: 22px;
  padding: 8px 0;
  text-align: center;
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px 24px;
  padding: 16px 0;
  box-sizing: border-box;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-width: 0;
  margin-bottom: 8px;
  cursor: pointer;
}

.item-img-placeholder {
  width: 80px;
  height: 80px;
  background: #fff3e0;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border 0.2s, background 0.2s;
}

.item-img-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-name {
  color: #fff;
  font-size: 16px;
  text-align: center;
  word-break: break-all;
  background: transparent;
  border-radius: 4px;
  padding: 0 2px;
  transition: background 0.2s, color 0.2s;
}

.item:hover .item-img-placeholder {
  border: 2px solid #ff7043;
  background: #ff7043;
}

.item:hover .item-name {
  background: #ff7043;
  color: #fff;
}

@media (max-width: 900px) {
  .main-content {
    width: 98vw;
    margin-left: 1vw;
    margin-right: 1vw;
    padding: 12px 0;
  }
  .item-list {
    gap: 12px 8px;
  }
  .item {
    width: 70px;
  }
  .item-img-placeholder {
    width: 56px;
    height: 56px;
  }
  .item-name {
    font-size: 14px;
  }
}
</style> 