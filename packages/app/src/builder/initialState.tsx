import {PageBuilder} from "./pieces/page";
import {StackBuilder} from "./pieces/stack";
import {LinkBuilder} from "./pieces/link";
import {TwoPanelBuilder} from "./pieces/twopanel";
import {HeadingBuilder} from "./pieces/heading";
import {TextBuilder} from "./pieces/text";
import {ButtonBuilder} from "./pieces/button";
import {CardBuilder} from "./pieces/card";
import {FormControlBuilder} from "./pieces/formcontrol";
import {FormLabelBuilder} from "./pieces/FormControl/label";
import {FormSelectBuilder} from "./pieces/FormControl/select";
import {FormHintBuilder} from "./pieces/FormControl/hint";
import {FormErrorBuilder} from "./pieces/FormControl/error";
import {AspectImageBuilder} from "./pieces/aspectimage";
import {FormInputBuilder} from "./pieces/FormControl/input";
import {TextAreaBuilder} from "./pieces/textarea";
import {FormTextAreaBuilder} from "./pieces/FormControl/textarea";
import {FormCheckboxBuilder} from "./pieces/FormControl/checkbox";

export const initialState = {
    builder: PageBuilder,
    controlsState: {
        items: [
            {
                builder: StackBuilder,
                controlsState: {
                    axis: "horizontal",
                    items: [
                        {
                            builder: LinkBuilder,
                            controlsState: {
                                label: "Link",
                                variant: "default",
                            },
                        },
                        {
                            builder: LinkBuilder,
                            controlsState: {
                                label: "Link",
                                variant: "default",
                            },
                        },
                        {
                            builder: LinkBuilder,
                            controlsState: {
                                label: "Link",
                                variant: "default",
                            },
                        },
                        {
                            builder: LinkBuilder,
                            controlsState: {
                                label: "Link",
                                variant: "default",
                            },
                        },
                        {
                            builder: LinkBuilder,
                            controlsState: {
                                label: "Link",
                                variant: "default",
                            },
                        },
                        {
                            builder: LinkBuilder,
                            controlsState: {
                                label: "Link",
                                variant: "default",
                            },
                        },
                    ],
                },
            },
            {
                builder: StackBuilder,
                controlsState: {
                    axis: "vertical",
                    items: [
                        {
                            builder: TwoPanelBuilder,
                            controlsState: {
                                left: {
                                    builder: StackBuilder,
                                    controlsState: {
                                        axis: "vertical",
                                        items: [
                                            {
                                                builder: HeadingBuilder,
                                                controlsState: {
                                                    text: "Tortor at auctor urna nunc id cursus metus",
                                                    variant: "heading-3",
                                                },
                                            },
                                            {
                                                builder: StackBuilder,
                                                controlsState: {
                                                    axis: "vertical",
                                                    items: [
                                                        {
                                                            builder: TextBuilder,
                                                            controlsState: {
                                                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Aliquam nulla facilisi cras fermentum. Orci ac auctor augue mauris.",
                                                                variant: "body",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                builder: StackBuilder,
                                                controlsState: {
                                                    axis: "vertical",
                                                    items: [
                                                        {
                                                            builder: TextBuilder,
                                                            controlsState: {
                                                                text: "Pellentesque id nibh tortor id aliquet lectus. Morbi tristique senectus et netus. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Ut placerat orci nulla pellentesque dignissim. Dolor magna eget est lorem ipsum dolor. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.",
                                                                variant: "body",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                builder: StackBuilder,
                                                controlsState: {
                                                    axis: "horizontal",
                                                    items: [
                                                        {
                                                            builder: ButtonBuilder,
                                                            controlsState: {
                                                                isLoading: false,
                                                                disabled: false,
                                                                label: "Learn more here",
                                                                variant: "primary",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                builder: TextBuilder,
                                                controlsState: {
                                                    text: "1Est ante in nibh mauris cursus",
                                                    variant: "hint",
                                                },
                                            },
                                        ],
                                    },
                                },
                                right: {
                                    builder: AspectImageBuilder,
                                    controlsState: {
                                        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
                                    },
                                },
                            },
                        },
                    ],
                },
            },
            {
                builder: StackBuilder,
                controlsState: {
                    axis: "vertical",
                    items: [
                        {
                            builder: TwoPanelBuilder,
                            controlsState: {
                                left: {
                                    builder: StackBuilder,
                                    controlsState: {
                                        axis: "vertical",
                                        items: [
                                            {
                                                builder: CardBuilder,
                                                controlsState: {
                                                    items: [
                                                        {
                                                            builder: StackBuilder,
                                                            controlsState: {
                                                                axis: "horizontal",
                                                                items: [
                                                                    {
                                                                        builder: ButtonBuilder,
                                                                        controlsState: {
                                                                            isLoading: false,
                                                                            disabled: false,
                                                                            label: "Button",
                                                                            variant: "primary",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: ButtonBuilder,
                                                                        controlsState: {
                                                                            isLoading: true,
                                                                            disabled: false,
                                                                            label: "Button",
                                                                            variant: "primary",
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            builder: StackBuilder,
                                                            controlsState: {
                                                                axis: "horizontal",
                                                                items: [
                                                                    {
                                                                        builder: ButtonBuilder,
                                                                        controlsState: {
                                                                            isLoading: false,
                                                                            disabled: false,
                                                                            label: "Button",
                                                                            variant: "secondary",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: ButtonBuilder,
                                                                        controlsState: {
                                                                            isLoading: true,
                                                                            disabled: false,
                                                                            label: "Button",
                                                                            variant: "secondary",
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                builder: CardBuilder,
                                                controlsState: {
                                                    items: [
                                                        {
                                                            builder: StackBuilder,
                                                            controlsState: {
                                                                axis: "vertical",
                                                                items: [
                                                                    {
                                                                        builder: FormControlBuilder,
                                                                        controlsState: {
                                                                            items: [
                                                                                {
                                                                                    builder: FormLabelBuilder,
                                                                                    controlsState: {
                                                                                        label: "Label",
                                                                                    },
                                                                                },
                                                                                {
                                                                                    builder: FormSelectBuilder,
                                                                                    controlsState: {
                                                                                        label: "Select a city",
                                                                                        options: ["Toronto", "Amsterdam", "Paris"],
                                                                                        hasError: false,
                                                                                    },
                                                                                },
                                                                                {
                                                                                    builder: FormHintBuilder,
                                                                                    controlsState: {
                                                                                        message: "Hint message",
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            builder: StackBuilder,
                                                            controlsState: {
                                                                axis: "vertical",
                                                                items: [
                                                                    {
                                                                        builder: FormControlBuilder,
                                                                        controlsState: {
                                                                            items: [
                                                                                {
                                                                                    builder: FormLabelBuilder,
                                                                                    controlsState: {
                                                                                        label: "Label",
                                                                                    },
                                                                                },
                                                                                {
                                                                                    builder: FormSelectBuilder,
                                                                                    controlsState: {
                                                                                        label: "Select a city",
                                                                                        options: ["Toronto", "Amsterdam", "Paris"],
                                                                                        hasError: true,
                                                                                    },
                                                                                },
                                                                                {
                                                                                    builder: FormHintBuilder,
                                                                                    controlsState: {
                                                                                        message: "Hint message",
                                                                                    },
                                                                                },
                                                                                {
                                                                                    builder: FormErrorBuilder,
                                                                                    controlsState: {
                                                                                        message: "Error message",
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                "builder": CardBuilder,
                                                "controlsState": {
                                                    "items": [
                                                        {
                                                            "builder": FormControlBuilder,
                                                            "controlsState": {
                                                                "items": [
                                                                    {
                                                                        "builder": FormLabelBuilder,
                                                                        "controlsState": {
                                                                            "label": "Label"
                                                                        }
                                                                    },
                                                                    {
                                                                        "builder": FormCheckboxBuilder,
                                                                        "controlsState": {
                                                                            "label": "Checkbox text",
                                                                            "hasError": false
                                                                        }
                                                                    },
                                                                    {
                                                                        "builder": FormHintBuilder,
                                                                        "controlsState": {
                                                                            "message": "Hint message"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "builder": FormControlBuilder,
                                                            "controlsState": {
                                                                "items": [
                                                                    {
                                                                        "builder": FormLabelBuilder,
                                                                        "controlsState": {
                                                                            "label": "Label"
                                                                        }
                                                                    },
                                                                    {
                                                                        "builder": FormCheckboxBuilder,
                                                                        "controlsState": {
                                                                            "label": "Checkbox text",
                                                                            "hasError": true
                                                                        }
                                                                    },
                                                                    {
                                                                        "builder": FormHintBuilder,
                                                                        "controlsState": {
                                                                            "message": "Hint message"
                                                                        }
                                                                    },
                                                                    {
                                                                        "builder": FormErrorBuilder,
                                                                        "controlsState": {
                                                                            "message": "Error message"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                    },
                                },
                                right: {
                                    builder: StackBuilder,
                                    controlsState: {
                                        axis: "vertical",
                                        items: [
                                            {
                                                builder: CardBuilder,
                                                controlsState: {
                                                    items: [
                                                        {
                                                            builder: FormControlBuilder,
                                                            controlsState: {
                                                                items: [
                                                                    {
                                                                        builder: FormLabelBuilder,
                                                                        controlsState: {
                                                                            label: "Label",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormInputBuilder,
                                                                        controlsState: {
                                                                            placeholder: "Placeholder",
                                                                            hasError: false,
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormHintBuilder,
                                                                        controlsState: {
                                                                            message: "Hint message",
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            builder: FormControlBuilder,
                                                            controlsState: {
                                                                items: [
                                                                    {
                                                                        builder: FormLabelBuilder,
                                                                        controlsState: {
                                                                            label: "Label",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormInputBuilder,
                                                                        controlsState: {
                                                                            placeholder: "Placeholder",
                                                                            hasError: true,
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormHintBuilder,
                                                                        controlsState: {
                                                                            message: "Hint message",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormErrorBuilder,
                                                                        controlsState: {
                                                                            message: "Error message",
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                builder: CardBuilder,
                                                controlsState: {
                                                    items: [
                                                        {
                                                            builder: FormControlBuilder,
                                                            controlsState: {
                                                                items: [
                                                                    {
                                                                        builder: FormLabelBuilder,
                                                                        controlsState: {
                                                                            label: "Label",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: TextAreaBuilder,
                                                                        controlsState: {
                                                                            placeholder: "Placeholder",
                                                                            maxCharacters: 100,
                                                                            hasError: false,
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormHintBuilder,
                                                                        controlsState: {
                                                                            message: "Hint message",
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            builder: FormControlBuilder,
                                                            controlsState: {
                                                                items: [
                                                                    {
                                                                        builder: FormLabelBuilder,
                                                                        controlsState: {
                                                                            label: "Label",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormTextAreaBuilder,
                                                                        controlsState: {
                                                                            placeholder: "Placeholder",
                                                                            maxCharacters: 100,
                                                                            hasError: true,
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormHintBuilder,
                                                                        controlsState: {
                                                                            message: "Hint message",
                                                                        },
                                                                    },
                                                                    {
                                                                        builder: FormErrorBuilder,
                                                                        controlsState: {
                                                                            message: "Error message",
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                    ],
                },
            },
            {
                builder: StackBuilder,
                controlsState: {
                    axis: "vertical",
                    items: [],
                },
            },
        ],
    },
};