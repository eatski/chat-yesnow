import "sanitize.css";
import "@/designSystem/base.css";
import { ReactQueryContextProvider } from "@/common/context/ReactQueryContextProvider";
import { brand } from "@/common/texts";
import { keysOverride } from "@/components/headMeta";
import { Toast } from "@/components/toast";
import { Layout } from "./_components/layout";

export const metadata = {
	title: `${brand.serviceName}(${brand.serviceNickname}) - ${brand.serviceDescription}`,
	description: brand.serviceDescriptionLong,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="google-site-verification"
					content="IOUrzGJWxf4PAzsbT3sjOdM63TI1ELMEpDhmtX0QlWQ"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:url" content="https://iesona.com" />
				<meta
					key={keysOverride.metaOgpTitle}
					property="og:title"
					content={`${brand.serviceName}(${brand.serviceNickname}) - ${brand.serviceDescription}`}
				/>
				<meta
					key={keysOverride.metaOgpTitle}
					property="og:site_name"
					content={brand.serviceName}
				/>
				<meta
					key={keysOverride.metaOgpDescription}
					property="og:description"
					content={brand.serviceDescriptionLong}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://iesona.com/card.png" />
				<meta name="twitter:card" content="summary" />
				<meta
					name="twitter:image"
					content="https://iesona.com/card_square.png"
				/>
			</head>
			<body>
				<ReactQueryContextProvider>
					<Toast>
						<Layout>{children}</Layout>
					</Toast>
				</ReactQueryContextProvider>
			</body>
		</html>
	);
}
