import React, { Component } from 'react';
import './App.css';

import CardList from './components/card_list/car_list';
import SearchBox from './components/serachBox/searchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => this.setState({ monsters: data }))
			.catch((err) => alert(err));
	}
	render() {
		const { monsters, searchField } = this.state;
		const FilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBox
					placeholder="Filter your Robot"
					inputHandler={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={FilteredMonsters} />
			</div>
		);
	}
}

export default App;
