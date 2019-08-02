export default {
    beerForm: [
        {
            type: "select",
            titles: [
                {label: 'Treehouse Brewing Company', value:0},
                {label: 'Founders Brewing Company', value:1},
                {label: 'Kane Brewing', value:2}
            ],
            helpText: "Please select the brewery",
            label: "Brewery",
            sort: "alpha"
        },
        {
            type:"text",
            label:"Beer Name"
        },
        {
            type: "select",
            titles: [
                {label: 'IPA', value:0},
                {label: 'Stout', value:1},
                {label: 'Sour', value:2}
            ],
            helpText: "Please select the style",
            label: "Style",
            sort: "alpha"
        },
        {
            type:"number",
            label:"Quantity",
            min: 1,
            max: 9999,
            default: 1
        },
        {
            type:"number",
            label:"Year",
            min:1990,
            max:2019,
            default: 2019
        },
        {
            type:"button",
            label:"Add",
            color:"primary"
        }
    ]
};