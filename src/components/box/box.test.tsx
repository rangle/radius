import DsBox, {DsBoxProps} from './box';

import React from 'react'
import renderer from 'react-test-renderer'

test('test creation', () => {

    const args:DsBoxProps = {
        children:"Children..."
    }

    const tree = renderer
        .create(<DsBox {...args} />)
        .toJSON()

    if(tree === null || Array.isArray(tree)){
        throw new Error("render didn't work correctly");
    }
    expect(tree.type).toBe('div');
})

