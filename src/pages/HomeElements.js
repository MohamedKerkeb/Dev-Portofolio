import styled from 'styled-components';

export const HomeWrapper = styled.div`
	${'' /* border: 1px dashed green; */}
	max-width: 100vw;
	max-height: 100vh;
`;

export const HomeContainer = styled.div`
	${'' /* border: 1px dashed red; */}
	max-width: 960px;
	width: 100%;
	height: 100%;
	margin: auto;
	padding: 10px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 10px;
	grid-template-areas:
		'folio folio folio'
		'stick blog blog'
		'hobbies blog blog'
		'hobbies experience experience'
		'hobbies experience experience'
		'projet projet projet'
		'projet projet projet'
		'. footer .';

	@media only screen and (max-width: 768px) {
		max-width: 100%;
		border: 1px dashed red;
		grid-template-columns: 1fr;
		grid-template-areas:
			'folio'
			'stick'
			'hobbies'
			'hobbies'
			'hobbies'
			'blog'
			'blog'
			'experience'
			'experience'
			'projet'
			'projet'
			'projet'
			'footer';
	}
`;

/* Footer */

export const Footer = styled.div`
	width: 100%;
	margin: 10px auto;
	border-top: 1px solid #bdbdbd;
	text-align: center;

	grid-area: footer;

	& p {
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #a9a9a9;
		padding: 10px 0;
	}
`;
