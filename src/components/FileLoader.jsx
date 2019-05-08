import React, {Component} from 'react'

export default class FileLoader extends Component {
	onFileChanged = (e) => {
		let fr = new FileReader()
		let file = e.target.files[0]

		fr.onloadend = () => {
			this.props.onFileLoad(fr.result)
		}

		fr.readAsDataURL(file)
	}

	render() {
		return (
			<div>
				<h3>Choose a PDF File</h3>
				<input type="file" onChange={(e) => {this.onFileChanged(e)}} />
			</div>
		)
	}
}