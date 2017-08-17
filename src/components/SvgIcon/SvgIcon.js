import React from 'react';
import PropTypes from 'prop-types';

class SvgIcon extends React.Component {

    static propTypes = {
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    };

    render() {
        const userTag = this._getUserTag();
        if (!userTag) {
            return null;
        }
        return <svg
            style={this.props.style}
            className={this.props.className}
            xmlns='http://www.w3.org/2000/svg'
            dangerouslySetInnerHTML={{ __html: userTag }}
        />
    }

    _getUserTag() {
        const iconId = this._getIconId();
        if (!iconId) {
            return null;
        }
        return `<use xlink:href=${iconId}></use>`;
    }

    _getIconId() {
        if (!this.props.icon) {
            return null;
        }

        const itemIcon = this.props.icon;
        return itemIcon.id ? `#${itemIcon.id}` : itemIcon;
    }
}

export default SvgIcon
