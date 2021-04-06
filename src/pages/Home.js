import React from 'react';
import Adidas from '../Img/adidas.png';
import Hm from '../Img/hm.png';
import {
	CardFolio,
	CardStick,
	FolioImg,
	FolioWrapper,
	CardBlog,
	CardHobbies,
	CardExperience,
	CardProjet,
	DetailFolio,
	TextFolio,
	LeftFolio,
	RightFolio,
	Stick,
	BarStick,
	NameStick,
	Progress,
	Hobbies,
	ImgHobbies,
	TextHobbies,
	Blog,
	BlogHeader,
	BlogH3,
	BlogText,
	BlogLink,
	BlogImg,
	ExperienceWrapper,
	ExpImg,
	ExpTextWrapper,
	ExpDate,
	ExpName,
	ExpText,
	Experience,
	ProjetContent,
	ProjetHastag,
	ProjetName,
	ProjetButtonWrapper,
	ProjetButton,
	ProjetText,
	ProjetImg,
	ProjetWrapper,
	Projet,
	ProjetHastagWrapper,
} from '../components/Card/CardElements.js';
import { Footer, HomeContainer, HomeWrapper } from './HomeElements';

const Home = () => {
	return (
		<>
			<HomeWrapper>
				<HomeContainer>
					<CardFolio>
						<FolioImg
							src='https://images.unsplash.com/photo-1609820685514-859d2ab64c34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80'
							alt=''
						/>
						<FolioWrapper>
							<DetailFolio>
								<LeftFolio>
									<h3>Billy Pearson</h3>
									<small>Front-end developer</small>
								</LeftFolio>
								<RightFolio>
									<span>billy@example.com</span>
									<span>(+600) 546 624 342</span>
								</RightFolio>
							</DetailFolio>
							<TextFolio>
								<p>
									Self-motivated developer, who is willing to learn and create outstanding UI applications. Donec
									aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, corporis minima, eveniet aliquam atque
									vel, eos fuga tenetur sunt distinctio possimus molestiae totam esse impedit ducimus excepturi eius ex
									praesentium.
								</p>
							</TextFolio>
						</FolioWrapper>
					</CardFolio>
					<CardStick>
						<h3>FRONT END</h3>
						<Stick>
							<NameStick>React</NameStick>
							<Progress>
								<BarStick width='50' />
							</Progress>
						</Stick>
						<Stick>
							<NameStick>Javascript</NameStick>
							<Progress>
								<BarStick width='70' />
							</Progress>
						</Stick>
						<Stick>
							<NameStick>CSS</NameStick>
							<Progress>
								<BarStick width='90' />
							</Progress>
						</Stick>
						<Stick>
							<NameStick>Vue</NameStick>
							<Progress>
								<BarStick width='10' />
							</Progress>
						</Stick>
						<Stick>
							<NameStick>Redux</NameStick>
							<Progress>
								<BarStick width='60' />
							</Progress>
						</Stick>
						<Stick>
							<NameStick>React Native</NameStick>
							<Progress>
								<BarStick width='70' />
							</Progress>
						</Stick>
					</CardStick>
					<CardBlog>
						<h3>BLOG</h3>
						<Blog>
							<BlogHeader>
								<BlogH3>How to Organize your CSS</BlogH3>
								<BlogImg src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80' />
							</BlogHeader>
							<BlogText>
								<p>
									In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non
									volutpat nisl, a luctus mi.
								</p>
								<p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
							</BlogText>
							<BlogLink href='https://dev.to/allison_seboldt/how-do-you-organize-your-css-4p97'>Dev.to</BlogLink>
						</Blog>
					</CardBlog>
					<CardHobbies>
						<h3>HOBBIES</h3>
						<Hobbies>
							<ImgHobbies src='https://images.unsplash.com/photo-1542625202-258b9106f29e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80' />
							<TextHobbies>
								<h4>Gaming</h4>
								<span>Lorem ipsum dolor sit amet consectetur.</span>
							</TextHobbies>
						</Hobbies>
						<Hobbies>
							<ImgHobbies src='https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' />
							<TextHobbies>
								<h4>Cooking</h4>
								<span>Lorem ipsum dolor sit amet consectetur.</span>
							</TextHobbies>
						</Hobbies>
						<Hobbies>
							<ImgHobbies src='https://images.unsplash.com/photo-1530469641172-8ac15d0a7d6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80' />
							<TextHobbies>
								<h4>Travel</h4>
								<span>Lorem ipsum dolor sit amet consectetur.</span>
							</TextHobbies>
						</Hobbies>
					</CardHobbies>
					<CardExperience>
						<h3>Experiences</h3>
						<ExperienceWrapper>
							<Experience>
								<ExpImg>
									<img src={Adidas} alt='adidas' />
								</ExpImg>
								<ExpTextWrapper>
									<ExpDate>Feb 2017 - Current</ExpDate>
									<ExpName>Front-end developer</ExpName>
									<ExpText>
										Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
									</ExpText>
								</ExpTextWrapper>
							</Experience>
							<Experience>
								<ExpImg>
									<img src={Hm} alt='H&M' />
								</ExpImg>
								<ExpTextWrapper>
									<ExpDate>Aug 2016 - Feb 2018</ExpDate>
									<ExpName>Full-stack developer</ExpName>
									<ExpText>
										Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
									</ExpText>
								</ExpTextWrapper>
							</Experience>
						</ExperienceWrapper>
					</CardExperience>
					<CardProjet>
						<h3>Projet</h3>
						<ProjetWrapper>
							<Projet>
								<ProjetImg>
									<img src='https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FrecipeBlogThumbnail.png?alt=media&token=2d696d3c-a8cb-4c7c-907b-561ae1144cc9' />
								</ProjetImg>
								<ProjetContent>
									<ProjetHastagWrapper>
										<ProjetHastag>#HTML</ProjetHastag>
										<ProjetHastag>#CSS</ProjetHastag>
										<ProjetHastag>#Responsive</ProjetHastag>
									</ProjetHastagWrapper>
									<ProjetName>Recipe Blog</ProjetName>
									<ProjetText>
										In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a
										page. The design is from devchallenge.io
									</ProjetText>
									<ProjetButtonWrapper>
										<ProjetButton primary={true}>Demo</ProjetButton>
										<ProjetButton>Code</ProjetButton>
									</ProjetButtonWrapper>
								</ProjetContent>
							</Projet>
							<Projet>
								<ProjetImg>
									<img src='https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FGalleryThumbnail.png?alt=media&token=92894792-41d1-4d99-8cbb-e828322c87fd' />
								</ProjetImg>
								<ProjetContent>
									<ProjetHastagWrapper>
										<ProjetHastag>#HTML</ProjetHastag>
										<ProjetHastag>#CSS</ProjetHastag>
										<ProjetHastag>#Responsive</ProjetHastag>
									</ProjetHastagWrapper>
									<ProjetName>My Gallery</ProjetName>
									<ProjetText>
										In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a
										page. The design is from devchallenge.io
									</ProjetText>
									<ProjetButtonWrapper>
										<ProjetButton primary={true}>Demo</ProjetButton>
										<ProjetButton>Code</ProjetButton>
									</ProjetButtonWrapper>
								</ProjetContent>
							</Projet>
							<Projet>
								<ProjetImg>
									<img src='https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FCheckoutThumbnail.png?alt=media&token=c7ffdbe3-7206-44f2-b1e6-a6b99bf81901' />
								</ProjetImg>
								<ProjetContent>
									<ProjetHastagWrapper>
										<ProjetHastag>#HTML</ProjetHastag>
										<ProjetHastag>#CSS</ProjetHastag>
										<ProjetHastag>#Responsive</ProjetHastag>
									</ProjetHastagWrapper>
									<ProjetName>Checkout</ProjetName>
									<ProjetText>
										In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a
										page. The design is from devchallenge.io
									</ProjetText>
									<ProjetButtonWrapper>
										<ProjetButton primary={true}>Demo</ProjetButton>
										<ProjetButton>Code</ProjetButton>
									</ProjetButtonWrapper>
								</ProjetContent>
							</Projet>
						</ProjetWrapper>
					</CardProjet>
					<Footer>
						<p>Mohamed@DevChallenges.io</p>
					</Footer>
				</HomeContainer>
			</HomeWrapper>
		</>
	);
};

export default Home;

//https://images.unsplash.com/photo-1542625202-258b9106f29e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80

// https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80

// https://images.unsplash.com/photo-1530469641172-8ac15d0a7d6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80
