import React from "react";
import styles from "./destination-card.module.scss";
import Image from "next/image";

interface Props {
	title: string;
	image: string;
}

export default function DestinationCard({ title, image }: Props) {
	return (
		<div className={styles.container}>
			<Image src={image} objectFit="cover" alt="destination" fill objectPosition="center" />
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
		</div>
	);
}
