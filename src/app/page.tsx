"use client";
import Image from "next/image";
import "./page.scss";
import Input from "../components/input/input";
import Select from "../components/select/select";
import Button from "../components/button/button";
import { useEffect, useState } from "react";
import SectionTitle from "../components/section-title/section-title";
import DestinationCard from "../components/card/destination/destination-card";
import TripCard from "../components/card/trip/trip-card";
import WhyUs from "../components/why-us/why-us";
import ArticelCard from "../components/card/article/article-card";
import Sidebar from "../components/sidebar/sidebar";
import DemoCard from "../components/card/demo/demo-card";

export default function Home() {
	const [advancedForm, setAdvancedForm] = useState(false);

	const months = [
		{
			label: "Any Month",
			value: "",
		},
		{
			label: "January",
			value: 1,
		},
		{
			label: "February",
			value: 2,
		},
		{
			label: "March",
			value: 3,
		},
		{
			label: "April",
			value: 4,
		},
		{
			label: "May",
			value: 5,
		},
		{
			label: "Jun",
			value: 6,
		},
		{
			label: "Junly",
			value: 7,
		},
		{
			label: "August",
			value: 8,
		},
		{
			label: "September",
			value: 9,
		},
		{
			label: "October",
			value: 10,
		},
		{
			label: "November",
			value: 11,
		},
		{
			label: "December",
			value: 12,
		},
	];

	const sortTypes = [
		{
			label: "Sort By Date",
			value: "date",
		},
		{
			label: "Price Low to High",
			value: "price_low",
		},
		{
			label: "Price High to Low",
			value: "price_high",
		},
		{
			label: "Sort By Name",
			value: "name",
		},
		{
			label: "Sort By Popularity",
			value: "popular",
		},
		{
			label: "Sort By Review Score",
			value: "review",
		},
	];

	const categories = [
		{
			label: "All Categories",
			value: "",
		},
		{
			label: "Mountain",
			value: "mountain",
		},
		{
			label: "Rural",
			value: "rural",
		},
		{
			label: "Snow & Ice",
			value: "snow-ice",
		},
		{
			label: "Wildlife",
			value: "wildlife",
		},
	];

	const destinations = [
		{
			label: "Any Destinations",
			value: "",
		},
		{
			label: "Tokyo",
			value: "277",
		},
		{
			label: "Seoul",
			value: "278",
		},
		{
			label: "Paris",
			value: "284",
		},
		{
			label: "London",
			value: "209",
		},
		{
			label: "Venice",
			value: "285",
		},
		{
			label: "Miami",
			value: "287",
		},
		{
			label: "Rome",
			value: "289",
		},
		{
			label: "Prague",
			value: "291",
		},
		{
			label: "Kyoto",
			value: "292",
		},
		{
			label: "Hong Kong",
			value: "293",
		},
		{
			label: "Santorini",
			value: "294",
		},
	];

	const destinationCards = [
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
			title: "Tokyo",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
			title: "Seoul",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
			title: "Paris",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
			title: "London",
		},
	];

	const trips = [
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
			price: 5000,
			title: "French Autumn",
			subTitle: "City Tours, Urban",
			rating: 4,
			reviews: 4,
			days: 5,
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
			price: 6000,
			title: "Grand Switzerland",
			subTitle: "Shopping, Mountain, Snow & Ice",
			rating: 4,
			reviews: 4,
			days: 6,
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
			price: 3000,
			title: "Discover Japan",
			subTitle: "City Tours, Iconic",
			rating: 4,
			reviews: 4,
			days: 6,
			sale: 2500,
		},
	];

	const whyUs = [
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
			title: "Handpicked Hotels",
			subtitle:
				"Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
			title: "World Class Service",
			subtitle:
				"Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
			title: "Best Price Guarantee",
			subtitle:
				"Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
		},
	];

	const articles = [
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
			date: "December 10, 2016",
			title: "Memorial Day to Someone Told Me to Travel",
			description:
				"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
			date: "December 10, 2016",
			title: "7 Tips For Nomads On A Budget Trips",
			description:
				"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
		},
		{
			image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
			date: "December 10, 2016",
			title: "Taking A Travel Blog Victory Lap",
			description:
				"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
		},
	];

	const demos = [
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling2.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling3.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling4.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling5.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling6.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling7.jpg",
		"https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling8.jpg",
	];

	useEffect(() => {
		const tourSearch = document.getElementById("tour-search");
		const youtube = document.getElementById("youtube");
		const youtubeWrap = document.getElementById("wrap-youtube");

		const handleScroll = () => {
			if (tourSearch && youtube) {
				const rect = tourSearch.getBoundingClientRect();
				const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

				if (isVisible) {
					youtube.style.transform = `translate3d(0px, ${rect.top / 2}px, 0px)`;
				}
			}
		};

		const onResize = () => {
			if (youtube && youtubeWrap) {
				youtube.style.height = (youtubeWrap.offsetHeight * 120) / 100 + "px";
			}
		};

		window.onresize = onResize;

		window.addEventListener("scroll", handleScroll);

		onResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const sidebarOptions = document.getElementById("options-sidbar");

		if (sidebarOptions) {
			sidebarOptions.addEventListener("mouseover", () => {
				document.body.style.overflowY = "hidden";
			});

			sidebarOptions.addEventListener("mouseout", () => {
				document.body.style.overflowY = "auto";
			});
		}
	}, []);

	return (
		<main className="home-container">
			<div id="tour-search" className="tour-search">
				<div className="overlay"></div>
				<div id="wrap-youtube" className="wrap">
					<div id="youtube" className="youtube"></div>
				</div>
				<div className="center-wrap">
					<div className="inner-content">
						<div className="title-wrap">
							<h2>Where do you want to go?</h2>
							<div>Trips, experiences, and places. All in one service.</div>
						</div>
						<form className="form-search">
							<div className="form-search-wrap">
								<Input
									placeholder="Destination, city"
									iconEnd={<span className="ti-search"></span>}
								/>
								<Select iconEnd={<span className="ti-calendar"></span>} options={months} />
								<Select
									iconEnd={<span className="ti-exchange-vertical"></span>}
									options={sortTypes}
								/>
								<Button>Search</Button>
								{advancedForm && (
									<>
										<Select
											options={categories}
											iconEnd={<span className="ti-angle-down"></span>}
										/>
										<Select
											options={destinations}
											iconEnd={<span className="ti-angle-down"></span>}
										/>
										<Input
											placeholder="Max budget ex. 500"
											iconEnd={<span className="ti-money"></span>}
										/>
									</>
								)}
							</div>
							<div className="advanced-search">
								<p onClick={() => setAdvancedForm((value) => !value)}>
									{advancedForm ? (
										<span className="ti-angle-up"></span>
									) : (
										<span className="ti-angle-down"></span>
									)}
									Advanced Search
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<SectionTitle
					className="destinations-title"
					title="Popular Destinations"
					subTitle="World's best tourist destinations"
				/>

				<div className="list-destinations">
					{destinationCards.map((card, index) => (
						<DestinationCard key={index} title={card.title} image={card.image} />
					))}
				</div>

				<SectionTitle
					className="value-trips-title"
					title="Best Value Trips"
					subTitle="Best offers trips from us"
				/>

				<div className="list-trips">
					{trips.map((trip, index) => (
						<TripCard key={index} trip={trip} />
					))}
				</div>

				<SectionTitle
					className="why-us-title"
					title="Why Choose Us"
					subTitle="Here are reasons you should plan trip with us"
				/>

				<div className="list-why">
					{whyUs.map((item, index) => (
						<WhyUs key={index} image={item.image} subtitle={item.subtitle} title={item.title} />
					))}
				</div>

				<div className="attrative-destination">
					<Image
						src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
						alt="image"
						fill
						objectFit="cover"
						objectPosition="center"
					/>
				</div>

				<SectionTitle
					className="article-tip-title"
					title="Articles & Tips"
					subTitle="Explore some of the best tips from around the world"
				/>

				<div className="list-article">
					{articles.map((article, index) => (
						<ArticelCard key={index} article={article} />
					))}
				</div>
			</div>

			<Sidebar className="right-sidebar" name="option" showOverlay={false}>
				<div className="option-buttons">
					<a className="option" href="#">
						<span className="ti-settings"></span>
					</a>
					<a className="option" href="#">
						<span className="ti-heart"></span>
					</a>
					<a className="option" href="#">
						<span className="ti-book"></span>
					</a>
					<a className="option" href="#">
						<span className="ti-shopping-cart"></span>
					</a>
				</div>
				<div id="options-sidbar" className="options-sidebar">
					<h6 className="demo-title">Created With Grand Tour</h6>
					<p className="demo-desc">
						We designed Grand Tour theme to make it works especially for tour & travel site. Here
						are a few included examples that you can import with one click.
					</p>
					<ul className="demo-list">
						<li>
							<DemoCard
								image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg"
								title="abcd"
							/>
						</li>
						<li>
							<DemoCard
								image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/demo2.jpg"
								title="abcd"
							/>
						</li>
					</ul>

					<h6 className="demo-title">Predefined Colors</h6>
					<ul className="demo-color-list">
						<li>
							<div style={{ backgroundColor: "#FF4A52" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#FF9500" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#FFCC00" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#4CD964" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#5AC8FA" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#007AFF" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#5856D6" }} className="color"></div>
						</li>
						<li>
							<div style={{ backgroundColor: "#FF2D55" }} className="color"></div>
						</li>
					</ul>
					<h6 className="demo-title">Predefined Stylings</h6>
					<ul className="demo-list">
						{demos.map((image, index) => (
							<DemoCard key={index} image={image} title="abcd" />
						))}
					</ul>
				</div>
			</Sidebar>
		</main>
	);
}
