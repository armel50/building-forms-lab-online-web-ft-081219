export default function manageBand(state = {
  bands: [],
}, action) {
  const copy = {...state}
  console.log("=++++")
  console.log(copy)
  console.log({bands: [...state.bands,action.band]})
  switch(action.type){
    case "ADD_BAND":return {bands: [...state.bands,action.band]};
  
    default: return state
  }
};
