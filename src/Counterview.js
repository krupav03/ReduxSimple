import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { increment, decrement, reset, multiply } from "../Redux/Actions";
import { connect } from "react-redux";

function CounterView({ count, increment, decrement, reset, multiply }) {
    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.buttonText}>Decrease</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={reset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={multiply}>
                <Text style={styles.buttonText}>Multiply into 2</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    console.log('Current state:---2', state); // For debugging
    return {
        count: state.counter ? state.counter.count : 0, // Checks if state.counter exists
    };
};

const mapDispatchToProps = {
    increment,
    decrement,
    reset,
    multiply
};

// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
// });

// useDispatch wasn't used. This is because useDispatch is a hook from React-Redux that is specifically designed for use with functional components and is part of the modern Redux approach, especially in projects using Redux Toolkit.

// Using useDispatch in React-Redux
// If you're using functional components and prefer using hooks, useDispatch and useSelector are commonly used in modern Redux setups. Here’s how you can use useDispatch to handle actions in a functional component:
// Avoiding Direct dispatch Usage
// Instead of calling dispatch directly, you can bind action creators to props using mapDispatchToProps. This approach makes your component code cleaner and easier to understand.
export default connect(mapStateToProps, mapDispatchToProps)(CounterView);

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Light background color
    },
    countText: {
        fontSize: 48,
        marginBottom: 20,
        color: '#333', // Darker text color for better visibility
    },
    button: {
        backgroundColor: '#1e90ff', // Blue background color for buttons
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});




// Traditional Redux: Uses mapDispatchToProps and connect to bind action creators to props.
// Modern Redux with Hooks: Uses useDispatch and useSelector for dispatching actions and selecting state in functional components.


// If you're working with functional components and modern React practices, using useDispatch and useSelector is a more straightforward approach. However, if you’re working with class components or prefer the traditional approach, using connect and mapDispatchToProps is still valid and widely used.

// Class components cannot use hooks like useDispatch and useSelector. Instead, they use connect to connect to the Redux store. For new projects or functional components, hooks are recommended for their simplicity and readability. For existing class components or projects where class components are used, connect remains a valid and widely used approach.






