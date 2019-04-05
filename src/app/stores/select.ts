import {action, computed, observable} from 'mobx';

export interface ISelectStore {
    selectedValue: any;
    options: any

    getSelectedValue: any;
    getOptions: any;

    setSelectedValue(selectedValue: any): void;
    setOptions(options: any): void;
}

export class Select implements ISelectStore {
    @observable selectedValue = null;
    @observable options = [];

    @computed
    public get getSelectedValue(): any {
        return this.selectedValue;
    }

    @computed
    public get getOptions(): any {
        return this.options;
    }

    @action.bound
    public setSelectedValue(selectedValue: any): void {
        this.selectedValue = selectedValue;
    }

    @action.bound
    public setOptions(options: any): void {
        console.log("options:" + options);
        this.options = options;
    }
}