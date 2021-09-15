import styles from './index.less';
import { ReactChild, ReactFragment, ReactPortal } from 'react';


export default function IndexPage(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <div className='main'>
      <h1 className={styles.title}>123456</h1>
    </div>
  );
}
