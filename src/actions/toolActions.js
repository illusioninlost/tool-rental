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

export function addTool(tool) {
    return {
        type: "ADD_TOOL",
        tool
    }
}

export function toolFetched(tool) {
    type: "FETCH_TOOL",
        tool
}

export function gone(tool) {
    type: "DELETE_TOOL",
        tool
}




export function fetchTools() {
    return (dispatch) => {
        return fetch(`${API_URL}/tools`)
            .then(response => response.json())
            .then(tools => dispatch(setTools(tools)));
    };
};


export function saveTool(tool) {
    return (dispatch) => {
        return fetch(`${API_URL}/tools`, {
            method: 'post',
            body: JSON.stringify(tool, getCircularReplacer()),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(tool => dispatch(addTool(tool)))


    }
}

export function fetchTool(dispatch, id) {
   console.log("hello", dispatch)
    return dispatch => {
        fetch(`${API_URL}/tools/${id}`)
            .then(res => res.json())
            .then(tool => dispatch({type:'FETCH_TOOL',tool:tool}))

    }
}

export function removeTool(tool) {
    return (dispatch) => {
        return fetch(`${API_URL}/tools/${tool.id}`, {
            method: 'delete',
            body: JSON.stringify(tool),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(tool => console.log(tool))

    }
}