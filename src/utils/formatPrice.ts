export default function currencyFormat(priceToFormat: number) {
	return (
		'R$ ' +
		Number(priceToFormat)
			.toFixed(2)
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	)
}
