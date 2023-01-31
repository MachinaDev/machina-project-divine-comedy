import { useState } from 'react';

import { Heading, Flex, Center, Text } from '@chakra-ui/react';

import { InputMatrix, TableMatrix } from '../components';

const Home = () => {
	const [value, setValue] = useState('');
	return (
		<>
			<Center>
				<Heading as='h1' size='4xl' m={6} color='pink.400'>
					La Matrice
				</Heading>
			</Center>
			<Flex
				direction={{ base: 'column' }}
				justify='center'
				textAlign='center'
				mt={2}
				mx='auto'
				maxW='80%'
			>
				<Text fontSize='1.8em' fontWeight='extrabold' mt={1.8} color='gray.600'>
					Tapez un mot ou une phrase et essayez de trouver les nombres 111, 144, 222, 333 ou
					666.
				</Text>
				<Text fontSize='1.4em' mt={2} color='gray.400'>
					Les mots ont une force. Ce sont des nombres clés en guématrie. Si vous tombez dessus,
					votre phrase a de grande chance de faire partie de votre histoire, ou de l'Histoire
					entière.
				</Text>
				<Text fontSize='1.4em' mt={1.8} color='gray.400'>
					Vous avez trouvé un mot avec beaucoup d'impact.
				</Text>
				<Text fontSize='1.2em' color='gray.400' mt={1.8}>
					Exemples : Jesus | Un serpent | Kennedy ...
				</Text>
			</Flex>
			<Flex direction={{ base: 'column' }} justify='center' mt={2}>
				<InputMatrix value={value} setValue={setValue} />
				<TableMatrix value={value} />
			</Flex>
		</>
	);
};

export default Home;
