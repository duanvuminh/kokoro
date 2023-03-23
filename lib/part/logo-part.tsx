import { siteName } from 'lib/type';
import styles from './logo-part.module.css';

 export function LogoPart(): JSX.Element {
    return(
        <p>
            <span className={styles['site-name']}>{siteName}</span>
            <sub>も頑張れ！</sub>
        </p>
    )
}
