export default function todos(state = [], action) {
  //action
  //{ type: '1', text: fazer cafe }
  //{ type: '2', text: ligar deezer }
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state, { 
        id: Math.random(), 
        text: action.text 
      }]
    default: 
    return state;
  }
}

//state = []
// { todos: [...] }