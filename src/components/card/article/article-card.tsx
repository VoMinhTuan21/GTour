import React from "react";
import styles from "./article-card.module.scss";
import Image from "next/image";

interface Props {
	article: {
		image: string;
		date: string;
		title: string;
		description: string;
	};
}

export default function ArticelCard({ article }: Props) {
	return (
		<div className={styles.container}>
			<a className={styles["image-container"]} href="#">
				<Image src={article.image} alt="image" fill objectFit="cover" objectPosition="contain" />
			</a>
			<div className={styles.info}>
				<div className={styles.date}>{article.date}</div>
				<h6 className={styles.title}>{article.title}</h6>
				<p className={styles.description}>{article.description}</p>
			</div>
			<div className={styles["read-more"]}>
				<a href="#">
					Read More<span className="ti-angle-right"></span>
				</a>
			</div>
		</div>
	);
}
