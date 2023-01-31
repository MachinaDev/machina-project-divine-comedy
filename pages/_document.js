import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='fr'>
				<Head>
					<link
						rel='apple-touch-icon'
						sizes='76x76'
						href='/static/favicons/apple-touch-icon-76x76.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='57x57'
						href='/static/favicons/apple-touch-icon-57x57.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='114x114'
						href='/static/favicons/apple-touch-icon-114x114.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='72x72'
						href='/static/favicons/apple-touch-icon-72x72.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='144x144'
						href='/static/favicons/apple-touch-icon-144x144.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='60x60'
						href='/static/favicons/apple-touch-icon-60x60.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='120x120'
						href='/static/favicons/apple-touch-icon-120x120.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='76x76'
						href='/static/favicons/apple-touch-icon-76x76.png'
					/>
					<link
						rel='apple-touch-icon-precomposed'
						sizes='152x152'
						href='/static/favicons/apple-touch-icon-152x152.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/static/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/static/favicons/favicon-16x16.png'
					/>
					<link
						rel='icon'
						type='image/png'
						href='/static/favicons/favicon-196x196.png'
						sizes='196x196'
					/>
					<link
						rel='icon'
						type='image/png'
						href='/static/favicons/favicon-96x96.png'
						sizes='96x96'
					/>
					<link
						rel='icon'
						type='image/png'
						href='/static/favicons/favicon-128.png'
						sizes='128x128'
					/>
					<meta name='msapplication-TileImage' content='/static/favicons/mstile-144x144.png' />
					<meta
						name='msapplication-square70x70logo'
						content='/static/favicons/mstile-70x70.png'
					/>
					<meta
						name='msapplication-square150x150logo'
						content='/static/favicons/mstile-150x150.png'
					/>
					<meta
						name='msapplication-wide310x150logo'
						content='/static/favicons/mstile-310x150.png'
					/>
					<meta
						name='msapplication-square310x310logo'
						content='/static/favicons/mstile-310x310.png'
					/>
					<link rel='manifest' href='/static/favicons/site.webmanifest' />
					<link
						rel='mask-icon'
						href='/static/favicons/safari-pinned-tab.svg'
						color='#5bbad5'
					/>
					<meta
						name='description'
						content='Bienvenue sur le projet Divine Intuition. Tester des mots ou des phrases. Si vous tombez sur les nombres 111, 144, 222, 333 ou 666, banco ! Il y a une forte probabilité que cela fasse parti de votre destin.'
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
