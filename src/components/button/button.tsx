import React from "react";
import styles from "./button.module.scss";

interface Props {
	children?: React.ReactNode;
	variant?: "outline" | "fill";
}

export default function Button({ children, variant = "fill" }: Props) {
	return <button className={styles[variant]}>{children}</button>;
}
