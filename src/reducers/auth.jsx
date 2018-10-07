const initialState = [
    {
        bbToken: ''
    }
]

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_BEARER':
            return [...state, {
                bbToken: action.bearer
            }
        ]
        default: return state
    }
}

export default auth