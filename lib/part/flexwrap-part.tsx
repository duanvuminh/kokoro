import styles from './flexwrap-part.module.css';

export function FlexwrapPart({children}:{children: JSX.Element[]}): JSX.Element{
    return(
        <div className={styles['mymain']}>
            {
                children.map((item:JSX.Element) => item)
            }
        </div>
    )
}