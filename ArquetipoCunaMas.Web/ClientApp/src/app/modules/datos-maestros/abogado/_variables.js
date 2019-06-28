import { FORM_TYPE } from "app/core/enums/enums";

export const buildAbogado = () => ({
	dniAbogado: '',
	nombres: '',
	primerApellido: '',
	segundoApellido: ''
});

export const buildModalAbogado = () => ({
	open: false,
	title: 'Registrar Abogado',
	formType: FORM_TYPE.REGISTRAR,
	idAbogado: null,
	abogado: buildAbogado()
});

export const intialState = {

	tableDef: {
		columns: [
			{ label: "Nombre", property: "name" },
			{ label: "Edad", property: "age" }
		]
	},

	pagination: {
		total: 5,
		page: 1,
		pageSize: 10,
		items: [
			{ idAbogado: 1, name: "Juan", age: 23 },
			{ idAbogado: 2, name: "Mateo", age: 32 },
			{ idAbogado: 3, name: "Lucas", age: 25 }
		]
	},

	modalGestionAbogado: buildModalAbogado()

};
