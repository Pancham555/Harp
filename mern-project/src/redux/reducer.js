const initialstate = false

export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ONN":
            return !state

        default:
            return state

    }
}

const initialAuthState = false

export const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case "OK":
            return true

        default:
            return state

    }
}

