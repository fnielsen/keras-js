// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'convolutional.ZeroPadding1D.0': {
      input: {
        data: [
          -0.412987,
          -0.139246,
          0.567466,
          -0.512174,
          -0.33603,
          0.585584,
          0.453472,
          0.942013,
          -0.609538,
          -0.894302,
          0.711927,
          -0.126057,
          0.677549,
          0.676991,
          0.471487
        ],
        shape: [3, 5]
      },
      expected: {
        data: [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          -0.412987,
          -0.139246,
          0.567466,
          -0.512174,
          -0.33603,
          0.585584,
          0.453472,
          0.942013,
          -0.609538,
          -0.894302,
          0.711927,
          -0.126057,
          0.677549,
          0.676991,
          0.471487,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        shape: [5, 5]
      }
    },
    'convolutional.ZeroPadding1D.1': {
      input: {
        data: [
          0.229895,
          0.156613,
          -0.66952,
          -0.996975,
          0.45773,
          0.684298,
          -0.999213,
          0.276751,
          -0.484373,
          -0.506163,
          0.353904,
          0.513668,
          -0.981594,
          0.78914,
          0.603978,
          0.204066
        ],
        shape: [4, 4]
      },
      expected: {
        data: [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.229895,
          0.156613,
          -0.66952,
          -0.996975,
          0.45773,
          0.684298,
          -0.999213,
          0.276751,
          -0.484373,
          -0.506163,
          0.353904,
          0.513668,
          -0.981594,
          0.78914,
          0.603978,
          0.204066,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        shape: [10, 4]
      }
    },
    'convolutional.ZeroPadding1D.2': {
      input: {
        data: [
          0.369373,
          -0.889592,
          0.295148,
          0.159458,
          -0.326385,
          -0.785026,
          0.251471,
          0.679684,
          -0.679005,
          -0.873982,
          -0.727913,
          0.894448,
          -0.433901,
          -0.714725,
          0.053319,
          -0.87505
        ],
        shape: [4, 4]
      },
      expected: {
        data: [
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.369373,
          -0.889592,
          0.295148,
          0.159458,
          -0.326385,
          -0.785026,
          0.251471,
          0.679684,
          -0.679005,
          -0.873982,
          -0.727912,
          0.894448,
          -0.433901,
          -0.714725,
          0.053319,
          -0.87505,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0
        ],
        shape: [9, 4]
      }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
