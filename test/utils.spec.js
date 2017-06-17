import {expect} from 'chai'
import format from '../lib/utils/utils'

describe('utils.format()', ()=>{
  it('should return an interpolated string, given a string and some inputs', () =>{
   const str_template = "test works for {0}, {1}"
   expect(str_template.format("this","test")).to.equal("test works for this, test")
  })
})
