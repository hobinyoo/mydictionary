const LOAD   = 'dic/LOAD';
const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";
const UPDATE = "dic/UPDATE";
const AMEND = "dic/AMEND";
// 초기 상태값을 만들어줍니다.
const initialState = {
  inputs: [],
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export function loadDic(dic) {
  return { type: LOAD, dic };
}

export function createDic(dic) {
  return { type: CREATE, dic: dic };
}

export function updateDic(index) {
  return { type: UPDATE, index };
}

export function amendDic(amendDic) {
  return { type: AMEND, amendDic: amendDic};
}


export function deleteDic(index) {
  return { type: DELETE, index };
}

// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dic/LOAD":
      return state;

    case "dic/CREATE": {
      const new_dic_list = [...state.inputs, action.dic];
      return { inputs: new_dic_list };
      
    }

    case "dic/AMEND": {
      const new_dic_list = state.inputs.map((dic, idx) => {
        if(parseInt(action.amendDic.index) === idx) {
         
          return { ...dic, word:action.amendDic.word,
                           mean:action.amendDic.mean, 
                           explain:action.amendDic.explain, 
                           example:action.amendDic.example,
                           same:action.amendDic.same,
                           completed:action.amendDic.completed};
        } else {
          return dic
        }
      })
     
      return { inputs: new_dic_list }
    }

    case "dic/UPDATE": {
      const new_dic_list = state.inputs.map((l, idx) => {
        if (parseInt(action.index) === idx) {
          if(state.inputs[idx].completed === false) {
            return { ...l, completed: true };
          } else {
            return { ...l, completed: false };
          }
        } else {
          return l
        }
      })
      return { inputs: new_dic_list }
    }

    case "dic/DELETE": {
      const new_dic_list = state.inputs.filter((l, idx) => {
        console.log(
          parseInt(action.index) !== idx,
          parseInt(action.index),
          idx
        )
        return parseInt(action.index) !== idx;
        // [1,2,3]에서 2를 빼고 싶으면  2만 빼는게 아니라 [1,3]의 값으로 재반환!
        // return은 true와 false로 줄 수 있는데 ture면 현재요소가 들어가고 false면 
        // 새배열에 이 요소가 들어가지 않는다. true면 값이 들어가는데 false라서 안들어간데!
      });

      return { inputs: new_dic_list };
    }
    default: 
      return state;
  }
}