import { texts } from "@/texts";
import { signIn,signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    const session = useSession();
    return <>
        <header className={styles.header}>
             <Link href="/">
                <h1>{texts.serviceName}</h1>
                <p>{texts.serviceDescription}</p>
            </Link>
            
            <div className={styles.right}>
                {
                    session.data?.user ? <button onClick={() => {
                        signOut();
                    }}>
                        ログアウト
                    </button> : <button onClick={() => {
                        signIn();
                    }}>
                        ログイン
                    </button>
                }
            </div>
        </header>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
            <p>{texts.serviceName}</p>
            <div className={styles.footerLinks}>
                <Link href="/terms">利用規約</Link>
                <Link href="/privacy">プライバシーポリシー</Link>
                <a href="https://github.com/eatski/yesonor/issues">報告</a>
                <a href="https://twitter.com/eatski629">問い合わせ</a>
            </div>
        </footer>
    </>
}