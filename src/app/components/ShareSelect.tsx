import React from 'react';
import Select from 'react-select';
import {inject, observer} from 'mobx-react';
import {ISelectStore} from "../stores/select";
import {initOptions} from "../actions/select";

interface ShareSelectProps {
    selectStore?: ISelectStore
}

@inject('selectStore')
@observer
export class ShareSelect extends React.Component<ShareSelectProps, any> {
    constructor(props: ShareSelectProps) {
        super(props);
    }

    componentDidMount() {
        const {setOptions} = this.props.selectStore!;
        initOptions(setOptions);
    }

    handleChange = (selectedOption: any): void => {
        const {setSelectedValue} = this.props.selectStore!;
        setSelectedValue(selectedOption);
    };

    render() {
        const {getSelectedValue, getOptions} = this.props.selectStore!;
        console.log("render:" + getOptions);
        return (
            <div className="col-md-2">
                <Select
                    value={getSelectedValue}
                    onChange={this.handleChange}
                    options={getOptions}
                    isSearchable={true}
                    isClearable={true}
                />
            </div>
        );
    }
}