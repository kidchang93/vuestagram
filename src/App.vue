<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/vue.svg" class="logo"  alt=""/>
  </div>

  <Container :postingData="postingData"
             :step="step"
             :image="image"
             :filter="filter"
              @write="content = $event"/>
  <button @click="more">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
<!--  탭 메뉴 쉽게 하는 법-->
<!--  <div v-if="step == 0">내용0</div>-->
<!--  <div v-if="step == 1">내용1</div>-->
<!--  <div v-if="step == 2">내용2</div>-->
<!--  <button @click="step = 0">버튼0</button>-->
<!--  <button @click="step = 1">버튼1</button>-->
<!--  <button @click="step = 2">버튼2</button>-->
<!--  <div style="margin-top: 500px"></div>-->
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
      image: '',
      content:'',
      filter:'',
      myfilter:'',
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
    },

    upload(e){
      let a = e.target.files
      console.log(a[0]);
      let url = URL.createObjectURL(a[0])
      console.log(url)
      this.image = url;
      this.step++;
    },
    publish(){
      // Array에 자료 집어 넣어줌
      var myImage = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.myfilter
      };
      this.postingData.unshift(myImage);
      this.step = 0;
    }
  },
  mounted() {
    this.emitter.on('clickBox', (a) => {
      this.myfilter = a;
    })
  }


}
</script>



<style>


</style>
