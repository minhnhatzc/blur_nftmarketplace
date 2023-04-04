import styles from "@/styles/Home.module.css";
import CollectionHeroSection from "@/components/CollectionHeroSection";
import CollectionHeader from "@/components/CollectionHeader";

export default function ViewCollection() {
  return (
    <section className={styles.container}>
      <section>
        <section className={styles.viewCollection_main}>
          <CollectionHeader />
          <CollectionHeroSection />
        </section>
      </section>
    </section>
  );
}
