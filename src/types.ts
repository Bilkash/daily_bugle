export interface SectionLinkType {
	title: string;
	url: string;
}

export type LoginModalType = {
	open: boolean;
	handleClose: () => void;
}

export interface NewsType {
	userId: number;
	id: number;
	title: string;
	body: string;
}
