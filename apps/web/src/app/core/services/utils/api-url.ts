import { environment } from "../../../../environments/environment";

export const ApiUrl = (url: string): string => {
	return environment.url + '/' + url + '?token=' + localStorage.getItem('JWT_TOKEN');
}
