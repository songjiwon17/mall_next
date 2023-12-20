import Container from '@/components/Container';
import Header from '@/components/Header';
import styles from '@/styles/Setting.module.css';

export default function Setting() {
  return (
    <>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <div>
          className={styles.input}
          name="theme"
          value={theme}
          onChange={(name, value) => setTheme(value)}
          options={[
            { label: '라이트', value: 'light' },
            { label: '다크', value: 'dark' },
          ]}
        </div>
      </section>
    </>
  );
}
