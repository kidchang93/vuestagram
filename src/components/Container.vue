<template>
  <div>
    <div v-if="$props.step == 0">
      <Post  :postingData="postingData[i]"
            v-for="(post, i) in postingData"
            :key="i"/>
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="$props.step == 1">
      <div :class="myfilter + ' upload-image'" :style="`background-image: url('${$props.image}')`"></div>
      <div class="filters">
        <FilterBox v-for="filter in filterList"
                   :key="filter"
                   :image="image"
                   :filter="filter">
        <!-- slot에 넣는 데이터 (HTML 에서만)-->
<!--          <template v-slot:a> 데이터 </template>-->
<!--          <template v-slot:b> 데이터 </template>-->
          {{ filter }}
<!--          <template v-slot:default="msg"> <span>{{msg.msg}}</span> </template>-->
        </FilterBox>
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="$props.step == 2">
      <div :class="myfilter + ' upload-image'" :style="`background-image: url('${$props.image}')`"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
export default {
  name: "Container",
  components: {
    Post,
    FilterBox
  },
  props:{
    postingData: Array,
    step: Number,
    image: String,
  },
  data(){
    return {
      filterList: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      myfilter: '',
    }

  },
  mounted() {
    this.emitter.on('clickBox', (a) => {
      this.myfilter = a;
    })
  }
}
</script>



<style scoped>
.upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
}
.filters{
  overflow-x:scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>