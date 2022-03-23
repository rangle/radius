import DsTag, { DsTagProps } from './tag'; // 


import React from 'react'
import { createSerializer } from '@emotion/jest'
import renderer from 'react-test-renderer'
import 'jest-styled-components'


expect.addSnapshotSerializer(createSerializer())

test('test creation', () => {
    const args:DsTagProps = {
        variant:'solid',
        type:'primary'
    }
    const tree = renderer
        .create(<DsTag {...args} />)
        .toJSON()

    if(tree === null || Array.isArray(tree)){
        throw new Error("render didn't work correctly");
    }
    expect(tree.type).toBe('div');
})

