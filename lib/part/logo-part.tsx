import { SiteName } from 'lib/type';
import styles from './logo-part.module.css';

export function LogoPart() {
    return(
        <p>
            <span className={styles['site-name']}>{SiteName}</span>
            <sub>も頑張れ！</sub>
        </p>
    )
}
