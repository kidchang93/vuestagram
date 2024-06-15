<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/vue.svg" class="logo"  alt=""/>
  </div>

  <Container :postingData="postingData" :step="step"/>
  <button @click="more">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
<!--  탭 메뉴 쉽게 하는 법-->
  <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button>
  <div style="margin-top: 500px"></div>
</template>

<script>
import Container from "./components/Container.vue";
import PostingData from "./assets/PostingData.js";
import axios from "axios";
export default {
  name: 'App',
  components: {
    Container,
  },
  data(){
    return{
      postingData: PostingData,
      moreNumber: 0,
      step: 0,
    }
  },
  methods:{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moreNumber}.json`)
          .then((result) => {
            // 요청 성공시 실행할 코드
            console.log(result)
            this.postingData.push(result.data);
            this.moreNumber++;
          })
      //
      // axios.post('url', {name:'kim'})
      //     .then()
      //     .catch((error)=>{
      //       error
      //     })
    }

  }
}
</script>



<style>


</style>
