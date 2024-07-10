import components from "@/designSystem/components.module.scss";
import Link from "next/link";
import type React from "react";
import { type PropsWithChildren, Suspense } from "react";
import { Logo } from "./components/logo";
import { UserMenu } from "./components/menu";
import { PinnedInfo } from "./components/pinned";
import { TransitionProgress } from "./components/transitionProgress";
import styles from "./styles.module.scss";

export const Layout: React.FC<
	PropsWithChildren<{ upper?: React.ReactElement }>
> = ({ children, upper }) => {
	return (
		<>
			<header className={styles.header}>
				<Link href="/">
					<Logo />
				</Link>
				<div className={styles.right}>
					<Link className={components.buttonBrandFg} href={"/stories/new"}>
						ストーリーを投稿
					</Link>
					<UserMenu />
				</div>
			</header>
			<TransitionProgress />
			<PinnedInfo />
			{upper ? (
				<Suspense>
					<div className={styles.upper}>
						<div className={styles.content}>{upper}</div>
					</div>
				</Suspense>
			) : null}

			<div className={styles.main}>{children}</div>
			<footer className={styles.footer}>
				<div className={styles.footerLinks}>
					<Link href="/terms">利用規約</Link>
					<Link href="/privacy">プライバシーポリシー</Link>
					<Link href="/about">サイトについて</Link>
					<Link href="/sponsor">ご支援のお願い</Link>
				</div>
			</footer>
		</>
	);
};
