import { Flex, InputGroup, Input, InputLeftElement, Text } from '@chakra-ui/react';

const InputMatrix = (props) => {
	const handleChange = (event) => props.setValue(event.target.value);

	return (
		<Flex direction={{ base: 'column' }} justify='center' align='center' p={4} m={3}>
			<InputGroup size='lg'>
				<InputLeftElement pointerEvents='none' color='gray.300' fontSize='2em' children='>' />
				<Input
					value={props.value}
					onChange={handleChange}
					variant='outline'
					placeholder='Tapez votre divine intuition'
					_placeholder={{ opacity: 0.4, color: 'pink.400' }}
					fontSize='1.8em'
				/>
			</InputGroup>
			<Text m={3} color='gray.500' fontSize='2xl'>
				Votre intuition : {props.value}
			</Text>
		</Flex>
	);
};

export default InputMatrix;
