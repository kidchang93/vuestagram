import { createStore } from 'vuex'

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
    },
    // 서버에서 데이터를 가져와서 변경할 때
    actions:{

    }

})

export default store