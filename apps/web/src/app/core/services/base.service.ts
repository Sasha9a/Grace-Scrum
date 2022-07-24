import axios, { AxiosObservable } from 'axios-observable';

export const BaseService = () => {
	let baseUrl = '';

	const find = <T>(options?: any): AxiosObservable<T[]> => {
		return axios.get<T[]>(
			baseUrl,
			{
				params: getParams(options)
			});
	}

	const getParams = (options: any) => {
		const params = {};
		if (options) {
			Object.entries(options).map((o) => {
				params[o[0]] = o[1];
			});
		}
		return params;
	}
}
