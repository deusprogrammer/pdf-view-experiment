import React, {Component} from 'react'

export default class PDFEmbedViewer extends Component {
	render() {
		return (
			<div>
				<h3>Embedded Viewer</h3>
				{ 
				this.props.bytestream ?
				<div>
					<embed src={this.props.bytestream} width="800" height="600" />
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