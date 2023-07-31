import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
				<TextInput
					placeholder='Your Course Goals...'
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add Goal' color='green' onPress={onAddGoal} />
					</View>
					<View style={styles.button}>
						<Button title='Cancel' color='green' onPress={endGoalHandler} />
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
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "100%",
		padding: 8,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8
	}
});

export default GoalInput;
