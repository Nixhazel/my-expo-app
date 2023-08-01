import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, deleteGoalHandler, id }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#210644" }}
				onPress={deleteGoalHandler.bind(this, id)}
				styles={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,

		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: "white",
		padding: 8,
	},
});

export default GoalItem;
