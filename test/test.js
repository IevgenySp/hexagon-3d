'use strict';

let expect = require('chai').expect;
let hexagon3D = require('../dist/hexagon.service');

describe('#hexagon3D', function() {
    it('should return top, button and sides objects', function() {
        let result = hexagon3D.default({});

        expect(result.container.top).to.be.an('object');
        expect(result.container.side1).to.be.an('object');
        expect(result.container.side2).to.be.an('object');
        expect(result.container.side3).to.be.an('object');
        expect(result.container.side4).to.be.an('object');
        expect(result.container.side5).to.be.an('object');
        expect(result.container.side6).to.be.an('object');
        expect(result.container.bottom).to.be.an('object');
    });

    it('should return other data set for growTop', function() {
        let result = hexagon3D.default({ growTop: true, height: 70 });

        expect(result.container.top.style.transform).to.equal('translateZ(70px)');
    });
});