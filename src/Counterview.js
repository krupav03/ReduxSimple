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
