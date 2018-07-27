
export function historyPush (path,data,_this) {
	_this.props.history.push(path, data);
}

export function singinHistoryPush (data) {
	historyPush('/signin', data, this)
}
export function singUpHistoryPush (data) {
	historyPush('/signup',data, this)
}
export function homeHistoryPush (data) {
	historyPush('/',data, this)
}
export function passwordHistoryPush (data) {
	historyPush('/password',data, this)
}