import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Styles from './styles/homeStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getAdvisors } from '../actions/advisors'

export default function App() {

	const dispatch = useDispatch()
	const advisors = useSelector((state) => state.advisors)

	useFocusEffect(
		React.useCallback(() => {
		dispatch(getAdvisors())
		}, [dispatch])
	)

	return (
		<View style={Styles.container}>
			{advisors.map((advisor) => (
				<TouchableOpacity style={Styles.box} key={advisor._id}>
					<Image style={Styles.image} source={{uri: advisor.selectedFile}} />
					<Text>{advisor.name}</Text>
				</TouchableOpacity>
      		))}
		</View>
	)
}