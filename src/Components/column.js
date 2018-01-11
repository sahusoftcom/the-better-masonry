import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
export default class Column extends React.Component {
  render() {
    return (
      <FlatList
        {...this.props}
        style={{ flex: 1, paddingRight: this.props.spacingRight }}
        data={this.props.data}
        renderItem={this.props.renderItem}
        keyExtractor={(item, index) => index}
        ref={ref => {
          this.props.assignRef(ref);
        }}
        renderToHardwareTextureAndroid
        maxToRenderPerBatch={this.props.maxToRenderPerBatch}
        onScroll={this.props.onScroll}
        showsVerticalScrollIndicator={false}
        onEndReached={this.props.onEndReached}
      />
    );
  }
}
Column.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func
};
Column.defaultProps = {
  data: [],
  renderItem: () => {}
};
