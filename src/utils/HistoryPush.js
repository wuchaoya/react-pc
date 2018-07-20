
export function historyPush (path,data,_this) {
	_this.props.history.push(path, data);
}

export function singinHistoryPush (data) {
	historyPush('/singin', data, this)
}
export function singUpHistoryPush (data) {
	historyPush('/singup',data, this)
}

export function passwordHistoryPush (data) {
	historyPush('/password',data, this)
}