import IconResource from './iconResource';
import SvgIcon from '../../components/SvgIcon';
import React from 'react';

class SvgIconHelper {
    get({ name }) {
        return IconResource[name] || IconResource['smile'];
    }

    getJsx({ name, style, className }) {
        const icon = this.get({ name });
        return <SvgIcon icon={icon} style={style} className={className}/>
    }
}

export default new SvgIconHelper();