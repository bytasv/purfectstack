import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import exist from 'jest-enzyme-selector-exists'
import expect from 'expect'

expect.extend(exist)
configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
