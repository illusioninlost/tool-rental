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

const API_URL = "http://localhost:4000";

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

export function setTools(tools) {
    return {
        type: "LOAD_TOOLS",
        tools
    }
}




export function fetchTools() {
    return (dispatch) => {
        return fetch(`${API_URL}/tools`)
            .then(response => response.json())
            .then(tools => dispatch(setTools(tools)));
    };
};


export function saveTool(data) {
    console.log(data)
    return (dispatch) => {
        return fetch(`${API_URL}/tools`, {
            method: 'post',
            body: JSON.stringify(data, getCircularReplacer()),
            headers: {
                "Content-Type": "application/json"
            }
        })

    }
}