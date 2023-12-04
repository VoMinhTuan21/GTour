import React from "react";
import styles from "./select.module.scss";

interface Props {
	iconEnd?: React.ReactNode;
	options: {
		label: string;
		value: string | number;
	}[];
}

export default function Select({ iconEnd, options }: Props) {
	return (
		<div className={styles.container}>
			<select>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			{iconEnd && iconEnd}
		</div>
	);
}
