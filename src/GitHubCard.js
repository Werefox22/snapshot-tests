import React from "react";
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function GitHubCard() {
	return (
		<Card style={{
			width: '300px',
			margin: 'auto'
		}}>
			<Card.Body style={{textAlign: 'left'}}>
				<Image src="pfp.jpg" roundedCircle thumbnail width='50px' alt='Jack Wright Profile Picture'/>
				<Card.Title style={{display: "inline"}}> Jack Wright</Card.Title>
				<Card.Text>
					Software development student based in NC.
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default GitHubCard