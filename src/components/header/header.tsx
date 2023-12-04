"use client";
import React, { useEffect, useState } from "react";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemProps } from "../nav-item/nav-item";
import TourImageCard from "../card/tour-image/tour-image";
import { faSquareFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../sidebar/sidebar";

export default function Header() {
	const [logo, setLogo] = useState("/logo-white.png");
	const [navData, setNavData] = useState<NavItemProps[]>([
		{
			title: "Home",
			url: "#",
			subMenu: [
				{
					title: "Home 1 - Background Image",
					url: "#",
				},
				{
					title: "Home 2 - Youtube Video",
					url: "#",
				},
				{
					title: "Home 3 - Google Inspired",
					url: "#",
				},
				{
					title: "Home 3 - Travel Site",
					url: "#",
				},
			],
		},
		{
			title: "Tours",
			url: "#",
			subMenu: [
				{
					title: "Tour Classic Fullwidth",
					url: "#",
					children: [
						{
							title: "2 Columns",
							url: "#",
						},
						{
							title: "3 Columns",
							url: "#",
						},
						{
							title: "4 Columns",
							url: "#",
						},
					],
				},
				{
					title: "Tour Classic Sidebar",
					url: "#",
					children: [
						{
							title: "Right Sidebar",
							url: "#",
						},
						{
							title: "Left Sidebar",
							url: "#",
						},
					],
				},
				{
					title: "Tour Grid Fullwidth",
					url: "#",
					children: [
						{
							title: "2 Columns",
							url: "#",
						},
						{
							title: "3 Columns",
							url: "#",
						},
						{
							title: "4 Columns",
							url: "#",
						},
					],
				},
				{
					title: "Tour Grid Sidebar",
					url: "#",
					children: [
						{
							title: "Right Sidebar",
							url: "#",
						},
						{
							title: "Left Sidebar",
							url: "#",
						},
					],
				},
				{
					title: "Tour List Sidebar",
					url: "#",
					children: [
						{
							title: "Right Sidebar",
							url: "#",
						},
						{
							title: "Left Sidebar",
							url: "#",
						},
					],
				},
				{
					title: "Tour Header Type",
					url: "#",
					children: [
						{
							title: "Feature Image",
							url: "#",
						},
						{
							title: "Video",
							url: "#",
						},
					],
				},
				{
					title: "Tour Categories",
					url: "#",
					children: [
						{
							title: "Rural",
							url: "#",
						},
						{
							title: "Snow & Ice",
							url: "#",
						},
						{
							title: "Wildlife",
							url: "#",
						},
						{
							title: "Mountain",
							url: "#",
						},
					],
				},
			],
		},
		{
			title: "Booking",
			url: "#",
			subMenu: [
				{
					title: "Online Payment For Booking",
					url: "#",
					children: [
						{
							title: "Variable Tour Pricing",
							url: "#",
						},
						{
							title: "Simple Tour Pricing",
							url: "#",
						},
					],
				},
				{
					title: "Custom Booking Form",
					url: "#",
					children: [
						{
							title: "Booking Form + Sub Tour Date",
							url: "#",
						},
						{
							title: "Booking Form + Custom Date",
							url: "#",
						},
					],
				},
				{
					title: "Tour Durations",
					url: "#",
					children: [
						{
							title: "Single Day Tour",
							url: "#",
						},
						{
							title: "Multiple Days Tour",
							url: "#",
						},
					],
				},
				{
					title: "Custom Booking URL for Affiliate Tour",
					url: "#",
				},
				{
					title: "Custom Booking using custom HTML & Shortcode",
					url: "#",
				},
				{
					title: "Header Options",
					url: "#",
					children: [
						{
							title: "Standard Background Header",
							url: "#",
						},
						{
							title: "Video Background Header",
							url: "#",
						},
					],
				},
				{
					title: "Layout Options",
					url: "#",
					children: [
						{
							title: "With Sidebar",
							url: "#",
						},
						{
							title: "With Sidebar",
							url: "#",
						},
					],
				},
			],
		},
		{
			title: "Destinations",
			url: "#",
			subMenu: [
				{
					title: "Destination Fullwidth",
					url: "#",
				},
				{
					title: "Destination + Video Header",
					url: "#",
				},
				{
					title: "Destination Right Sidebar",
					url: "#",
				},
				{
					title: "Destination Left Sidebar",
					url: "#",
				},
				{
					title: "Single Destination",
					url: "#",
				},
				{
					title: "Single Destination + Video",
					url: "#",
				},
			],
		},
		{
			title: "Pages",
			url: "#",
			subMenu: [
				{
					title: "About Us",
					url: "#",
				},
				{
					title: "Contact Us",
					url: "#",
				},
				{
					title: "FAQs",
					url: "#",
				},
				{
					title: "Gallery",
					url: "#",
				},
				{
					title: "Page Fullwidth",
					url: "#",
				},
				{
					title: "Page + Video Background Header",
					url: "#",
				},
				{
					title: "Page Right Sidebar",
					url: "#",
				},
				{
					title: "Page Left Sidebar",
					url: "#",
				},
			],
		},
		{
			title: "Blog",
			url: "#",
			subMenu: [
				{
					title: "Blog Right Sidebar",
					url: "#",
				},
				{
					title: "Blog Left Sidebar",
					url: "#",
				},
				{
					title: "Blog Fullwidth",
					url: "#",
				},
				{
					title: "Blog Grid Right Sidebar",
					url: "#",
				},
				{
					title: "Blog Grid Left Sidebar",
					url: "#",
				},
				{
					title: "Blog Grid Fullwidth",
					url: "#",
				},
				{
					title: "Blog Full + Grid Right Sidebar",
					url: "#",
				},
				{
					title: "Blog Full + Grid Left Sidebar",
					url: "#",
				},
				{
					title: "Blog Full + Grid Fullwidth",
					url: "#",
				},
			],
		},
		{
			title: "Shortcodes",
			url: "#",
			subMenu: [
				{
					title: "Accordion & Toggles",
					url: "#",
				},
				{
					title: "Alert Boxes",
					url: "#",
				},
				{
					title: "Animated Content",
					url: "#",
				},
				{
					title: "Buttons & Social Icons",
					url: "#",
				},
				{
					title: "Columns",
					url: "#",
				},
				{
					title: "Google Maps",
					url: "#",
				},
				{
					title: "Image Frame & Animation",
					url: "#",
				},
				{
					title: "Image Teasers",
					url: "#",
				},
				{
					title: "Pricing Tables",
					url: "#",
				},
				{
					title: "Tabs",
					url: "#",
				},
			],
		},
		{
			title: "Shops",
			url: "#",
			subMenu: [
				{
					title: "Shop Fullwidth",
					url: "#",
				},
				{
					title: "Shop Sidebar",
					url: "#",
				},
				{
					title: "Single Product Fullwidth",
					url: "#",
				},
				{
					title: "Single Product With Sidebar",
					url: "#",
				},
			],
		},
	]);
	const [tours, setTours] = useState([
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg",
			title: "5 Lake of Fuji San",
			price: 3900,
			rating: 4,
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg",
			title: "5 Lake of Fuji San",
			price: 4900,
			sale: 4200,
			rating: 4,
		},
	]);

	useEffect(() => {
		function animatedHeader(this: any) {
			const windowWidth = window.innerWidth;

			const header = document.getElementById("header");
			const scrollPosition = window.scrollY;
			if (windowWidth >= 1024) {
				if (header) {
					if (scrollPosition > this.lastScrollTop) {
						console.log("lastScrollTop: ", this.lastScrollTop);
						console.log("scroll down");

						header.classList.add("header-deactive");
						setLogo("/logo-black.png");
					} else if (scrollPosition < this.lastScrollTop) {
						console.log("scroll up");
						header.classList.remove("header-deactive");
						if (scrollPosition > 100) {
							header.classList.add("header-active");
							setLogo("/logo-black.png");
						} else {
							header.classList.remove("header-active");
							setLogo("/logo-white.png");
						}
					}
				}

				(this as any).lastScrollTop = window.scrollY;
			} else {
				if (header) {
					if (scrollPosition > 100) {
						header.classList.add("header-active");
						setLogo("/logo-black.png");
					} else {
						header.classList.remove("header-active");
						setLogo("/logo-white.png");
					}
				}
			}
		}

		window.addEventListener("scroll", animatedHeader);

		return () => {
			window.removeEventListener("scroll", animatedHeader);
		};
	}, []);

	return (
		<header id="header" className="header-wrap">
			<div className="header">
				<div className="logo">
					<Image src={logo} fill objectFit="contain" alt="logo" />
				</div>
				<div className="header-menu">
					<div>
						<ul className="navigation">
							{navData.map((item, index) => (
								<li key={index}>
									<NavItem title={item.title} url={item.url} subMenu={item.subMenu} />
								</li>
							))}
						</ul>
					</div>
					<div className="icons">
						<Link href="#">
							<span className="ti-menu sidebar-menu"></span>
						</Link>
						<div className="cart">
							<div className="cart-count">0</div>
							<Link href="#">
								<span className="ti-shopping-cart"></span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<Sidebar showOverlay name="sidebar-menu">
				<div className="menu-sidebar">
					<div className="menu-wrap">
						<button className="menu-close sidebar-menu">
							<span className="ti-close"></span>
						</button>
						<ul className="menu">
							<li>Home</li>
							<li>Tours</li>
							<li>Booking</li>
							<li>Destinations</li>
							<li>Pages</li>
							<li>Blog</li>
							<li>Shortcodes</li>
							<li>Shop</li>
						</ul>
					</div>
					<div className="tours">
						{tours.map((tour, index) => (
							<TourImageCard
								key={index}
								image={tour.image}
								price={tour.price}
								rating={tour.rating}
								title={tour.title}
								sale={tour.sale}
							/>
						))}
					</div>
					<div className="social">
						<FontAwesomeIcon className="icon" icon={faSquareFacebook} />
						<span className="icon ti-twitter-alt"></span>
						<span className="icon ti-youtube"></span>
						<span className="icon ti-pinterest-alt"></span>
						<span className="icon ti-instagram"></span>
					</div>
				</div>
			</Sidebar>
		</header>
	);
}
