import React from "react";
import styles from "./tour-image.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Props {
	image: string;
	title: string;
	price: number;
	sale?: number;
	rating: number;
}

export default function TourImageCard({ image, title, price, sale, rating }: Props) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	});
	return (
		<div className={styles.container}>
			<Image alt="tour" fill objectFit="cover" objectPosition="center" src={image} />
			<div className={styles.content}>
				<div className={styles.price}>
					{sale ? (
						<>
							<span>{formatter.format(price)}</span>
							{formatter.format(sale)}
						</>
					) : (
						formatter.format(price)
					)}
				</div>
				<h5 className={styles.title}>{title}</h5>
				<div className={styles.stars}>
					{Array.from(Array(rating).keys()).map((item) => (
						<FontAwesomeIcon key={item} className={styles["active-star"]} icon={faStar} />
					))}
					{Array.from(Array(5 - rating).keys()).map((item) => (
						<FontAwesomeIcon
							key={item}
							className={styles["default-start"]}
							icon={fasStarRegular}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
