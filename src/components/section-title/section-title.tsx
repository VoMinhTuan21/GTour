import React from "react";
import styles from "./section-title.module.scss";
import clsx from "clsx";

interface Props {
	title: string;
	subTitle: string;
	className?: string;
}

export default function SectionTitle({ title, subTitle, className }: Props) {
	return (
		<div className={clsx(styles.container, className)}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.subTitle}>{subTitle}</p>
		</div>
	);
}
