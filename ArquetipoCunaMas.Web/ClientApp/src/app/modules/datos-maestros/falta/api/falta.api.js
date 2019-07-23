import moment from "moment";

const fechaRegistro = moment();

export const GetPageFalta = (idArticulo, page, pageSize, filter = null) => {
	console.log("idArticulo", idArticulo, "filtros Articulo", filter);
	const filters = {
		...filter
	};

	const source = [{
			idFalta: 1,
			numeroFalta: "ads",
			descripcion: "asdds",
			fechaRegistro: fechaRegistro
		},
		{
			idFalta: 2,
			numeroFalta: "afafas",
			descripcion: "sfsdf",
			fechaRegistro: fechaRegistro
		},
		{
			idFalta: 3,
			numeroFalta: "sfs",
			descripcion: "wrwefw",
			fechaRegistro: fechaRegistro
		},
		{
			idFalta: 4,
			numeroFalta: "wef",
			descripcion: "dfgdgdfgd",
			fechaRegistro: fechaRegistro
		}
	];

	const items = source.slice((page - 1) * pageSize).slice(0, pageSize);

	const total = source.length;

	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				data: {
					items,
					total
				}
			});
		}, 500);
	});
};