import React from 'react';
import classnames from 'classnames/bind';
import style from './style.m.less';

let cn = classnames.bind(style);

export default class YearsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            date: [],
            isSelected: false
        };
        this.fillData();
    }

    render(){
    	return (
    		<div className={cn('container')}>

                <span className={cn('title')}>Кадендарь годов</span>
                {this.renderYear()}

            </div>
    	)
    }

    renderYear = () => {
    	return <div> {this.state.date.map((val,index) => {
                        return <div className={this.getClassNames()}
                                    onClick={(e)=>{this.toggle(e)}}
                                    onDoubleClick={(e)=>{this.setDisabled(e)}}
                                    key={index}
                        >{val}</div>
                     })}
                </div>

    };

    toggle = (e) => {
        let arr = document.getElementsByClassName('style-m__cell___3veA4');
        for(let i = 0; i<arr.length; i++){
            arr[i].className = cn('cell')
        }
        e.target.className = cn('cell','selected');
    };

    setDisabled = (e) => {
        if(e.target.className.indexOf('disabled')<0){
            e.target.className = cn('cell','disabled')
        }else{
            e.target.className = cn('cell')
        }
    };

    getClassNames = () => {
        return cn('cell',{'selected':this.state.isSelected});
    };

    fillData = () => {
        let date = new Date();
        let firstDate = date.getFullYear()-7;
        let data = [];

        for(let i=0; i<8; i++){
            data.push(firstDate+i);
        }
        this.state.date = data;
    }
}
