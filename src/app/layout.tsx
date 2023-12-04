import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";
import Header from "../components/header/header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "../components/footerr/footer";
config.autoAddCss = false;

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}