import { useRef } from "react";

export const ErrorService = () => {
	const message = useRef(null);

	const addCustomError = (title = 'Ошибка', description = '', life = 10000) => {
		message.current.show({ key: 'message', severity: 'error', summary: title, detail: description, life });
	}

	const addDefaultError = (error: any, title = 'Ошибка') => {
		if (error.error?.statusCode === 403) {
			return message.current.show({ key: 'message', severity: 'error', summary: title, detail: 'Отказано в доступе', life: 10000 });
		}

		const description = error.error?.message || error.message || error.detail || '';

		if (typeof description === 'string') {
			return message.current.show({ key: 'message', severity: 'error', summary: title, detail: description, life: 10000 });
		} else if (Array.isArray(description)) {
			description.forEach((item) => {
				if (typeof item === 'string') {
					return message.current.show({ key: 'message', severity: 'error', summary: title, detail: item, life: 10000 });
				}
			});
		}
	}

	const addSuccessMessage = (title = 'ОК', description = '', life = 10000) => {
		message.current.show({ key: 'message', severity: 'success', summary: title, detail: description, life });
	}
}
