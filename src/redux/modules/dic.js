import { db } from "../../firebase"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDOc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore"


const LOAD = 'dic/LOAD';
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
export function loadDic(dic_list) {
  return { type: LOAD, dic_list };
}

export function createDic(dic) {
  return { type: CREATE, dic: dic };
}

export function updateDic(dic_index) {
  return { type: UPDATE, dic_index };
}

export function amendDic(amendDic) {
  return { type: AMEND, amendDic: amendDic };
}


export function deleteDic(dic_index) {
  return { type: DELETE, dic_index };
}


// middlewares
export const loadDicFB = () => {
  return async function (dispatch) {
    const mydic_data = await getDocs(collection(db, "mydic"));
    let dic_list = [];
    mydic_data.forEach((b) => {
      dic_list.push({ id: b.id, ...b.data() });
      //id도 함께 넣어줌
    });
 
    dispatch(loadDic(dic_list));
  }
}

export const createDicFB = (dic) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mydic"), dic);
    const dic_inputs = { id: docRef.id, ...dic };
    //id도 함께 넣어줌
    dispatch(createDic(dic_inputs));
  }
}

export const updateDicFB = (dic_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "mydic", dic_id);
    //doc 잡아오기!

    const _dic_list = getState().dic.inputs;
    const dic_index = _dic_list.findIndex((b) => {
      return b.id === dic_id;
    })

    const dic_completed = getState().dic.inputs[dic_index].completed
    if (dic_completed === false) {
      await updateDoc(docRef, { completed: true });
    } else {
      await updateDoc(docRef, { completed: false });
    }
    //업데이트 상태유지
    //Array 내장함수 findindex는 index를 찾는 함수!!

    dispatch(updateDic(dic_index));
  }
}

export const amendDicFB = (ammendDic) => {
  return async function (dispatch, getState) {
    const dic_id = getState().dic.inputs[ammendDic.index].id

    const docRef = doc(db, "mydic", dic_id);
    await updateDoc(docRef, {
      word: ammendDic.word,
      example: ammendDic.example,
      explain: ammendDic.explain,
      mean: ammendDic.mean,
      same: ammendDic.same
    })

    dispatch(amendDic(ammendDic));
  }
}

export const deleteDicFB = (dic_id) => {
  return async function (dispatch, getState) {
    console.log(dic_id)
    if (!dic_id) {
      window.alert("아이디가 없네요")
      return;
    }
    const docRef = doc(db, "mydic", dic_id);
    await deleteDoc(docRef);

    const _dic_list = getState().dic.inputs;
    const dic_index = _dic_list.findIndex((b) => {
      return b.id === dic_id;
    })

    dispatch(deleteDic(dic_index));
  }
}


// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dic/LOAD":
      return { inputs: action.dic_list };

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

        if (parseInt(action.dic_index) === idx) {
          if (state.inputs[idx].completed === false) {
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
          parseInt(action.dic_index) !== idx,
          parseInt(action.dic_index),
          idx
        )
        return parseInt(action.dic_index) !== idx;
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