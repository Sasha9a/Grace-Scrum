export const TitleService = () => {
	const setTitle = (title: string) => {
		document.title = title ? `${title} - Scrum` : 'Scrum';
	}
}
