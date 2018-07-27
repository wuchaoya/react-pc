export function setValue (key) {
	this.setState({
		[key]: this.refs[key].refs[key].value
	})
}

export function setCodeInputValue (key) {
	this.setState({
		[key]: this.refs[key].refs[key].refs[key].value
	})
}
	