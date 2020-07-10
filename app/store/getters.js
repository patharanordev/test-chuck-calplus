export const getters = {
    // Getter with payload
    numberInPanel: (state) => (index) => {
        return state.number[index];
    },
    result: (state) => {
        return state.result;
    }
};