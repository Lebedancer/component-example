import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.m.less';
import loader from './imgs/loader.m.svg';
import colorString from 'color-string';

class Loader extends React.Component {
    render() {
        return (
                <svg className={this.getClassNames()}>
                    {this.getFilter()}
                    <g filter={`url(#${this.filterId()})`}>
                        <use xlinkHref={`#${loader.id}`}></use>
                    </g>
                </svg>
            );
    }

    getFilter() {
        let matrix = colorString.get.rgb(this.props.color).map(color => {
            return Math.round(color * 100 / 255) / 100;
        });
        return <defs xmlns="http://www.w3.org/2000/svg">
                <filter id={this.filterId()}>
                    <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values={`${matrix[0]} 0 0 0 0   0 ${matrix[1]} 0 0 0    0 0 ${matrix[2]} 0 0    0 0 0 1 0 `}/>
                </filter>
        </defs>;
    }

    filterId() {
        return `loaderColor${colorString.get.rgb(this.props.color).join('')}`;
    }

    getClassNames = () => {
        return classnames(
            this.props.className,
            style.loader);
        }
}

Loader.defaultProps = {
    color: '#209AC4'
};

Loader.propTypes = {
    color: PropTypes.string
};

export default Loader;