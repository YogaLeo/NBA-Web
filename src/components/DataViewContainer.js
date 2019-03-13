import React from 'react';
import _ from 'lodash';
import {ShotChart} from "./ShotChart"
import {Radio, Switch, Row, Col} from 'antd';
import {CountSlider} from "./CountSlider"

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }

    onMinCountChange = (minCount) => {
        this.setState({minCount});
    }

    onChartTypeChange = (e) => {
        this.setState({chartType: e.target.value});
    }

    onTooltipChange = (displayTooltip) => {
        this.setState({displayTooltip});
    }

    debounce = (func, timeout) => {
        var timer;
        return (...args) => {
            if(timer){
                window.clearTimeout(timer); // 清除旧的timer 这样只有在最后一次才会timer之后生效
            }

            timer = window.setTimeout(() => {
                // console.log('debounce');
                func.apply(null, args);
            }, timeout);
        }
    }

    render() {

        const {
            minCount,
            chartType,
            displayTooltip
        } = this.state;

        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    chartType={chartType}
                    displayTooltip={displayTooltip}
                />
                <div className="filters">
                    {
                        chartType === 'hexbin' ? (
                                <Row className="filter-row">
                                    <Col span={2} offset={6} className="filter-label">Shots:</Col>
                                    <Col span={16}>
                                        <CountSlider
                                            value={minCount}
                                            onMinCountChange={this.debounce(this.onMinCountChange, 500)}
                                            className="filter-control"/>
                                    </Col>
                                </Row>
                            )
                            : null
                    }

                    <Row className="filter-row">
                        <Col span={9} offset={6}>
                            <RadioGroup onChange={this.onChartTypeChange} value={chartType} className="filter-control">
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={2}>Tooltip:</Col>
                        <Col span={3} className="filter-control">
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}