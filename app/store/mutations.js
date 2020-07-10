export const mutations = {
    increment (state) {
        state.counter++;
    },
    setNumber (state, payload) {
        console.log('state.number:', state.number);
        console.log('payload:', payload);
        state.number[payload.index] = payload.value;
    },
    updateResult (state, payload) {
        state.result = payload.result;
    }
};