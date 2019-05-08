import React, {Component} from 'react'

export default class PDFObjectViewer extends Component {
	render() {
		return (
			<div>
				<h3>Object Viewer</h3>
				{ 
				this.props.bytestream ?
				<div>
					<object data={this.props.bytestream} width="800" height="600" />
				</div>
				:
				<div>
		        	<p>Please select a file to continue</p>
		        </div>
		    	}
			</div>
		)
	}
}