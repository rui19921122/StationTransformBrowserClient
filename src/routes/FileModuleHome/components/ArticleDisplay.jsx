import * as React from 'react';
import { ArticleTable } from '../../../components/ArticleTable/ArticleTable';
import { actions } from '../../../store/global_reducers/articles';
export class ArticleDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(actions.get_articles(0));
    }
    render() {
        return (<ArticleTable articles={this.props.articles} dispatch={this.props.dispatch} menu_id={0}/>);
    }
}
export default ArticleDisplay;
//# sourceMappingURL=ArticleDisplay.jsx.map