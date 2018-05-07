import React from 'react'	
const SitePanel = (props) => {
	console.log('Making request to ' + props.userName + '/' + props.chosenSite + '/' + props.chosenTab);
	const response='the result of the request'
	switch(props.chosenTab) {
				case 'Statistics':
				return <div>{response} is passed as an argument</div>
				break;
				case 'Files':
				return <div>asd</div>;
				break;
				case 'Apps':
				return<div>asd</div>;
				break;
				case 'Blacklist':
				return<div>asd</div>;
				break;
				case 'Settings':
				return<div>asd</div>;
				break;
				default:
				return <div> Please select from the tabs above </div>; 
	}
}

export default  SitePanel;