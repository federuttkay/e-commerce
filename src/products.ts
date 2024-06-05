const products = [
	{
		id: 9,
		brand: "sneaker company",
		title: "fall limited edition sneakers",
		description:
			"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
		price: 250,
		discount: 0.5,
	},
	{
		id: 12,
		brand: "another sneaker company",
		title: "another sneakers",
		description:
			"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
		price: 150,
		discount: 0.25,
	},
];

export const getProductInfo = (id: number) => {
	const product = products.find((prod) => prod.id === id);

	return product ? product : null;
};
