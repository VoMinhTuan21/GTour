import React from "react";
import styles from "./trip-card.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStarRegular } from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";

interface Props {
	trip: {
		image: string;
		price: number;
		title: string;
		subTitle: string;
		rating: number;
		reviews: number;
		days: number;
		sale?: number;
	};
}

export default function TripCard({ trip }: Props) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	});

	return (
		<div className={styles.container}>
			<a href="#" className={styles["image-container"]}>
				<Image className={styles.image} width={700} height={466} alt="trip" src={trip.image} />
				<div className={clsx(styles.price, trip.sale && styles["has-discount"])}>
					{trip.sale && <span>{formatter.format(trip.sale)}</span>}
					{formatter.format(trip.sale ? trip.sale : trip.price)}
				</div>
				{trip.sale && <div className={styles.sale}>Sale</div>}
			</a>
			<div className={styles["portfolio-wrap"]}>
				<a href="#">
					<h4 className={styles.title}>{trip.title}</h4>
				</a>
				<p className={styles["sub-title"]}>{trip.subTitle}</p>

				<div className={styles["attributes-wrap"]}>
					<div className={styles["rating-wrap"]}>
						<div className={styles.stars}>
							{Array.from(Array(trip.rating).keys()).map((item) => (
								<FontAwesomeIcon
									key={item}
									className={clsx(styles.star, styles.fill)}
									icon={faStar}
								/>
							))}

							{Array.from(Array(5 - trip.rating).keys()).map((item) => (
								<FontAwesomeIcon
									key={item}
									className={clsx(styles.star, styles.outline)}
									icon={fasStarRegular}
								/>
							))}
						</div>
						<p className={styles.review}>{trip.reviews} reviews</p>
					</div>
					<div className={styles.days}>
						<span className="ti-time"></span>
						{trip.days} days
					</div>
				</div>
			</div>
		</div>
	);
}
