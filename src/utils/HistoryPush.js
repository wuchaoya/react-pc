
export function historyPush (path,data) {
	this.props.history.push(path, data);
}

export function singinHistoryPush (data) {
	historyPush('/singin',data)
}

export function singUpHistoryPush (data) {
	historyPush('/singup' +
		'',data)
}

export function passwordHistoryPush (data) {
	historyPush('/password',data)
}