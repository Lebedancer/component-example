import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from "./components/Button";
import YearsComponent from "./components/Calendar/Years/YearsComponent";


storiesOf('Button', module)
    .add('Календарь годов', () => <YearsComponent firstDate = '2011' lastDate = '2018'></YearsComponent> )
    .add('Календарь месяцев', () => <div></div> )
    .add('Календарь дней', () => <div></div> )
    .add('Календарь период', () => <div></div> )
    .add('default', () => <Button onClick={action('нажал')}>Жми</Button>)
    .add('big', () => <Button size="big" onClick={action('нажал')}>Жми</Button>)
    .add('small', () => <Button size="small" onClick={action('нажал')}>Жми</Button>)
    .add('mini', () => <Button size="mini" onClick={action('нажал')}>Жми</Button>)
    .add('white', () => <Button onClick={action('нажал')} color='white'>Жми</Button>)
    .add('loading', () => <Button onClick={action('нажал')} loading={true}>Жми</Button>)
    .add('loading big', () => <Button size="big" loading={true} onClick={action('нажал')}>Жми</Button>)
    .add('loading small', () => <Button size="small" loading={true} onClick={action('нажал')}>Жми</Button>)
    .add('loading mini', () => <Button size="mini" loading={true} onClick={action('нажал')}>Жми</Button>)
    .add('loading white', () => <Button onClick={action('нажал')} loading={true} color='white'>Жми</Button>)
    .add('disabled', () => <Button onClick={action('нажал')} disabled={true}>Жми</Button>)
    .add('disabled white', () => <Button onClick={action('нажал')} disabled={true} color='white'>Жми</Button>)
    .add('with icon left', () => <Button onClick={action('нажал')}>{svgIconHelper.getJsx({})}Жми</Button>)
    .add('with icon right', () => <Button onClick={action('нажал')}>Жми{svgIconHelper.getJsx({})}</Button>)
    .add('with icons big', () => <Button size="big" onClick={action('нажал')}>{svgIconHelper.getJsx({})}Жми{svgIconHelper.getJsx({})}</Button>)
    .add('with icons small', () => <Button size="small" onClick={action('нажал')}>{svgIconHelper.getJsx({})}Жми{svgIconHelper.getJsx({})}</Button>)
    .add('with icons mini', () => <Button size="mini" onClick={action('нажал')}>{svgIconHelper.getJsx({})}Жми{svgIconHelper.getJsx({})}</Button>)
    .add('with icons white', () => <Button color="white" onClick={action('нажал')}>{svgIconHelper.getJsx({})}Жми{svgIconHelper.getJsx({})}</Button>)
    .add('with icons loading', () => <Button loading={true} onClick={action('нажал')}>{svgIconHelper.getJsx({})}Жми{svgIconHelper.getJsx({})}</Button>)