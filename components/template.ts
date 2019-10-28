import { Component, ReactNode } from 'react'
import { Subject } from 'rxjs'

export default class Template extends Component<{ children: ReactNode }> {
  afterChange = new Subject<void>()

  componentDidUpdate() {
    this.afterChange.next()
  }

  get template(): ReactNode {
    return this.props.children
  }

  render() {
    return null
  }
}
