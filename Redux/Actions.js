// Actions are plain JavaScript objects that describe what happened.
export const INCREMENT  = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const MULTIPLYTWO = 'MULTIPLY'


export const increment = () => ({
    type : 'INCREMENT'
});

export const decrement = () => ({
    type : 'DECREMENT'
});

export const reset = () => ({
    type: 'RESET'
});
export const multiply = () => ({
    type: 'MULTIPLY'
})
