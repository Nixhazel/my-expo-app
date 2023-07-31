import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

const Goalpage = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const setAddGoalHandler = () => {
		setModalIsVisible(true)
	}
	const endGoalHandler = () => {
		setModalIsVisible(false)
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		endGoalHandler()
	}
	
	const deleteGoalHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal)=> goal.id !== id )
		});
	}
	return (
		<View style={styles.appContainer}>
			<Button
				title='Add New Goal'
				color='#5e0acc'
				onPress={setAddGoalHandler}
			/>
			<GoalInput
				modalIsVisible={modalIsVisible}
				addGoalHandler={addGoalHandler}
				endGoalHandler={endGoalHandler}
			/>
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
