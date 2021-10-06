export const PriceFormatter = ( price: number ) => {
  let new_price = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price);

  return new_price.split(',')[0];
};

export const markdownParser = ( text: string ) => {
	const toHTML = text
		.replace(/^### (.*$)/gim, '<h3>$1</h3>') 
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>') 
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>');
	return toHTML.trim(); 
}