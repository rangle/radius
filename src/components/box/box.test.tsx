import {DsBox} from './box';

import React from 'react'
import renderer from 'react-test-renderer'


test('test creation', () => {
    let args:any = {};

    const tree = renderer
        .create(<DsBox {...args}/>)
        .toJSON()

    if(tree === null || Array.isArray(tree)){
        throw new Error("render didn't work correctly");
    }
    expect(tree.type).toBe('div');
})

