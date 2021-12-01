const About = () => {
	return (
		<div>
			<h1 className='display-4'>
				About Contact Manager
			</h1>
			<p className='lead'>
				Simple app tpo manage contacts
			</p>
			<p className='text-secondary'>
				Verion 1.0.0
			</p>
		</div>
	);
};

/**To get a parameters from a link
 * {props.match.params.id}
 * The props must be passed into the component
 * The id could be whatever we set to be linked to at the Route path
* e.g path='/about/:id'
 path='/about/:name'
 */

export default About;
