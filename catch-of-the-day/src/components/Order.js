import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
	renderOrderItem = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];
		const isAvailable = fish && fish.status === "available";

		if (!fish) {
			return;
		}
		if (!isAvailable) {
			return (
				<li key="key" className="order-item">
					Sorry {fish ? fish.name : "fish"} is no longer available
					<button
						onClick={() => {
							this.props.removeFromOrder(key);
						}}
					>
						remove
					</button>
					<button
						onClick={() => {
							this.props.subtractFromOrder(key);
						}}
					>
						subtract
					</button>
				</li>
			);
		}
		return (
			<li key={key} className="order-item">
				🦈{count} lbs {fish.name}
				<b>{formatPrice(count * fish.price)}</b>
				<button
					onClick={() => {
						this.props.removeFromOrder(key);
					}}
				>
					remove
				</button>
				<button
					onClick={() => {
						this.props.subtractFromOrder(key);
					}}
				>
					subtract
				</button>
			</li>
		);
	};

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === "available";
			if (isAvailable) {
				return prevTotal + count * fish.price;
			}
			return prevTotal;
		}, 0);
		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">{orderIds.map(this.renderOrderItem)}</ul>
				<div className="total">
					Total:
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
