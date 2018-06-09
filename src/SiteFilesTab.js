import React from 'react'
import { Item, Radio, Icon, List} from 'semantic-ui-react'
import DirectoryList from './DirectoryList.js'


var fileList = [
	
	{dir : true, data : [ {dir : false, name : 'asd'}, {dir : false, name : 'wtf'}, { dir : true, data : [ {dir : false, name : 'first'}, {dir : false, name : 'second'	} ] } ]  },
	{dir : false, name : 'cecko'},
	{dir : false, name : 'petko'}

];

const SiteFilesTab = (props) => (

		<List size='huge'>

		<DirectoryList fileList={fileList}/>




		</List>



)

export default SiteFilesTab;