import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Buy my physical NFTS</div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/images/stickman.png"}
            alt="NFT"
            width={200}
            height={300}
          />
          <p>Stick men very expensive</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/images/stickman2.png"}
            alt="NFT"
            width={200}
            height={300}
          />
          <p>Stick babies very expensive</p>
        </a>
      </div>
    </main>
  );
}
