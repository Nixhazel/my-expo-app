import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({ addGoalHandler, modalIsVisible, endGoalHandler }) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	const onAddGoal = () => {
		addGoalHandler(enteredGoalText);
		setEnteredGoalText("");
	};
	return (
		<Modal visible={modalIsVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../../assets/goal.png')}/>
				<TextInput
					placeholder='Your Course Goals...'
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Cancel' color='#f31282' onPress={endGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title='Add Goal' color='#b180f0' onPress={onAddGoal} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: '#e4d0ff',
		borderRadius: 6,
		width: "100%",
		padding: 10,
		color: "#120438",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});

export default GoalInput;
