import { useState, useEffect } from 'react';

import { Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { classicLogic, inverseLogic, allDigits } from '../../constants/converter';

const TableMatrix = (props) => {
	const [result, setResult] = useState({
		classicLogic: 0,
		inverseLogic: 0,
		classicNostraLogic: 0,
		inverseNostraLogic: 0,
	});

	const [color, setColor] = useState({
		regular: 'regular',
		nostra: 'nostra',
		extreme: 'extreme',
	});

	const [fontSize, setFontSize] = useState({
		regular: 'lg',
		nostra: 'lg',
		extreme: 'lg',
	});

	const [animation, setAnimation] = useState({
		x: [0, 0, 0],
		regular: 1,
		nostra: 1,
		extreme: 1,
	});

	const [tableStyles, setTableStyles] = useState({
		tableContainerProps: {
			animate: animation,
			transition: { ease: 'easeOut', duration: 0.02 },
		},
		tdRegularProps: {
			as: motion.td,
			animate: { scale: animation.regular },
			transition: '0.05s linear',
			fontSize: fontSize.regular,
			color: color.regular,
		},
		tdNostraProps: {
			as: motion.td,
			animate: { scale: animation.nostra },
			transition: '0.05s linear',
			fontSize: fontSize.nostra,
			color: color.nostra,
		},
		tdExtremeProps: {
			as: motion.td,
			animate: { scale: animation.extreme },
			transition: '0.05s linear',
			fontSize: fontSize.extreme,
			color: color.extreme,
		},
	});

	const [matchingNumbers, setMatchingNUmbers] = useState([
		111, 222, 333, 666, 144, -111, -222, -333, -666, -144,
	]);

	useEffect(() => {
		if (props.value) {
			setResult({
				classicLogic: convertFunc(formatInput().regular, classicLogic),
				classicNostraLogic: convertFunc(formatInput().nostra, classicLogic),
				inverseLogic: convertFunc(formatInput().regular, inverseLogic),
				inverseNostraLogic: convertFunc(formatInput().nostra, inverseLogic),
			});
		}
	}, [props.value]);

	useEffect(() => {
		if (props.value) {
			const foundNumbers = hitNumbers(result);

			setColor({
				regular: 'regular',
				nostra: 'nostra',
				extreme: 'extreme',
			});
			setFontSize({
				regular: 'xl',
				nostra: 'xl',
				extreme: 'xl',
			});
			setAnimation({
				regular: 1,
				nostra: 1,
				extreme: 1,
				x: [0, 0, 0],
			});
			extremeStyles(foundNumbers);
			nostraStyles(foundNumbers);
			regularStyles(foundNumbers);
		}
	}, [result]);

	useEffect(() => {
		if (props.value) {
			setTableStyles({
				...tableStyles,
				tableContainerProps: {
					animate: animation,
				},
				tdRegularProps: {
					animate: { scale: animation.regular },
					fontSize: fontSize.regular,
					color: color.regular,
				},
				tdNostraProps: {
					animate: { scale: animation.nostra },
					fontSize: fontSize.nostra,
					color: color.nostra,
				},
				tdExtremeProps: {
					animate: { scale: animation.extreme },
					fontSize: fontSize.extreme,
					color: color.extreme,
				},
			});
		}
	}, [animation, color, fontSize]);

	const hitNumbers = (result) => {
		const { classicLogic, inverseLogic, classicNostraLogic, inverseNostraLogic } = result;

		const allFound = {};

		const findTargets = (inputValue) => {
			return matchingNumbers.find((occ) => occ == inputValue);
		};

		//Logic\\
		// Classic
		allFound.foundMatchClassic = findTargets(classicLogic);
		allFound.foundMatchClassicBase3 = findTargets(classicLogic * 3);
		allFound.foundMatchClassicBase6 = findTargets(classicLogic * 6);
		allFound.foundMatchClassicBase9 = findTargets(classicLogic * 9);
		// Nosta
		allFound.foundMatchNostra = findTargets(classicNostraLogic);
		allFound.foundMatchNostraBase3 = findTargets(classicNostraLogic * 3);
		allFound.foundMatchNostraBase6 = findTargets(classicNostraLogic * 6);
		allFound.foundMatchNostraBase9 = findTargets(classicNostraLogic * 9);
		// Extreme
		allFound.foundMatchExtreme = findTargets(classicLogic - inverseLogic);
		allFound.foundMatchExtremeBase3 = findTargets(classicLogic * 3 - inverseLogic * 3);
		allFound.foundMatchExtremeBase6 = findTargets(classicLogic * 6 - inverseLogic * 6);
		allFound.foundMatchExtremeBase9 = findTargets(classicLogic * 9 - inverseLogic * 9);

		//Inverse\\
		// Classic
		allFound.foundMatchInverseClassic = findTargets(inverseLogic);
		allFound.foundMatchInverseClassicBase3 = findTargets(inverseLogic * 3);
		allFound.foundMatchInverseClassicBase6 = findTargets(inverseLogic * 6);
		allFound.foundMatchInverseClassicBase9 = findTargets(inverseLogic * 9);
		// Nosta
		allFound.foundMatchInverseNostra = findTargets(inverseNostraLogic);
		allFound.foundMatchInverseNostraBase3 = findTargets(inverseNostraLogic * 3);
		allFound.foundMatchInverseNostraBase6 = findTargets(inverseNostraLogic * 6);
		allFound.foundMatchInverseNostraBase9 = findTargets(inverseNostraLogic * 9);
		// Extreme
		allFound.foundMatchInverseExtreme = findTargets(inverseLogic - classicLogic);
		allFound.foundMatchInverseExtremeBase3 = findTargets(inverseLogic * 3 - classicLogic * 3);
		allFound.foundMatchInverseExtremeBase6 = findTargets(inverseLogic * 6 - classicLogic * 6);
		allFound.foundMatchInverseExtremeBase9 = findTargets(inverseLogic * 9 - classicLogic * 9);

		return allFound;
	};

	const extremeStyles = (allFound) => {
		if (
			allFound.foundMatchExtreme ||
			allFound.foundMatchExtremeBase3 ||
			allFound.foundMatchExtremeBase6 ||
			allFound.foundMatchExtremeBase9 ||
			allFound.foundMatchInverseExtreme ||
			allFound.foundMatchInverseExtremeBase3 ||
			allFound.foundMatchInverseExtremeBase6 ||
			allFound.foundMatchInverseExtremeBase9
		) {
			setColor({ ...color, extreme: 'extremeMatch' });
			setFontSize({ ...fontSize, extreme: '2xl' });
			setAnimation({ ...animation, extreme: 1.15, x: [2, -2, 0] });
		}
	};

	const nostraStyles = (allFound) => {
		if (
			allFound.foundMatchNostra ||
			allFound.foundMatchNostraBase3 ||
			allFound.foundMatchNostraBase6 ||
			allFound.foundMatchNostraBase9 ||
			allFound.foundMatchInverseNostra ||
			allFound.foundMatchInverseNostraBase3 ||
			allFound.foundMatchInverseNostraBase6 ||
			allFound.foundMatchInverseNostraBase9
		) {
			setColor({ ...color, nostra: 'nostraMatch' });
			setFontSize({ ...fontSize, nostra: '2xl' });
			setAnimation({ ...animation, nostra: 1.15, x: [2, -2, 0] });
		}
	};

	const regularStyles = (allFound) => {
		if (
			allFound.foundMatchClassic ||
			allFound.foundMatchClassicBase3 ||
			allFound.foundMatchClassicBase6 ||
			allFound.foundMatchClassicBase9 ||
			allFound.foundMatchInverseClassic ||
			allFound.foundMatchInverseClassicBase3 ||
			allFound.foundMatchInverseClassicBase6 ||
			allFound.foundMatchInverseClassicBase9
		) {
			setColor({ ...color, regular: 'regularMatch' });
			setFontSize({ ...fontSize, regular: '2xl' });
			setAnimation({ ...animation, regular: 1.15, x: [2, -2, 0] });
		}
	};

	const formatInput = () => {
		const formatedValues = {
			regular: '',
			nostra: '',
		};

		// Regex
		const eAccentRegex = /[eéèëê]/gi;
		const uAccentRegex = /[ùüû]/gi;
		const oAccentRegex = /[ôö]/gi;
		const nostraRegex = /[aeiuoy]/gi;
		const numbersRegex = /\d+/g;
		const specRegex = /[^A-Za-z0-9]/gi;

		// Formating
		const lowerCaseValue = props.value.toLowerCase();
		const noEAccent = lowerCaseValue.replace(eAccentRegex, 'e');
		const noUAccent = noEAccent.replace(uAccentRegex, 'u');
		const noOAccent = noUAccent.replace(oAccentRegex, 'o');
		// const noSpec = noOAccent.replace(specRegex, '');
		const noNumbers = noOAccent.replace(numbersRegex, '');

		// Only Numbers
		const findNumbers = noOAccent.match(numbersRegex);

		const numbersArray = [];
		const regularFullFormated = [];
		const nostraFullFormated = [];

		const getHundred = (hundred) => {
			const unity = '';
			if (hundred == 1) unity = 'cent';
			if (hundred == 2) unity = 'deux cent';
			if (hundred == 3) unity = 'trois cent';
			if (hundred == 4) unity = 'quatre cent';
			if (hundred == 5) unity = 'cinq cent';
			if (hundred == 6) unity = 'six cent';
			if (hundred == 7) unity = 'sept cent';
			if (hundred == 8) unity = 'huit cent';
			if (hundred == 9) unity = 'neuf cent';
			return unity;
		};

		const getThousand = (thousand) => {
			const unity = '';
			if (thousand == 1) unity = 'mille';
			if (thousand == 2) unity = 'deux mille';
			if (thousand == 3) unity = 'trois mille';
			if (thousand == 4) unity = 'quatre mille';
			if (thousand == 5) unity = 'cinq mille';
			if (thousand == 6) unity = 'six mille';
			if (thousand == 7) unity = 'sept mille';
			if (thousand == 8) unity = 'huit mille';
			if (thousand == 9) unity = 'neuf mille';
			return unity;
		};

		const evaluateNumbers = (numbers) => {
			if (numbers) {
				let arrayDigits;
				let hundredThousand;
				let tenThousand;
				let thousandUnity;
				let thousand;
				let hundred;
				let tens;
				let numberEval = numbers.replace(/\s+/g, '').length;
				switch (numberEval) {
					case 1:
						tens = numbers.substring(0);
						arrayDigits = allDigits.find((occ) => occ.letter === tens);
						numbersArray.push(arrayDigits.frenchNumber);

						break;
					case 2:
						tens = numbers.substring(0);
						arrayDigits = allDigits.find((occ) => occ.letter === tens);
						numbersArray.push(arrayDigits.frenchNumber);

						break;
					case 3:
						hundred = numbers.substring(0, 1);
						tens = numbers.substring(1);
						arrayDigits = allDigits.find((occ) => occ.letter === tens);
						numbersArray.push(getHundred(hundred));
						numbersArray.push(arrayDigits.frenchNumber);

						break;
					case 4:
						thousand = numbers.substring(0, 1);
						hundred = numbers.substring(1, 2);
						tens = numbers.substring(2);
						arrayDigits = allDigits.find((occ) => occ.letter === tens);
						numbersArray.push(getThousand(thousand));
						numbersArray.push(getHundred(hundred));
						numbersArray.push(arrayDigits.frenchNumber);

						break;
					case 5:
						tenThousand = numbers.substring(0, 2);
						hundred = numbers.substring(2, 3);
						tens = numbers.substring(3);
						thousandUnity = allDigits.find((occ) => occ.letter === tenThousand);
						arrayDigits = allDigits.find((occ) => occ.letter === tens);
						numbersArray.push(`${thousandUnity.frenchNumber} mille`);
						numbersArray.push(getHundred(hundred));
						numbersArray.push(arrayDigits.frenchNumber);
						break;

					case 6:
						let thousandTens;
						hundredThousand = numbers.substring(0, 1);
						tenThousand = numbers.substring(1, 3);
						hundred = numbers.substring(3, 4);
						tens = numbers.substring(4);
						thousandTens = allDigits.find((occ) => occ.letter === tenThousand);
						arrayDigits = allDigits.find((occ) => occ.letter === tens);
						numbersArray.push(getHundred(hundredThousand));
						numbersArray.push(`${thousandTens.frenchNumber} mille`);
						numbersArray.push(getHundred(hundred));
						numbersArray.push(arrayDigits.frenchNumber);
						break;
				}
			}
		};

		// If numbers in input
		if (findNumbers) {
			findNumbers.map((numbers) => {
				evaluateNumbers(numbers);
			});
			const numbersArrayToStringNoCommas = numbersArray.join(' ');

			// Avoid numbers in the input
			const noNumbersNostra = numbersArrayToStringNoCommas.replace(nostraRegex, '');

			// Transform string in array
			const regularToString = numbersArrayToStringNoCommas.split('');

			const nostraToString = noNumbersNostra.split('');
			regularFullFormated.push.apply(regularFullFormated, regularToString);
			nostraFullFormated.push.apply(nostraFullFormated, nostraToString);
		}

		// Add the string to the regular array
		const addLettersRegular = noNumbers.split('');
		regularFullFormated.push.apply(regularFullFormated, addLettersRegular);

		// Nostra
		const noVoyelle = noNumbers.replace(nostraRegex, '');
		// Add the string to the nostra array
		const addLettersNostra = noVoyelle.split('');
		nostraFullFormated.push.apply(nostraFullFormated, addLettersNostra);

		// Add to Object
		formatedValues.regular = regularFullFormated;
		formatedValues.nostra = nostraFullFormated;

		return formatedValues;
	};

	const convertFunc = (formatedInput, lettersArray) => {
		const allConvertion = [0];
		formatedInput.map((letter) => {
			const result = lettersArray.find((occ) => occ.letter === letter);
			allConvertion.push(result.number);
		});

		const inputSum = allConvertion.reduce(function (a, b) {
			return a + b;
		});
		return inputSum;
	};

	return (
		<Flex
			className='letest'
			direction={{ base: 'column', lg: 'row' }}
			h={{ base: 'auto' }}
			w={{ base: '100%' }}
			justify='center'
			align='center'
			p={4}
			mb={6}
		>
			<TableContainer
				as={motion.div}
				animate={tableStyles.tableContainerProps.animate}
				transition={tableStyles.tableContainerProps.transition}
				border='1px'
				rounded='lg'
				m={3}
				p={3}
			>
				<Table variant='simple' size='lg' w='100%'>
					<TableCaption fontSize='2xl' placement='top' m={3}>
						Matrice Classique
					</TableCaption>
					<Thead>
						<Tr>
							<Th>Type</Th>
							<Th>Extreme</Th>
							<Th>Nostra</Th>
							<Th>Normal</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Th>Logic</Th>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.classicLogic - result.inverseLogic}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.classicNostraLogic}
							</Td>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.classicLogic}
							</Td>
						</Tr>
						<Tr>
							<Th>Base 3</Th>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.classicLogic * 3 - result.inverseLogic * 3}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.classicNostraLogic * 3}
							</Td>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.classicLogic * 3}
							</Td>
						</Tr>
						<Tr>
							<Th>Base 6</Th>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.classicLogic * 6 - result.inverseLogic * 6}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.classicNostraLogic * 6}
							</Td>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.classicLogic * 6}
							</Td>
						</Tr>
						<Tr>
							<Th>Base 9</Th>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.classicLogic * 9 - result.inverseLogic * 9}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.classicNostraLogic * 9}
							</Td>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.classicLogic * 9}
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
			<TableContainer
				as={motion.div}
				animate={tableStyles.tableContainerProps.animate}
				transition={tableStyles.tableContainerProps.transition}
				border='1px'
				rounded='lg'
				m={3}
				p={3}
			>
				<Table variant='simple' size='lg'>
					<TableCaption fontSize='2xl' placement='top' m={3}>
						Matrice Inverse
					</TableCaption>
					<Thead>
						<Tr>
							<Th>Normal</Th>
							<Th>Nostra</Th>
							<Th>Extreme</Th>
							<Th>Type</Th>
						</Tr>
					</Thead>

					<Tbody>
						<Tr>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.inverseLogic}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.inverseNostraLogic}
							</Td>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.inverseLogic - result.classicLogic}
							</Td>
							<Th>Logic</Th>
						</Tr>
						<Tr>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.inverseLogic * 3}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.inverseNostraLogic * 3}
							</Td>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.inverseLogic * 3 - result.classicLogic * 3}
							</Td>
							<Th>Base 3</Th>
						</Tr>
						<Tr>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.inverseLogic * 6}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.inverseNostraLogic * 6}
							</Td>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.inverseLogic * 6 - result.classicLogic * 6}
							</Td>
							<Th>Base 6</Th>
						</Tr>
						<Tr>
							<Td
								as={tableStyles.tdRegularProps.as}
								animate={tableStyles.tdRegularProps.animate}
								transition={tableStyles.tdRegularProps.transition}
								color={tableStyles.tdRegularProps.color}
								fontSize={tableStyles.tdRegularProps.fontSize}
							>
								{result.inverseLogic * 9}
							</Td>
							<Td
								as={tableStyles.tdNostraProps.as}
								animate={tableStyles.tdNostraProps.animate}
								transition={tableStyles.tdNostraProps.transition}
								color={tableStyles.tdNostraProps.color}
								fontSize={tableStyles.tdNostraProps.fontSize}
							>
								{result.inverseNostraLogic * 9}
							</Td>
							<Td
								as={tableStyles.tdExtremeProps.as}
								animate={tableStyles.tdExtremeProps.animate}
								transition={tableStyles.tdExtremeProps.transition}
								color={tableStyles.tdExtremeProps.color}
								fontSize={tableStyles.tdExtremeProps.fontSize}
							>
								{result.inverseLogic * 9 - result.classicLogic * 9}
							</Td>
							<Th>Base 9</Th>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Flex>
	);
};

export default TableMatrix;
