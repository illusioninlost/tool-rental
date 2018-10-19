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

export function fetchTool(id) {

    return dispatch => {
        fetch(`${API_URL}/tools/${id}`)
            .then(res => res.json())
            .then(tool => dispatch({ type: 'FETCH_TOOL', tool: tool }))

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
            .then(tool => dispatch({ type: 'DELETE_TOOL', tool: tool }))

    }
}

export function editTool(tool) {
    console.log(tool)
    return (dispatch) => {
        return fetch(`${API_URL}/tools/${tool.id}`, {
            method: 'put',
            body: JSON.stringify(tool),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(tool => dispatch({ type: "PATCH_TOOL", tool: tool }))


    }
}