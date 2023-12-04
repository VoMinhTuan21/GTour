import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<ul className={styles.list}>
					<li>
						<h4 className={styles.title}>Our Awards</h4>
						<p className={styles["awards-description"]}>
							London is a megalopolis of people, ideas and frenetic energy. The capital and
							largest city of the United Kingdom.
						</p>
						<div className={styles["awards-image"]}>
							<Image
								src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
								fill
								alt="awards"
							/>
						</div>
					</li>
					<li>
						<h4 className={styles.title}>Contact Info</h4>
						<div className={styles["info-contact"]}>
							<p>
								<span className="ti-mobile"></span>
								1-567-124-44227
							</p>
							<p>
								<span className="ti-location-pin"></span>
								184 Main Street East Perl Habour 8007
							</p>
							<p>
								<span className="ti-alarm-clock"></span>
								Mon - Sat 8.00 - 18.00 Sunday CLOSED
							</p>
							<div className={styles.social}>
								<ul>
									<li>
										<a className={styles.facebook} href="#">
											<span className="ti-facebook"></span>
										</a>
									</li>
									<li>
										<a className={styles.twitter} href="#">
											<span className="ti-twitter-alt"></span>
										</a>
									</li>
									<li>
										<a className={styles.youtube} href="#">
											<span className="ti-youtube"></span>
										</a>
									</li>
									<li>
										<a className={styles.pinterest} href="#">
											<span className="ti-pinterest-alt"></span>
										</a>
									</li>
									<li>
										<a className={styles.instagram} href="#">
											<span className="ti-instagram"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<h4 className={styles.title}>Recent Trips</h4>
						<div className={styles["image-gallery"]}>
							<a href="#">
								<Image
									src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
									fill
									alt="imgage"
								/>
							</a>
							<a href="#">
								<Image
									src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
									fill
									alt="imgage"
								/>
							</a>
							<a href="#">
								<Image
									src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
									fill
									alt="imgage"
								/>
							</a>
							<a href="#">
								<Image
									src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
									fill
									alt="imgage"
								/>
							</a>
							<a href="#">
								<Image
									src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
									fill
									alt="imgage"
								/>
							</a>
							<a href="#">
								<Image
									src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
									fill
									alt="imgage"
								/>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className={styles["footer-bar"]}>
				<ul className={styles.menu}>
					<li>Home</li>
					<li>Tours</li>
					<li>Blog</li>
					<li>Purchase Theme</li>
				</ul>
				<p className={styles.copyright}>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
			</div>
		</div>
	);
}
