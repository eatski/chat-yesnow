import "sanitize.css";
import "@/styles/base.css";
import { Metadata } from "next";
import { texts } from "@/texts";

export const metadata: Metadata = {
	title: `${texts.serviceName}(${texts.serviceNickname}) - ${texts.serviceDescription}`,
	description: texts.serviceDescription,
	applicationName: texts.serviceName,
	viewport: "width=device-width, initial-scale=1.0",
	openGraph: {
		url: "https://iesona.com",
		title: `${texts.serviceName}(${texts.serviceNickname}) - ${texts.serviceDescription}`,
		description: texts.serviceDescription,
	},
	other: {
		"google-site-verification": "IOUrzGJWxf4PAzsbT3sjOdM63TI1ELMEpDhmtX0QlWQ",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
