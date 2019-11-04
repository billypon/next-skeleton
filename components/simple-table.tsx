import { ReactNode } from 'react'
import { Component } from '@billypon/react-utils/react'

import template from './simple-table.pug'

interface SimpleTableProps {
  header: ReactNode
  body: ReactNode
  children: ReactNode
}

export function Tr(props: { children: ReactNode }) {
  return <tr className="ant-table-row">{ props.children }</tr>
}

class SimpleTable extends Component<SimpleTableProps> {
  static Row = Tr

  render() {
    return template.call(this, { ...this })
  }
}

export default SimpleTable
