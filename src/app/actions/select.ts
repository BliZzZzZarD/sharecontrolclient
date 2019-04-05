import {URLs} from "../enums/urls";
import axios from "axios";

export const initOptions = (setOptions: any): any => {
    const config = {
        params:
            {
                src: '',
                fromPos: 0,
                toPos: 50
            }
    };

    axios.get(encodeURI(URLs.BASE + URLs.GET_SHARES), config)
        .then(response => {
            let options: any = [];

            if (response.data.success) {
                options = response.data.object.map((item: any) => ({value: item, label: item.name}));
            }

            setOptions(options);
        })
};

