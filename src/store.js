import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            name: 'lee',
            age: 31,
        }
    },
    // 데이터 수정하는 방법을 미리 정의
    mutations:{
      changeName(state){
          state.name = 'park'
      }
    },

})

export default store