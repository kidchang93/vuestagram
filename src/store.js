import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state(){
        return {
            name: 'lee',
            age: 31,
            likes: 30,
            doLikes: false,
            more: {},
        }
    },
    // 데이터 수정하는 방법을 미리 정의
    // mutations = 순차적으로 state 변경하고 싶을때쓴다
    mutations:{
      changeName(state){
          state.name = 'park'
      },
      changeAge(state, payload){
          state.age += payload;
      },
        likes(state){
          if (state.doLikes == false){
              state.likes++;
              state.doLikes = true;
          } else {
            state.likes--;
            state.doLikes = false;
          }
        },
        setMore(state, data){
          state.more = data;
        }
    },
    // 서버에서 데이터를 가져와서 변경할 때
    actions:{
        // context 는 위에 작성한 함수 모든것
        getData(context){
          axios.get(`https://codingapple1.github.io/vue/more0.json`)
              .then((result) => {
                  // 요청 성공시 실행할 코드
                  console.log(result.data);
                  // 이후 mutations을 작성해야 변경됨.
                  context.commit('setMore', result.data)
              })

        },
    }

})

export default store