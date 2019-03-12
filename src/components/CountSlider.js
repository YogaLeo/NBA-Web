import React from "react";
import {Col, InputNumber, Row, Slider} from "antd"

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value,
    }

    onChange = (value) => {
        const cleanValue = Number(value) ? value : this.state.inputValue;
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onMinCountChange(cleanValue);
    }

    render() {
        return (
            <Row>
                <Col span={12}>
                    <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}