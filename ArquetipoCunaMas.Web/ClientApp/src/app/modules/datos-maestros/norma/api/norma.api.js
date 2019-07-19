import moment from 'moment';

const fechaRegistro = moment();
export const GetPageNorma = (page, pageSize, filter = null) => {

	const filters = {
		...filter,
	};


	const source = [{
		numeroNorma: 'ads',
		descripcion: 'asdds',
		fechaRegistro: fechaRegistro
	}, {
		numeroNorma: 'afafas',
		descripcion: 'sfsdf',
		fechaRegistro: fechaRegistro
	}, {
		numeroNorma: 'sfs',
		descripcion: 'wrwefw',
		fechaRegistro: fechaRegistro
	}, {
		numeroNorma: 'wef',
		descripcion: 'dfgdgdfgd',
		fechaRegistro: fechaRegistro
	}];

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