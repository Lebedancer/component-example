import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.m.less';

let cn = classnames.bind(style);

export default class CellComponent extends Component {

    static propTypes = {
        value: PropTypes.number,
        index: PropTypes.number,
        isSelectedIndex: PropTypes.number,
        isDisabled: PropTypes.number,
        isSelected: PropTypes.func
    }

    static defaultProps = {
        value: null,
        index: null,
        isSelectedIndex: null,
        isDisabled: null,
        isSelected: Function.prototype
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { value, index, isSelectedIndex, isDisabled } = this.props;
       
        return (
            <div className={
                cn('cell', 
                    { 'selected': index === isSelectedIndex && value !== isDisabled },
                    { 'disabled': value === isDisabled }
                    )}
                 onClick={ () => {
                     this.setSelected(index)
                 }}
                 key={ index }>
                { value }
            </div>
        )
    }

    setSelected = index => {
        const { isSelected } = this.props; 
        isSelected(index)
    };
}