import React from "react";
import {Col, InputNumber, Row, Slider} from "antd"

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value,
    }

    onChange = (value) => {
        console.log(value)
        this.setState({
            inputValue: value,
        });
        this.props.onMinCountChange(value);
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