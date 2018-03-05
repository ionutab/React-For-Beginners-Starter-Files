import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		order: PropTypes.object,
		removeFromOrder: PropTypes.func,
		subtractFromOrder: PropTypes.func
	};
	renderOrderItem = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];
		const isAvailable = fish && fish.status === "available";
		const transitionOptions = {
			classNames: "order",
			key: key,
			timeout: { enter: 500, exit: 500 }
		};

		if (!fish) {
			return;
		}
		if (!isAvailable) {
			return (
				<CSSTransition {...transitionOptions}>
					<li key="key" className="order-item">
						Sorry {fish ? fish.name : "fish"} is no longer available
					</li>
				</CSSTransition>
			);
		}
		return (
			<CSSTransition {...transitionOptions}>
				<li key={key} className="order-item">
					<span>
						<TransitionGroup component="span" className="count">
							<CSSTransition
								classNames="count"
								key={count}
								timeout={{ enter: 500, exit: 500 }}
							>
								<span>{count}&nbsp;</span>
							</CSSTransition>
						</TransitionGroup>
						lbs {fish.name}
						<b>{formatPrice(count * fish.price)}</b>
						<button
							onClick={() => {
								this.props.removeFromOrder(key);
							}}
						>
							rem
						</button>
						<button
							onClick={() => {
								this.props.subtractFromOrder(key);
							}}
						>
							sub
						</button>
					</span>
				</li>
			</CSSTransition>
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
				<TransitionGroup component="ul" className="order">
					{orderIds.map(this.renderOrderItem)}
				</TransitionGroup>
				<div className="total">
					Total:
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
