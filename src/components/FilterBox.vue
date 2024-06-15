<template>
  <div :class="filter +` filter-item`"
       :style="`background-image:url(${image})`">
    <slot></slot>
<!-- 부모가 자식 데이터 쓸때-->
<!--    <slot :msg="msg"></slot>-->

<!--    <slot name="a"></slot>-->
<!--    <slot name="b"></slot>-->
  </div>

</template>
<script>
export default {
  name: "FilterBox",
  props:{
    image: '',
    filter: '',
  },
  data(){
    return{
      msg: 'hello',
    }
  }

}
</script>
<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>