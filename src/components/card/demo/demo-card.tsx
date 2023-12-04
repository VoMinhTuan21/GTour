import Image from "next/image";
import React from "react";
import styles from "./demo-card.module.scss";
import Button from "../../button/button";

interface Props {
	image: string;
	title: string;
}

export default function DemoCard({ image, title }: Props) {
	return (
		<div className={styles.container}>
			<Image src={image} alt="demo" fill objectFit="cover" objectPosition="center" />
			<div className={styles["demo-hover"]}>
				<h6 className={styles.title}>{title}</h6>
				<Button variant="outline">Launch</Button>
			</div>
		</div>
	);
}
