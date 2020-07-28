import React from "react";
import styles from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div className={styles.tooltip}>
                {hasError && <span className={styles.tooltiptext + " " + styles.textareaTooltipPosition}>{meta.error}</span>}
            </div>
            <textarea {...input} {...meta} {...props} />
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div className={styles.tooltip}>
                {hasError && <span className={styles.tooltiptext + " " + styles.inputTooltipPosition}>{meta.error}</span>}
            </div>
            <input {...input} {...meta} {...props} />
        </div>
    )
}