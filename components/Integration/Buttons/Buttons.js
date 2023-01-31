import { Box, Center, Badge, Heading, Flex, Button, HStack } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { ButtonSocial } from '../../../components';

const Buttons = () => {
	return (
		<Box border='2px' borderRadius='lg' borderColor='gray.400' p={4} m={2}>
			<Center>
				<Heading as='h2' size={{ base: 'xl', lg: '2xl' }} m={2} color='pink.300'>
					Theme Buttons
				</Heading>
			</Center>

			<Flex
				justify='center'
				align={{ base: 'center', xl: 'flex-start' }}
				direction={{ base: 'column', md: 'column', xl: 'row' }}
			>
				<Flex
					border='1px'
					borderRadius='lg'
					borderColor='gray.200'
					m={3}
					p={4}
					direction={{ base: 'column', md: 'row', xl: 'row' }}
					justify='center'
				>
					<Button variant='solid' m={2}>
						Solid
					</Button>
					<Button variant='outline' m={2}>
						Outlined
					</Button>
					<Button variant='ghost' m={2}>
						Ghost
					</Button>
					<Button variant='link' m={2}>
						Link
					</Button>
					<Button variant='other' m={2}>
						Other
					</Button>
				</Flex>

				<Flex border='1px' borderRadius='lg' borderColor='gray.200' p={4} m={3}>
					<ButtonSocial label={'Twitter'} href={'#'}>
						<FaTwitter />
					</ButtonSocial>
					<ButtonSocial label={'YouTube'} href={'#'} ml={2}>
						<FaYoutube />
					</ButtonSocial>
					<ButtonSocial label={'Instagram'} href={'#'} ml={2}>
						<FaInstagram />
					</ButtonSocial>
				</Flex>
				<Flex
					border='1px'
					borderRadius='lg'
					borderColor='gray.200'
					m={3}
					p={4}
					direction={{ base: 'column', md: 'row', lg: 'row' }}
				>
					<Badge m={2}>Default</Badge>
					<Badge colorScheme='green' m={2}>
						Success
					</Badge>
					<Badge colorScheme='red' m={2}>
						Removed
					</Badge>
					<Badge colorScheme='purple' m={2}>
						New
					</Badge>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Buttons;
