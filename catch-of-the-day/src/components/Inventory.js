import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		addFish: PropTypes.func,
		loadSamples: PropTypes.func
	};
	render() {
		return (
			<div className="Inventory">
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(key => {
					return (
						<EditFishForm
							key={key}
							index={key}
							fish={this.props.fishes[key]}
							updateFish={this.props.updateFish}
							deleteFish={this.props.deleteFish}
						/>
					);
				})}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load samples</button>
			</div>
		);
	}
}

export default Inventory;
