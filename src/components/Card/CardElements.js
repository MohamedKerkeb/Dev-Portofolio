import styled from 'styled-components';

// export const CardWrapper = styled.div`
// 	${'' /* border: 1px solid red; */}
// 	width: 50%;
// 	margin: auto;
// 	padding: 5px;
// 	background: #fff;
// 	border-radius: 12px;
// 	box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.3);
// `;

// export const CardContainer = styled.div`
// 	${'' /* border: 1px dashed green; */}
// `;

// export const Cardh1 = styled.h1`
// 	${'' /* border: 1px solid gold; */}
// `;

export const Card = styled.div`
	margin: 10px auto;
	padding: 10px;
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.3);
`;

/* Folio */

export const CardFolio = styled(Card)`
	width: 100%;
	display: flex;

	grid-area: folio;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const FolioImg = styled.img`
	width: 150px;
	${'' /* height: 100px; */}
	border-radius: 12px;
	margin-right: 10px;
`;

export const FolioWrapper = styled.div`
	${'' /* border: 1px dashed red; */}
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const DetailFolio = styled.div`
	${'' /* border: 1px solid green; */}

	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		padding: 10px 0;
	}
`;

export const LeftFolio = styled.div`
	${'' /* border: 1px dashed navy; */}

	& h3 {
		font-weight: 600;
		font-size: 24px;
		line-height: 29px;
		color: #4f4f4f;
	}
	& small {
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #828282;
	}
`;

export const RightFolio = styled.div`
	${'' /* border: 1px dashed navy; */}

	& span {
		display: block;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #4f4f4f;
	}
`;

export const TextFolio = styled.div`
	${'' /* border: 1px solid blue; */}
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	& p {
		text-align: justify;
		${'' /* border: 1px dashed red; */}
		padding: 10px 0;
		color: #828282;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
	}
`;

/* Stick */

export const CardStick = styled(Card)`
	width: 100%;
	height: 300px;
	text-align: left;

	grid-area: stick;

	& h3 {
		padding: 10px 0;
	}
`;

export const Stick = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 10px 0;
`;

export const NameStick = styled.span`
	${'' /* border: 1px solid green; */}
	width: 30%;
	display: block;
	text-align: left;
`;

export const Progress = styled.div`
	position: relative;
	background: #c4c4c4;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	width: 70%;
	height: 10px;
`;

export const BarStick = styled.span.attrs((props) => ({
	type: 'text',
	width: props.width,
}))`
	display: block;
	height: 100%;
	background: #000;
	/*#ffec65;*/
	position: relative;
	overlay: hidden;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	width: ${(props) => props.width}%;
`;

/* Blog */

export const CardBlog = styled(Card)`
	height: 650px;
	min-width: 100%;
	text-align: left;

	& h3 {
		padding: 10px 0;
	}

	grid-area: blog;
`;

export const Blog = styled.div`
	${'' /* border: 1px dashed blue; */}
	width: 100%;
	height: 95%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const BlogHeader = styled.div`
	${'' /* border: 1px dashed yellow; */}
	width: 100%;
	height: 60%;
	padding-bottom: 10px;

	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const BlogH3 = styled.h4`
	${'' /* border: 1px dashed navy; */}
	width: 30%;
	font-size: 1.5rem;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
	color: #333333;

	@media only screen and (max-width: 768px) {
		width: 100%;
		padding-bottom: 10px;
	}
`;

export const BlogImg = styled.img`
	${'' /* border: 1px dashed green; */}
	width: 70%;
	border-radius: 12px 0 0 12px;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const BlogText = styled.div`
	${'' /* border: 1px dashed gold; */}
	width: 80%;
	padding: 5px 0;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;

	color: #828282;

	& p {
		padding: 10px 0;
	}
`;

export const BlogLink = styled.a`
	${'' /* border: 1px dashed pink; */}
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #5c94e1;
	text-decoration: none;
`;

/* Hobbies */

export const CardHobbies = styled(Card)`
	min-width: 100%;
	height: 830px;
	text-align: left;

	grid-area: hobbies;
`;

export const Hobbies = styled.div`
	${'' /* border: 1px solid red; */}
	width: 100%;
	height: 33%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ImgHobbies = styled.img`
	${'' /* border: 1px solid red; */}
	width: 100%;
	height: 150px;
	border-radius: 12px;
	filter: grayscale(100%);
	object-position: 50%;

	&:hover {
		filter: none;
	}
