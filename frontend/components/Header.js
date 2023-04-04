import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useConnect, useDisconnect} from "wagmi";
import { Search } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";


import Logo from "../public/assets/blurLogo.png";

export default function Header() {
               const { data: account } = useAccount();
               const { disconnect } = useDisconnect();


  return (
    <section className={styles.header}>
      <section className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="Blur Logo" width="70" height="" />
        </Link>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <p>COLLECTIONS</p>
          <Link href="/portfolio" className={styles.link}>
            <p>PORTFOLIO</p>
          </Link>
          <p>AIRDROP</p>
        </section>
        <section className={styles.searchSection}>
          <section>
            <span>
              <Search fontSize="25px" />
            </span>
            <input
              placeholder="Search collections and wallets"
              disabled=""
              className={styles.inputField}
            />
          </section>
        </section>
       <section className={styles.connect_btn}>
       <ConnectButton chainStatus="icon"  showBalance={true} accountStatus="address"/>
       </section>
      </section>
    </section>
  );
}
