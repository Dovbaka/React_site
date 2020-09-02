import React from "react";
import styles from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => { //Textarea with error styled tooltip

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : undefined)}>
            <textarea {...input} {...meta} {...props} />
        </div>
    )
}

export const Input = ({input, meta, ...props}) => { //Input with error styled tooltip

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : undefined)}>
            <div className={styles.tooltip}>
                {hasError? <span className={styles.tooltiptext + " " + styles.inputTooltipPosition}>{meta.error}</span> : ""}
            </div>
            <input {...input} {...props} />
        </div>
    )
}