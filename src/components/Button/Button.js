import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.m.less';
import Loader from '../Loader';
import '../../styles/font.less';

let cn = classnames.bind(style);

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
    }

    render() {
        return (
            <button type='button'
                    className={this.getClassNames()}
                    disabled={this.props.disabled}
                    onClick={this.onClick}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}>
                {this.getLoader()}
                {this.mapChildren()}
            </button>
        )
    }

    mapChildren = () => {
        return this.filterEmptyChild().map((child, i) => {
            if (child.type && child.type.name === 'SvgIcon') {
                return this.stylizeSvg(child, i);
            }
            return child;
        });
    };

    stylizeSvg = (svg, i) => {
        const props = {
            className: classnames(
                svg.props.className,
                style.button__icon, {
                    [style['button__icon--left']]: i === 0,
                    [style['button__icon--right']]: i === React.Children.count(this.props.children) - 1
                }
            )
        };
        return React.cloneElement(svg, props);
    };

    filterEmptyChild = () => {
        return React.Children.toArray(this.props.children).filter(child => {
            return !!child;
        })
    };

    onClick = e => {
        if (this.props.disabled || this.props.loading) {
            return;
        }
        this.props.onClick(e);
        this.setState({ focus: false });
    };

    onFocus = () => {
        this.setState({
            focus: true
        });
    };

    onBlur = () => {
        this.setState({
            focus: false
        });
    };

    getClassNames = () => {
        return cn(
            this.props.className,
            'button',
            `button--${this.props.size}`,
            `button--${this.props.color}`, {
                'button--focus': this.state.focus,
                'button--loading': this.props.loading,
                [`button--${this.props.groupPosition}`]: this.props.groupPosition,
                'button--active': this.props.active
        });
    };

    getLoader = () => {
        if (!this.props.loading) {
            return;
        }
        const loaderColor = this.props.color !== Color.White ? '#fff' : undefined;
        return <Loader color={loaderColor} className={style.button__loader}/>;
    }
}

const Size = {
    Standart: 'standart',
    Big: 'big',
    Small: 'small',
    Mini: 'mini'
};

const Color = {
    Green: 'green',
    White: 'white'
};

const GroupPosition = {
    Left: 'left',
    Right: 'right'
};

Button.defaultProps = {
    disabled: false,
    size: Size.Standart,
    color: Color.Green,
    loading: false,
    active: false
};

Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(Size)),
    color: PropTypes.oneOf(Object.values(Color)),
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    groupPosition: PropTypes.oneOf(Object.values(GroupPosition)),
    active: PropTypes.bool
};

export default Button;