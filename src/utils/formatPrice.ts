export default function currencyFormat(priceToFormat: number) {
	let spl = String(priceToFormat).split('.'),
		realArray = spl[0].split(''),
		lastReal = realArray.length - 1,
		i
	if (realArray.length > 3) {
		realArray.reverse()
		for (i = lastReal; i > -1; i--) {
			if (i % 3 === 0 && i !== 0) realArray.splice(i, 0, '.')
		}
		spl[0] = realArray.reverse().join('')
	}
	if (spl.length > 1) {
		spl[1] = spl[1].substr(0, 2)
		if (spl[1].length < 2) spl[1] += '0'
	} else {
		spl[1] = '00'
	}
	return 'R$ ' + spl.join(',')
}
