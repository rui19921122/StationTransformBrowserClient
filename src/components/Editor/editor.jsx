import * as React from 'react';
import RichTextEditor from 'react-rte';
import './components.scss';
export class Editor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.initial_value ? RichTextEditor.createValueFromString(this.props.initial_value, 'html') : RichTextEditor.createEmptyValue()
        };
        this.onChange = (value) => {
            this.setState({ value });
            if (this.props.onChange) {
                this.props.onChange(value.toString('html'));
            }
        };
    }
    componentDidMount() {
        console.log(555);
    }
    render() {
        return (<RichTextEditor key={this.props.article_id + 'editor'} editorClassName="editor-display" value={this.state.value} onChange={this.onChange}/>);
    }
}
//# sourceMappingURL=editor.jsx.map