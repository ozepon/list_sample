<template>
  <div class="about">
    <div class="select-header">
      <select @change="selectCategory($event)">
        <option value="ALL">ALL</option>
        <option v-for=" category in categoryList" :value="category" :key="category">{{ category }}</option>
      </select>
    </div>
    <div v-for="(category, categoryIndex) in categoryList" :key="category" :id="category">
      <h2>{{ category }}</h2>
      <div class="item-list">
        <ItemWithImage
          v-for="itemIndex in randomList[categoryIndex] "
          v-bind:key="categoryIndex + '_' + ItemList[itemIndex].name"
          :item="ItemList[itemIndex]"
        ></ItemWithImage>
      </div>
    </div>
  </div>
</template>
<script>
import listData from "@/assets/itemList.json";
// import ItemWithImage from "@/components/ItemWithImage";
import ItemWithImage from "../components/ItemWithImage";
export default {
  components: {
    ItemWithImage
  },
  data() {
    return {
      categoryList: listData.categoryList,
      ItemList: listData.ItemList
    };
  },
  computed: {
    // this.ItemListのsizeを最大値とし、ランダムな配列を返却
    randomList() {
      let randomList = [];
      let randomListSize = 6;
      let categoryCount = this.categoryList.length;

      for (let cNum = 0; cNum < categoryCount; cNum++) {
        let tempList = [];
        for (let i = 0; i < randomListSize; i++) {
          let notFindIndex = true;
          let randomItemIndex = 0;

          // 存在するindexなら再取得
          while (notFindIndex) {
            randomItemIndex = Math.floor(
              Math.random() * Math.floor(randomListSize)
            );

            if (tempList.includes(randomItemIndex)) {
              // やりなおし
            } else {
              notFindIndex = false;
              tempList.push(randomItemIndex);
            }
          }
        }
        randomList.push(tempList);
      }
      return randomList;
    }
  },
  methods: {
    selectCategory(event) {
      // categoryを選択
      let element =
        event.target.value == "ALL" ? { x: 0, y: 0 } : `#${event.target.value}`;
      this.$router.push(element);
      console.log(element);
    }
  }
};
</script>
<style lang="scss">
.select-header {
  position: fixed;
  top: 4rem;
  width: 100%;
  text-align: right;
}
.item-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
