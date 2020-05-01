<template>
  <div class="item-with-image_wrap">
    <div class="item-with-image">
      <img class="item-with-image__image" :src="item.imagePath" />
      <div>{{ item.name }}</div>
      <div>{{ item.price }}円</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemWithImage",
  props: ["item"]
};
</script>
<style lang="scss">
$image_top_padding: 0.2rem;
$border-radius: 15px;

.item-with-image__image {
  object-fit: cover;
  width: 10rem;
  height: 10rem;
  border-radius: $border-radius;
}
.item-with-image {
  &_wrap {
    padding: $image_top_padding;
  }
  padding: 0.5rem;
  background: white;
  border: solid 1px lightgray;
  border-radius: $border-radius;
}
</style>
