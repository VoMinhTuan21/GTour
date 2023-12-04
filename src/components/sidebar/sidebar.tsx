import React, { useCallback, useEffect, useState } from "react";
import styles from "./sidebar.module.scss";

interface Props {
	name: string;
	children?: React.ReactNode | React.ReactNode[];
	showOverlay?: boolean;
	className?: string;
}

export default function Sidebar({ name, children, showOverlay, className }: Props) {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		const overlay = document.getElementById(`overlay-${name}`);
		const sidebar = document.getElementById(name);
		if (overlay && sidebar) {
			if (!open) {
				if (showOverlay) {
					overlay.style.display = "block";
					document.body.style.overflowY = "hidden";
				}
				sidebar.style.transform = "translateX(0)";
				setOpen(true);
			} else {
				if (showOverlay) {
					overlay.style.display = "none";
					document.body.style.overflowY = "auto";
				}
				sidebar.style.transform = "translateX(100%)";
				setOpen(false);
			}
		}
	};

	useEffect(() => {
		const buttons = Array.from(document.getElementsByClassName(name));
		for (const btn of buttons) {
			btn.addEventListener("click", toggleOpen);
		}

		return () => {
			for (const btn of buttons) {
				btn.removeEventListener("click", toggleOpen);
			}
		};
	}, [open]);

	return (
		<div className={className}>
			<div id={`overlay-${name}`} className={styles.overlay}></div>
			<div id={name} className={styles.sidebar}>
				{children}
			</div>
		</div>
	);
}
