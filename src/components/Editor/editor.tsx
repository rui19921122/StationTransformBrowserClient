///<reference path="../../../typings/index.d.ts"/>

import * as React from "react";
import RichTextEditor from "react-rte";
import "./components.scss";

export class Editor extends React.Component<any,any> {
  state = {
    value: this.props.initial_value ? (RichTextEditor as any).createValueFromString(this.props.initial_value, 'html') : (RichTextEditor as any).createEmptyValue()
  };
  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  componentDidMount() {
  }

  render() {

    return (
      <RichTextEditor
        key={this.props.article_id+'editor'}
        editorClassName="editor-display"
        value={this.state.value}
        onChange={this.onChange}
        autoFocus={true}
      />
    );
  }
}
