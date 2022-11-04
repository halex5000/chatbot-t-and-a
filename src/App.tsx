
import {AppShell, Avatar, Input, Navbar, Header, Paper, Text, Center, TextInput, Button, Box, Divider, Chip, Space, Grid} from '@mantine/core';
import {IconAt, IconRobot, IconUser} from '@tabler/icons';
import {useEffect, useState} from 'react';

type Message = {
	text: string;
	from: 'chatbot' | 'hooman';
	id: number;
};

function App() {
	const initialMessages: Message[] = [];
	const [messages, setMessages] = useState(initialMessages);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (messages && messages.length > 0) {
			const lastMessage = messages[messages.length - 1];
			console.log('received message', lastMessage);
			if (lastMessage.from === 'hooman') {
				addRobotMessage('thanks for sharing that, let me look into it');
			}
		}
	}, [messages]);

	const addRobotMessage = (message: string) => {
		console.log('adding robot message', message);
		setMessages([...messages, {
			text: message,
			from: 'chatbot',
			id: Date.now(),
		}]);
	};

	const addMessage = () => {
		console.log('adding message', message);
		setMessages([...messages, {
			text: message,
			from: 'hooman',
			id: Date.now(),
		}]);
	};

	return (
		<AppShell
			padding='md'
			navbar={<Navbar width={{base: 300}} height={500} p='xs'>{/* Navbar content */}</Navbar>}
			header={<Header height={60} p='xs'>{/* Header content */}</Header>}
		>
			<Center style={{width: '100%', height: '100%'}}>
				<Paper shadow='xs' p='md'>

					<Paper style={{backgroundColor: '#FFFFFF', height: '100%', minHeight: '500px', width: '80%', minWidth: '500px'}} shadow='xl' radius='xs' p='xl'>
						<Box>
							<Grid>
								{messages.map(message => (
									message.from === 'hooman' ? <Grid.Col span={12}><Text sx={{float: 'left'}} key={message.id}>{message.text}</Text><Space h='md' /></Grid.Col> : null
								))}

								{messages.map(message => (
									message.from === 'hooman' ? null : <Grid.Col span={12}>	<Text sx={{float: 'right'}} color='secondary' key={message.id}>{message.text}</Text><Space h='md' /></Grid.Col>
								))}
							</Grid>
						</Box>
						<Divider my='sm' />
						<Box>
							<TextInput
								placeholder='What is your favorite color?'
								size='xl'
								value={message}
								onChange={event => {
									setMessage(event.currentTarget.value);
								}}
								rightSection={<Button color='indigo' onClick={addMessage}>Send</Button>}
								rightSectionWidth={100}
							/>
						</Box>
					</Paper>
				</Paper>
			</Center>
		</AppShell>
	);
}

export default App;
