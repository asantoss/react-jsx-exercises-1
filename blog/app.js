/**
 * This app is broken into three components.
 *
 *
 * First we make the header component up
 */

let Header = () => {
	return (
		<div className='header'>
			<div className='header-logo'>Logo Here</div>
			<ul className='header-navlinks'>
				<li>
					<a>Home</a>
				</li>
				<li>
					<a>About</a>
				</li>
				<li>
					<a></a>Contact
				</li>
			</ul>
		</div>
	);
};

/**
 * We move on to the main part of the view which is the component that will render our article with a title and the paragraph
 */
let Article = () => {
	return (
		<article>
			<h1 className='title'>Article Title</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo
				voluptas, nulla blanditiis odio culpa obcaecati at, amet sequi
				laudantium nostrum recusandae eligendi consequatur, aspernatur
				doloremque tenetur ea et. Quidem. Quos, provident nihil. Vero iste ut
				aspernatur nostrum officiis in praesentium voluptate quo omnis doloribus
				alias unde, id dolor, assumenda veritatis velit laborum esse dolorum et
				laboriosam eaque hic. Natus? Aut reiciendis vitae perferendis magni.
				Architecto fugit ad laboriosam illum ducimus cum quas et vero autem
				deleniti alias, quisquam fugiat iusto illo velit laborum temporibus fuga
				placeat non nostrum quasi. Error in facilis aspernatur, deserunt ipsa
				non cumque architecto omnis alias mollitia tempore, modi ullam est,
				praesentium quasi dolorum! Saepe adipisci blanditiis reiciendis pariatur
				eius sit sunt ipsum distinctio. Non!
			</p>
		</article>
	);
};
/**
 *
 * Finally we have the footer.
 */
let Footer = () => {
	return (
		<footer>
			<ul className='footer-links'>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</footer>
	);
};

/**
 * We then define our main component as a root that will house the three other components we wrote.
 *
 * Think of this as the main component that makes the app, of which this main component is made up of many other small components all the way down.
 */
let Blog = () => {
	return (
		<div>
			<Header />
			<Article />
			<Footer />
		</div>
	);
};

//Finnally we just tell the ReactDOM library to render our React Components

ReactDOM.render(<Blog />, document.getElementById('root'));
