export default function accentRemover(str: string, slugify = false) {
	const newStr = slugify ? str.toLowerCase().replace(/\s/g, '-') : str
	return newStr
		.replace(/[ÀÁÂÃÄÅ]/g, 'A')
		.replace(/[àáâãäå]/g, 'a')
		.replace(/[ÈÉÊË]/g, 'E')
		.replace(/[éèêë]/g, 'e')
		.replace(/[ÍÌÎÏ]/g, 'I')
		.replace(/[íìîï]/g, 'i')
		.replace(/[ÓÒÔÖÕ]/g, 'O')
		.replace(/[òóôõö]/g, 'o')
		.replace(/[ÚÙÛÜ]/g, 'U')
		.replace(/[ùúûü]/g, 'u')
		.replace(/[Ç]/g, 'C')
		.replace(/[ç]/g, 'c')
}
