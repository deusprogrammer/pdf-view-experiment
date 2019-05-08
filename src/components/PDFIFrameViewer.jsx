import React, {Component} from 'react'

export default class PDFIFrameViewer extends Component {
	render() {
		return (
			<div>
				<h3>IFrame Viewer</h3>
				{ 
				this.props.bytestream ?
				<div>
					<iframe title="The Document" href={this.props.bytestream} width="800" height="600" />
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