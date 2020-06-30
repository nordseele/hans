const modules = {
    er301: {
      address: [0x31, 0x32, 0x33],
      commands: {
        tr: {
          cmd: 0x0,
          arg: [{name: 'port', type: 'u8'}]
        },
        tr_tog: {
          cmd: 0x01,
          arg: [{name: 'port', type: 'u8'}]
        },
        tr_pulse: {
          cmd: 0x5,
          arg: [{name: 'port', type: 'u8'}]
        },
        tr_time: {
          cmd: 0x32,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        tr_pol: {
          cmd: 0x6,
          arg: [{name: 'port', type: 'u8'}, {name: 'rising', type: 's16'}]
        },
        cv: {
          cmd: 0x10,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },
        cv_slew: {
          cmd: 0x12,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        cv_set: {
          cmd: 0x11,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },
        cv_off: {
          cmd: 0x15,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        }
      }
    },
    txo: {
      address: [0x60, 0x61],
      commands: {
        tr: {
          cmd: 0x0,
          arg: [{name: 'port', type: 'u8'}]
        },
        tr_tog: {
          cmd: 0x01,
          arg: [{name: 'port', type: 'u8'}]
        },
        tr_pulse: {
          cmd: 0x5,
          arg: [{name: 'port', type: 'u8'}]
        },
        tr_time: {
          cmd: 0x32,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        tr_pol: {
          cmd: 0x6,
          arg: [{name: 'port', type: 'u8'}, {name: 'rising', type: 's16'}]
        },
        cv: {
          cmd: 0x10,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },
        cv_slew: {
          cmd: 0x12,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        cv_set: {
          cmd: 0x11,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },
        cv_off: {
          cmd: 0x15,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        }
      }
    }
  }

  module.exports = modules;