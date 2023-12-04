import React from "react";
import styles from "./why-us.module.scss";
import Image from "next/image";

interface Props {
	image: string;
	title: string;
	subtitle: string;
}

export default function WhyUs({ image, title, subtitle }: Props) {
	return (
		<div className={styles.container}>
			<p className={styles["image-container"]}>
				<Image src={image} width={150} height={150} alt="why-us" />
			</p>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.description}>{subtitle}</p>
		</div>
	);
}
