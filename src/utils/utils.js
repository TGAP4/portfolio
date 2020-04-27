export const jumpTo = (targetId) => () => {
	const diff = targetId.current.offsetTop - document.documentElement.scrollTop;
	if (diff === 0) {
		return;
	} else {
		let repetitions = 0;
		const scroll = setInterval(() => {
			if (++repetitions >= 50) {
				clearInterval(scroll);
			} else {
				window.scrollBy(0, Math.round(diff/(5 * Math.pow(1.2, repetitions))));
			}
		}, 10);
	}
};
