import React from 'react';
import classnames from 'classnames/bind';
import style from './style.m.less';
import CellComponent from './CellComponent';
import '../../../styles/font.less';

let cn = classnames.bind(style);

export default class YearsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: [],
            isSelectedIndex: -1,
            isDisabled: 2018
        };

        const { firstDate, lastDate } = this.props;

        this.fillData(firstDate, lastDate);
    }

    render() {
        return (
            <div className={ cn('container') }>
                <span className={ cn('title') }>
                    Кадендарь годов
                </span>
                {this.renderYear()}
            </div>
        )
    }

    isSelected = index => {
        this.setState({ isSelectedIndex: index })
    }

    renderYear = () => {
        return <div> {this.state.date.map((val,index) => {
                        return <CellComponent 
                            value={ val } 
                            index={ index } 
                            key={ index } 
                            isSelected={ this.isSelected } 
                            isSelectedIndex={ this.state.isSelectedIndex }
                            isDisabled={ this.state.isDisabled }/>
                     })}
                </div>

    };


    fillData = (f='2010',l='2017') => {
        let data = [];
        let firstDate = parseInt(f);
        let lastDate = parseInt(l);
        for( let i = firstDate; i <= lastDate; i++){
            data.push(i);
        }
        this.state.date = data;
    }
}
