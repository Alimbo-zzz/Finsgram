import React from 'react';
import {
	Header, SecIntro, SecWhatIs, SecWhyJoin,
	SecCanJoin, SecNews, SecOrganizer, SecSponsors,
	SecForm, SecContacts, Footer
} from '@/components';

function App(props) {

	return (<>
		<div className='wrapper'>
			<Header />
			<SecIntro />
			<SecWhatIs />
			<SecWhyJoin />
			<SecCanJoin />
			<SecNews />
			<SecOrganizer />
			<SecSponsors />
			<SecForm />
			<SecContacts />
			<Footer />
		</div>
	</>);
}

export default App;