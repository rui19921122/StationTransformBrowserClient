import { connect } from 'react-redux';
import View from '../components/view';
const mapStateToProps = (state) => ({
    menu: state.menu,
    location: state.location,
    edit_article: state.edit_article,
});
export default connect(mapStateToProps)(View);
//# sourceMappingURL=container.js.map