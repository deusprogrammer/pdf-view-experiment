import React, {Component} from 'react'

import { Document, Page } from 'react-pdf'

import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFJsViewer extends Component {
	state = {
		numPages: null,
		pageNumber: 1,
	}
 
	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	}

	render() {
		return (
			<div>
				<h3>JS Viewer</h3>
				{ 
				this.props.bytestream ?
				<div style={{width: "80%", margin: "auto"}}>
			        <Document
						file={this.props.bytestream}
						onLoadSuccess={this.onDocumentLoadSuccess}
			        >
						<Page pageNumber={this.state.pageNumber} />
			        </Document>
			        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
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