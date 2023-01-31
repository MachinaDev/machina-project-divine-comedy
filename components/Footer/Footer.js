import Image from 'next/image';
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ButtonSocial } from '../../components';
import images from '../../constants/images';

const getDate = new Date();
let year = getDate.getFullYear();

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'row', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Box borderRadius='md'>
					<Image src={images.logo_without_bg} width={75} height={40} />
				</Box>
				<Text>© {year} Machina Dev</Text>
				<Stack direction={'row'} spacing={6}>
					<ButtonSocial label={'Twitter'} href={'#'}>
						<FaTwitter />
					</ButtonSocial>
					<ButtonSocial label={'YouTube'} href={'#'}>
						<FaYoutube />
					</ButtonSocial>
					<ButtonSocial label={'Instagram'} href={'#'}>
						<FaInstagram />
					</ButtonSocial>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
