/* global describe, it */
'use strict';
import {expect} from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('get-yo-rc-path', () => {
  it('should return null if .yo-rc.json file not found', async () => {
    let findUpStub = sinon.stub().withArgs('.yo-rc.json').returns(Promise.resolve(null))
      , getYoRcPathProxy = proxyquire('../lib/', {'find-up': findUpStub});

    expect(await getYoRcPathProxy()).to.eql(null);
    expect(await getYoRcPathProxy.dir()).to.eql(null);
  });

  it('should return full path of .yo-rc.json', async () => {
    let findUpStub = sinon.stub().withArgs('.yo-rc.json').returns(Promise.resolve('awesome-project/.yo-rc.json'))
      , getYoRcPathProxy = proxyquire('../lib/', {'find-up': findUpStub});

    expect(await getYoRcPathProxy()).to.eql('awesome-project/.yo-rc.json');
  });

  it('should return directory of .yo-rc.json', async () => {
    let findUpStub = sinon.stub().withArgs('.yo-rc.json').returns(Promise.resolve('awesome-project/.yo-rc.json'))
      , getYoRcPathProxy = proxyquire('../lib/', {'find-up': findUpStub});

    expect(await getYoRcPathProxy.dir()).to.eql('awesome-project');
  });
});
