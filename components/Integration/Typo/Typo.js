import {
	Box,
	Center,
	Heading,
	Flex,
	Text,
	List,
	ListItem,
	ListIcon,
	UnorderedList,
	OrderedList,
} from '@chakra-ui/react';

import { MdSettings, MdCheckCircle } from 'react-icons/md';

const Typo = () => {
	return (
		<Box border='2px' borderRadius='lg' borderColor='gray.400' p={4} m={2}>
			<Center>
				<Heading as='h2' size={{ base: 'xl', lg: '2xl' }} m={2} color='pink.400'>
					Theme Typo
				</Heading>
			</Center>
			<Flex
				justify='space-around'
				align={{ base: 'center', xl: 'flex-start' }}
				m={6}
				direction={{ base: 'column', xl: 'row' }}
			>
				<Flex
					border='1px'
					borderRadius='lg'
					borderColor='gray.200'
					m={6}
					p={4}
					direction={{ base: 'column' }}
				>
					<Heading as='h1' size='4xl' noOfLines={1}>
						(4xl) React & Next
					</Heading>
					<Heading as='h2' size='3xl' noOfLines={1}>
						(3xl) React & Next
					</Heading>
					<Heading as='h2' size='2xl'>
						(2xl) React & Next
					</Heading>
					<Heading as='h2' size='xl'>
						(xl) React & Next
					</Heading>
					<Heading as='h3' size='lg'>
						(lg) React & Next
					</Heading>
					<Heading as='h4' size='md'>
						(md) React & Next
					</Heading>
					<Heading as='h5' size='sm'>
						(sm) React & Next
					</Heading>
					<Heading as='h6' size='xs'>
						(xs) IReact & Next
					</Heading>
				</Flex>
				<Flex
					border='1px'
					borderRadius='lg'
					borderColor='gray.200'
					m={6}
					p={4}
					direction={{ base: 'column' }}
				>
					<Text fontSize='4xl'>(4xl) React & Next</Text>
					<Text fontSize='3xl'>(3xl) React & Next</Text>
					<Text fontSize='2xl'>(2xl) React & Next</Text>
					<Text fontSize='xl'>(xl) React & Next</Text>
					<Text fontSize='lg'>(lg) React & Next</Text>
					<Text fontSize='md'>(md) React & Next</Text>
					<Text fontSize='sm'>(sm) React & Next</Text>
					<Text fontSize='xs'>(xs) React & Next</Text>
				</Flex>
				<Flex
					border='1px'
					borderRadius='lg'
					borderColor='gray.200'
					m={6}
					p={4}
					direction={{ base: 'column' }}
				>
					<Text as='i'>Italic</Text>
					<Text as='u'>Underline</Text>
					<Text as='abbr'>I18N</Text>
					<Text as='cite'>Citation</Text>
					<Text as='del'>Deleted</Text>
					<Text as='em'>Emphasis</Text>
					<Text as='ins'>Inserted</Text>
					<Text as='kbd'>Ctrl + C</Text>
					<Text as='mark'>Highlighted</Text>
					<Text as='s'>Strikethrough</Text>
					<Text as='samp'>Sample</Text>
					<Text as='sub'>sub</Text>
					<Text as='sup'>sup</Text>
				</Flex>
			</Flex>
			<Flex
				direction={{ base: 'column', xl: 'row' }}
				justify='space-around'
				align={{ base: 'center', xl: 'flex-start' }}
				m={4}
			>
				<Box border='1px' borderRadius='lg' borderColor='gray.200' p={4} m={4}>
					<UnorderedList>
						<ListItem>Lorem ipsum dolor sit amet</ListItem>
						<ListItem>Consectetur adipiscing elit</ListItem>
						<ListItem>Integer molestie lorem at massa</ListItem>
						<ListItem>Facilisis in pretium nisl aliquet</ListItem>
					</UnorderedList>
				</Box>
				<Box border='1px' borderRadius='lg' borderColor='gray.200' p={4} m={4}>
					<OrderedList>
						<ListItem>Lorem ipsum dolor sit amet</ListItem>
						<ListItem>Consectetur adipiscing elit</ListItem>
						<ListItem>Integer molestie lorem at massa</ListItem>
						<ListItem>Facilisis in pretium nisl aliquet</ListItem>
					</OrderedList>
				</Box>
				<Box border='1px' borderRadius='lg' borderColor='gray.200' p={4} m={4}>
					<List spacing={3}>
						<ListItem>
							<ListIcon as={MdCheckCircle} color='green.500' />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit
						</ListItem>
						<ListItem>
							<ListIcon as={MdCheckCircle} color='green.500' />
							Assumenda, quia temporibus eveniet a libero incidunt suscipit
						</ListItem>
						<ListItem>
							<ListIcon as={MdCheckCircle} color='green.500' />
							Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
						</ListItem>
						{/* You can also use custom icons from react-icons */}
						<ListItem>
							<ListIcon as={MdSettings} color='green.500' />
							Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
						</ListItem>
					</List>
				</Box>
			</Flex>
		</Box>
	);
};

export default Typo;
