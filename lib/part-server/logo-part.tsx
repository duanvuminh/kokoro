import { SiteName } from 'lib/type';
import styles from './logo-part-server.module.css';

export function LogoPartServer() {
    return(
        <p>
            <span className={styles['site-name']}>{SiteName}</span>
            <sub>も頑張れ！</sub>
        </p>
    )
}
