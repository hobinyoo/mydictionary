const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";
const UPDATE = "dic/UPDATE";

// 초기 상태값을 만들어줍니다.
const initialState = {
    inputs: [],
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export function createDic(dic) {
  return { type: CREATE, dic: dic };
}

export function updateBucket(bucket_index) {

  return { type: UPDATE, bucket_index };
}

export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dic/CREATE": {
      console.log("이제 값을 바꿀거야!");
      const new_dic_list = [...state.inputs, action.dic];
      console.log(new_dic_list)
      return { inputs: new_dic_list };
    }

    case "bucket/UPDATE": {
   
      const new_bucket_list = state.list.map((l, idx) => {
        if(parseInt(action.bucket_index) === idx) {
          return {...l, completed: true};
        } else {
          return l
        }
      })
      return {list: new_bucket_list}
    }

    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });

      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}