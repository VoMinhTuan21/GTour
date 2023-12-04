import React from "react";
import styles from "./input.module.scss";

interface Props {
	iconEnd?: React.ReactNode;
	placeholder?: string;
}

export default function Input({ iconEnd, placeholder }: Props) {
	return (
		<div className={styles.container}>
			<input placeholder={placeholder} />
			{iconEnd && iconEnd}
		</div>
	);
}
