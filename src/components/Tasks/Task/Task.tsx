import React from 'react'
import styles from './Task.module.css'
import ITaskProps from './ITaskProps'

const Task:React.FunctionComponent<ITaskProps> = (props) => {
    return (
        <div>
            <p className={styles.Task}>{props.text}</p>
        </div>
    )
}

export default Task