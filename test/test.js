/* global describe, it */
/* eslint arrow-parens: 0 */
'use strict'
import 'babel-polyfill'
import austin from 'austin'
import {expect} from 'chai'
import proxyquire from 'proxyquire'

describe('get-yo-rc-path', () => {
  it('should return null if .yo-rc.json file not found', async () => {
    const findUpStub = austin.spy()
        .withArgs('.yo-rc.json')
          .returns(Promise.resolve(null))
      , getYoRcPathProxy = proxyquire('../lib/', {'find-up': findUpStub})

    expect(await getYoRcPathProxy()).to.eql(null)
    expect(await getYoRcPathProxy.dir()).to.eql(null)
  })

  it('should return full path of .yo-rc.json', async () => {
    const findUpStub = austin.spy()
        .withArgs('.yo-rc.json')
          .returns(Promise.resolve('awesome-project/.yo-rc.json'))
      , getYoRcPathProxy = proxyquire('../lib/', {'find-up': findUpStub})

    expect(await getYoRcPathProxy()).to.eql('awesome-project/.yo-rc.json')
  })

  it('should return directory of .yo-rc.json', async () => {
    const findUpStub = austin.spy()
        .withArgs('.yo-rc.json')
          .returns(Promise.resolve('awesome-project/.yo-rc.json'))
      , getYoRcPathProxy = proxyquire('../lib/', {'find-up': findUpStub})

    expect(await getYoRcPathProxy.dir()).to.eql('awesome-project')
  })
})
