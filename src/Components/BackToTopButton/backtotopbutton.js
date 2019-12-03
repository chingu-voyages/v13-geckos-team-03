import React, { Component } from "react";
import styled from "styled-components";
import { ArrowAltCircleUp } from "styled-icons/fa-regular/ArrowAltCircleUp";


const Arrow = styled(ArrowAltCircleUp)`
  position: fixed;
  cursor: pointer;
  bottom: 90px;
  right: 0;
  color: grey;
  width: 90px;
  height: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  &:hover {
    color: #3b3272;

  }
`

class GoUpButton extends Component {
	state = {
		hasScrolled: false
	};

	componentDidMount() {
		document.addEventListener("scroll", this.onScroll)
	};
	onScroll = () => {
			if (window.scrollY > 100) {
				this.setState({ hasScrolled: true })
			} else {
				this.setState({ hasScrolled: false })
			}
		};
	scrollToTop = () => {
		window.scrollTo(0, 0);
	}
	goUp = () => {
		if (this.state.hasScrolled) {
			return (
				<Arrow onClick={this.scrollToTop}>
				</Arrow>
			)
		}
	}
	render() {
		return (
			<>
				{this.goUp()}
			</>
		)
	}
};

export default GoUpButton;