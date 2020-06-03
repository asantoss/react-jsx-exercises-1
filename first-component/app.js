let FirstComponentWithJSX = () => {
	//With this approach we achieved the exact same thing. as the other. What we did instead is..
	//We also used a style.css linked in the html to achieve the styling. We could hoever used it throught the same method of passing a style object.
	return (
		<div className='windows_logo'>
			<div style={{ backgroundColor: '#F36523' }}></div>
			<div style={{ backgroundColor: '#8DC73F' }}></div>
			<div style={{ backgroundColor: '#00ADEF' }}></div>
			<div style={{ backgroundColor: '#FFC20F' }}></div>
		</div>
	);
};

ReactDOM.render(<FirstComponentWithJSX />, document.getElementById('root'));

///This is how we would solve it without JSX. This way is alot more code and thus the reason why JSX was born!
const FirstComponent = () => {
	///Our component is a function that returns some instructions for react to create some markup.
	return React.createElement(
		///When JSX runs through babel this is what it returns.
		//this first argument is the type of element we want rendered. In this case its a div
		'div',
		//The second argument are the props we are passing down, or Properties.
		{
			class: 'windows_logo',
		},

		//Since our the root element of this component is a div, we can pass multiple children to it.
		//This wouldn't work if our root element was something like an img or input which takes no children.
		/**
         * 
         * Similar to saying <div>
         * <div></div>
         * <div></div>
         * <div></div>
         * <div ></div>
         


         * </div>
         */
		React.createElement('div', {
			style: {
				margin: '5px',
				flexBasis: '35%',
				backgroundColor: '#f36523',
			},
		}),
		React.createElement('div', {
			style: {
				margin: '5px',
				flexBasis: '35%',
				backgroundColor: '#8dc73f',
			},
		}),
		React.createElement('div', {
			style: {
				margin: '5px',
				flexBasis: '35%',
				backgroundColor: '#00adef',
			},
		}),
		React.createElement('div', {
			style: {
				margin: '5px',
				flexBasis: '35%',
				backgroundColor: '#ffc20f',
			},
		})
	);
};

//We will achieve the exact same result if we call it as firstComponent or First Component with jsx..
// ReactDOM.render(
// 	React.createElement('div', null, FirstComponent()),
// 	document.getElementById('root')
// );

//THIS WILL RENDER TWO WINDOWS LOGOS
// ReactDOM.render(<FirstComponentWithJSX />, document.getElementById('root'));
