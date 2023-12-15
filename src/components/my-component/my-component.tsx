import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() disabled = false;

  private getText(): string {
    return 'STENCIL'
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
