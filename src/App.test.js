import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';

test('renders a snapshot', () => {
	const tree = renderer.create(<App />).toJSON()
	expect(tree).toMatchSnapshot()
})

test('renders a snapshot of the github card', () => {
	const tree = renderer.create(<GitHubCard />).toJSON()
	expect(tree).toMatchSnapshot()
})