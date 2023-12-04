import React from "react";
import "./nav-item.scss";
import Link from "next/link";
import clsx from "clsx";

export interface NavItemProps {
	title: string;
	url: string;
	subMenu: {
		title: string;
		url: string;
		children?: {
			title: string;
			url: string;
		}[];
	}[];
}

export default function NavItem({ title, url, subMenu }: NavItemProps) {
	return (
		<div className="nav-item">
			<Link href={url} className="nav-item-title">
				<p>{title}</p>
				<span className="ti-angle-down"></span>
			</Link>
			<ul className="sub-menu bottom">
				{subMenu.map((item, index) => (
					<li key={index} className="sub-menu-item">
						<Link className={clsx("sub-menu-item-link", item.children && "flex")} href={item.url}>
							{item.title}
							{item.children && <span className="ti-angle-right icon"></span>}
						</Link>
						{item.children && (
							<ul className="sub-menu right">
								{item.children.map((child, index) => (
									<li key={index}>
										<Link className="sub-menu-item-link" href={child.url}>
											{child.title}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
