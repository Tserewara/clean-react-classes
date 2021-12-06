import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<Props> = (prop: Props) => {
  return (
    <div {...prop} className={[Styles.spinner, prop.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
