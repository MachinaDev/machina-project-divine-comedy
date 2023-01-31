import {
	Box,
	Center,
	Heading,
	Flex,
	Stack,
	Checkbox,
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	RadioGroup,
	Radio,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';

const Forms = () => {
	return (
		<Box border='2px' borderRadius='lg' borderColor='gray.400' p={4} m={2}>
			<Center>
				<Heading as='h2' size={{ base: 'xl', lg: '2xl' }} color='pink.400'>
					Theme Forms
				</Heading>
			</Center>
			<Flex
				justify='space-around'
				align={{ base: 'flex-start' }}
				direction={{ base: 'column', md: 'column', xl: 'column' }}
			>
				<Flex
					align='flex-start'
					p={2}
					direction={{ base: 'column', md: 'row' }}
					justify='center'
				>
					<Box border='1px' borderRadius='lg' borderColor='gray.200' m={2} p={3}>
						<FormControl>
							<FormLabel htmlFor='email'>Email address</FormLabel>
							<Input id='email' type='email' border='1px' borderColor='gray.200' />
							<FormHelperText color='gray.500'>
								We'll never share your email.
							</FormHelperText>
						</FormControl>
					</Box>
					<Box border='1px' borderRadius='lg' borderColor='gray.200' m={2} p={4}>
						<FormControl isRequired>
							<FormLabel htmlFor='first-name'>First name</FormLabel>
							<Input id='first-name' placeholder='First name' color='gray.500' />
						</FormControl>
					</Box>
				</Flex>
				<Flex direction={{ base: 'column' }} justify='space-around' align='flex-start' m={2}>
					<Box border='1px' borderRadius='lg' borderColor='gray.200' m={2} p={4}>
						<FormControl as='fieldset'>
							<FormLabel as='legend'>Favorite Naruto Character</FormLabel>
							<RadioGroup defaultValue='Itachi'>
								<Stack spacing='24px' direction={{ base: 'column', lg: 'row' }}>
									<Radio value='Sasuke'>Sasuke</Radio>
									<Radio value='Nagato'>Nagato</Radio>
									<Radio value='Itachi'>Itachi</Radio>
									<Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
								</Stack>
							</RadioGroup>
							<FormHelperText color='gray.500'>
								Select only if you're a fan.
							</FormHelperText>
						</FormControl>
					</Box>
					<Box
						border='1px'
						borderRadius='lg'
						borderColor='gray.200'
						m={2}
						p={4}
						direction={{ base: 'column' }}
					>
						<FormControl>
							<FormLabel htmlFor='country'>Country</FormLabel>
							<Select id='country' placeholder='Select country'>
								<option>United Arab Emirates</option>
								<option>Nigeria</option>
							</Select>
						</FormControl>
					</Box>
				</Flex>
				<Flex
					direction={{ base: 'column', md: 'row' }}
					justify='flex-start'
					align='flex-start'
					m={2}
				>
					<Box border='1px' borderRadius='lg' borderColor='gray.200' m={2} p={4}>
						<FormControl>
							<FormLabel htmlFor='amount'>Amount</FormLabel>
							<NumberInput max={50} min={10}>
								<NumberInputField id='amount' />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
					</Box>
					<Box border='1px' borderRadius='lg' borderColor='gray.200' m={2} p={4}>
						<Checkbox defaultChecked>Checkbox</Checkbox>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Forms;