`;

export const TextHobbies = styled.div`
	${'' /* border: 1px solid red; */}
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #828282;
	padding: 10px 0;

	& h4 {
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		color: #333333;
		margin: 10px 0;
	}
`;

/* Experience */

export const CardExperience = styled(Card)`
	height: 480px;
	max-width: 590px;
	min-width: 100%;
	text-align: left;

	grid-area: experience;

	& h3 {
		padding: 10px 0;
	}
`;

export const ExperienceWrapper = styled.div`
	${'' /* border: 1px solid red; */}

	height: 90%;
	width: 100%;
`;
export const Experience = styled.div`
	${'' /* border: 1px solid blue; */}
	height: 50%;
	width: 100%;

	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ExpImg = styled.div`
	${'' /* border: 1px solid green; */}
	width: 30%;

	display: flex;
	justify-content: center;
	align-items: center;

	& img {
		height: 80%;
		width: 80%;
		${'' /* border: 1px solid red; */}
		filter: grayscale(1);
	}
	@media only screen and (max-width: 768px) {
		width: 40%;
	}

	& img {
		height: 50%;
		width: 80%;
	}
`;
export const ExpTextWrapper = styled.div`
	${'' /* border: 1px solid yellow; */}
	width: 70%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		width: 60%;
	}
`;

export const ExpDate = styled.div`
	${'' /* border: 1px solid green; */}
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #828282;
	padding-bottom: 10px;
`;

export const ExpName = styled.h4`
	${'' /* border: 1px solid green; */}
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	color: #333333;
	padding-bottom: 10px;
`;

export const ExpText = styled.div`
	${'' /* border: 1px solid green; */}
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #828282;
	padding: 10px 0;
`;

/* Projet */

export const CardProjet = styled(Card)`
	width: 100%;
	height: 530px;
	min-height: 100%;

	grid-area: projet;

	& h3 {
		padding: 10px 0;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
`;

export const ProjetWrapper = styled.div`
	${'' /* border: 1px dashed navy; */}
	width: 100%;
	height: 90%;
	padding: 10px 0;

	display: flex;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		width: 100%;
		height: 95%;
		flex-direction: column;
	}
`;

export const Projet = styled.div`
	${'' /* border: 1px dashed navy; */}
	height: 100%;
	width: 30%;
	margin: 0 10px;
	border-radius: 12px;
	padding: 10px;
	filter: grayscale(1);
	cursor: pointer;

	&:hover {
		filter: none;
		box-shadow: 0 8px 8px -2px rgba(0, 0, 0, 0.3);
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		margin: 10px auto;
	}
`;

export const ProjetImg = styled.div`
	${'' /* border: 1px dashed navy; */}
	width: 100%;

	& img {
		width: 100%;
		height: 200px;
		border-radius: 12px;
	}
`;

export const ProjetContent = styled.div`
	${'' /* border: 1px dashed navy; */}
`;

export const ProjetHastagWrapper = styled.div`
	${'' /* border: 1px dashed gold; */}
	margin: 5px 0;

	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const ProjetHastag = styled.div`
	${'' /* border: 1px dashed navy; */}
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #4f4f4f;
`;

export const ProjetName = styled.div`
	${'' /* border: 1px dashed navy; */}
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
	color: #333333;
	margin: 5px 0;
`;

export const ProjetText = styled.div`
	${'' /* border: 1px dashed navy; */}
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #828282;
	margin: 10px 0;
`;

export const ProjetButtonWrapper = styled.div`
	${'' /* border: 1px dashed navy; */}
	margin: 5px 0;

	display: flex;
	justify-content: space-around;
	aligh-items: center;
`;

export const ProjetButton = styled.button`
	${'' /* border: 1px dashed navy; */}
	border: ${(props) => (props.primary ? 'none' : '1px solid #000')};
	height: 40px;
	width: 110px;
	border-radius: 12px;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	background: ${(props) => (props.primary ? '#000' : '#fff')};
	color: ${(props) => (props.primary ? '#fff' : '#000')};
	cursor: pointer;

	&:hover {
		background: ${(props) => (props.primary ? '#fff' : '#000')};
		color: ${(props) => (props.primary ? '#000' : '#fff')};
		border: ${(props) => (props.primary ? '1px solid #000' : 'none')};
	}
`;
