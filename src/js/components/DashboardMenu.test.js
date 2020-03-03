import React from 'react'
import DashboardMenu from './DashboardMenu'
import renderer from 'react-test-renderer'

test('menu opens when clicked', () => {
    const component = renderer.create(<DashboardMenu />)
    // let tree = component.toJSON()
    expect(component).toMatchSnapshot()

    component.proto.onClick()
    expect(component).toMatchSnapshot()
})
