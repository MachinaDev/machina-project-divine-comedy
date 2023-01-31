import Image from 'next/image';
import { chakra, Box, Center, Heading, Flex, Text } from '@chakra-ui/react';
import images from '../../../constants/images';

import { Card } from '../../../components';

const Cards = () => {
	const NextImage = chakra(Image, {
		shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
	});
	return (
		<Box border='2px' borderRadius='lg' borderColor='gray.400' p={4} m={2}>
			<Center>
				<Heading as='h2' size={{ base: 'xl', lg: '2xl' }} m={2} color='red.400'>
					Theme Cards
				</Heading>
			</Center>
			<Flex
				justify='space-around'
				m={2}
				p={2}
				align={{ base: 'center', xl: 'flex-start' }}
				direction={{ base: 'column', md: 'column', xl: 'row' }}
			>
				<Flex m={2}>
					<Card>
						<NextImage
							src={images.visage}
							rounded='full'
							width='80px'
							height='80px'
							boxShadow='md'
							zIndex={1}
							quality={70}
							pos='relative'
							objectFit='cover'
							alt='email letter'
						/>
						<Heading mt={6} maxW={60} size='lg' textAlign='center' color='gray.700'>
							Variant 1
						</Heading>
						<Text mt={6} mb={6} size='sm' color='blackAlpha.500'>
							Test of the variant 1
						</Text>
						<NextImage
							src={images.email}
							width='32px'
							height='32px'
							boxShadow='md'
							zIndex={1}
							quality={70}
							pos='relative'
							objectFit='cover'
							alt='email letter'
						/>
					</Card>
				</Flex>
				<Flex m={2}>
					<Card variant='smooth'>
						<NextImage
							src={images.visage}
							rounded='full'
							width='80px'
							height='80px'
							boxShadow='md'
							zIndex={1}
							quality={70}
							pos='relative'
							objectFit='cover'
							alt='email letter'
						/>
						<Heading mt={6} maxW={60} size='lg' textAlign='center' color='gray.700'>
							Variant Smooth
						</Heading>
						<Text mt={6} mb={6} size='sm' color='blackAlpha.500'>
							Test of the variant Smooth
						</Text>
						<NextImage
							src={images.email}
							width='32px'
							height='32px'
							boxShadow='md'
							zIndex={1}
							quality={70}
							pos='relative'
							objectFit='cover'
							alt='email letter'
						/>
					</Card>
				</Flex>{' '}
				<Flex m={2}>
					<Card>Variant 3</Card>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Cards;
