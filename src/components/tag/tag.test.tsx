import DsTag, { DsTagProps } from './tag';

import React from 'react'
import renderer from 'react-test-renderer'


test('test creation', () => {
    const args:DsTagProps = {
        label:"test",
        variant:'solid',
        type:'primary'
    }
    const tree = renderer
        .create(<DsTag {...args} />)
        .toJSON()

    if(tree === null || Array.isArray(tree)){
        throw new Error("render didn't work correctly");
    }
    expect(tree.type).toBe('span');
})

