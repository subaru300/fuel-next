import React from 'react';
import { IChildren } from '@/interface/interface';
import styles from '@/components/Main/Main.module.css';
import Calculator from '../Calculator/Calculator';
import Table from '../Table/Table';

const Main = ({ children }: IChildren) => {
  return (
    <section className={styles.mainSection}>
      <main className={styles.main}>
        <Calculator />
        <Table />
      </main>
      <aside className={styles.sidebar}>{children}</aside>
    </section>
  );
};

export default Main;
