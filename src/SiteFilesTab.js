import React from 'react'
import { Item, Radio, Icon, List} from 'semantic-ui-react'
import DirectoryList from './DirectoryList.js'
import './UserContent.css'


var fileList = [
	
	{dir : true, name : 'first dir', data : 
		[ {dir : false, name : 'asd'}, {dir : false, name : 'wtf'}, { dir : true, name : 'nested dir', data : [ {dir : false, name : 'first'}, {dir : false, name : 'second'} ] } ]  },
	{dir : false, name : 'cecko'},
	{dir : false, name : 'petko'},
	{dir : true, name : 'second dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'third dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fourth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fifth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'second dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'third dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fourth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fifth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]}

];

const SiteFilesTab = (props) => (

		<List size='huge' className='overflowY-SitePanel-wrapper'>
			<DirectoryList fileList={fileList} dirName="root"/>
		</List>

)

export default SiteFilesTab;