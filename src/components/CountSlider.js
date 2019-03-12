import React from "react";
import {Col, InputNumber, Row, Slider} from "antd"

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value,
    }

    onChange = (value) => {
        // Check before setstate to avoid unlegal input
        let cleanValue = Number.parseInt(value, 10);
        cleanValue = isNaN(cleanValue) ? this.state.inputValue : cleanValue;

        // 可以用if抱起来 但是要注意0 === false, 如果遇到有0的情况不要考虑if
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onMinCountChange(cleanValue);
    }

    render() {
        const {inputValue} = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider min={1} max={20} onChange={this.onChange} value={inputValue}/>
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{marginLeft: 16}}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}