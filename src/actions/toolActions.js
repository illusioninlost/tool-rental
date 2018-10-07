// example
// import fetch from 'isomorphic-fetch';

// export function fetchCats() {
//   return (dispatch) => {
//       dispatch({ type: 'LOADING_CATS' });
//       return fetch('http://localhost:4000/db')
//       .then(response => response.json())    
//       .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }));
//   };
// };


export function fetchTools(){
    return (dispatch) => {
      fetch("http://localhost:4000/tools")
        .then(response => response.json())
        .then(tools => dispatch({type: 'LOAD_TOOLS', tools}));
    }
}