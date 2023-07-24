import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

const Goalpage = () => {
	const [courseGoals, setCourseGoals] = useState([]);

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	}
	
	const deleteGoalHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal)=> goal.id !== id )
		});
	}
	return (
		<View style={styles.appContainer}>
			<GoalInput addGoalHandler={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.id}
								deleteGoalHandler={deleteGoalHandler}
							/>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
});

export default Goalpage;
