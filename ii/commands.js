// Supports only setters not getters

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

    ansible: {
      address: [0x20, 0x21, 0x22, 0x23],
      commands: {
        trigger: {
          cmd: 1,
          arg: [{name: 'channel', type: 'u8'}, {name: 'state', type: 'u8'}]
        },
        trigger_toggle: {
          cmd: 2,
          arg: [{name: 'channel', type: 'u8'}]
        },
        trigger_pulse: {
          cmd: 3,
          arg: [{name: 'channel', type: 'u8'}]
        },
        trigger_time: {
          cmd: 4,
          arg: [{name: 'channel', type: 'u8'}, {name: 'time', type: 'u16'}]
        },
        tr_polarity: {
          cmd: 5,
          arg: [{name: 'channel', type: 'u8'}, {name: 'polarity', type: 'u8'}]
        },
        cv: {
          cmd: 6,
          arg: [{name: 'channel', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },
        cv_slew: {
          cmd: 7,
          arg: [{name: 'channel', type: 'u8'}, {name: 'time', type: 'u16'}]
        },
        cv_set: {
          cmd: 9,
          arg: [{name: 'channel', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },
        cv_offset: {
          cmd: 8,
          arg: [{name: 'channel', type: 'u8'}, {name: 'volts', type: 's16V'}]
        }
      }
    },

    crow: {
      address: [0x01],
      commands: {
        output: {
          cmd: 1,
          arg: [{name: 'channel', type: 's8'}, {name: 'level', type: 's16V'}]
        },
        slew: {
          cmd: 2,
          arg: [{name: 'channel', type: 's8'}, {name: 'time', type: 's16'}]
        },        
        call1: {
          cmd: 4,
          arg: [{name: 'arg', type: 's16'}]
        },        
        call2: {
          cmd: 5,
          arg: [{name: 'arg1', type: 's16'}, {name: 'arg2', type: 's16'}]
        },        
        call3: {
          cmd: 6,
          arg: [{name: 'arg1', type: 's16'}, {name: 'arg2', type: 's16'}, {name: 'arg3', type: 's16'}]
        },        
        call2: {
          cmd: 7,
          arg: [{name: 'arg1', type: 's16'}, {name: 'arg2', type: 's16'}, {name: 'arg3', type: 's16'}, {name: 'arg4', type: 's16'}]
        }        
      }
    },

    jf: {
      address: [0x70,0x75],
      commands: {
        trigger: {
          cmd: 1,
          arg: [{name: 'channel', type: 's8'}, {name: 'state', type: 's8'}]
        },
        run_mode: {
          cmd: 2,
          arg: [{name: 'mode', type: 's8'}]
        },
        run: {
          cmd: 3,
          arg: [{name: 'volts', type: 's16V'}]
        },
        transpose: {
          cmd: 4,
          arg: [{name: 'pitch', type: 's16V'}]
        },
        vtrigger: {
          cmd: 5,
          arg: [{name: 'channel', type: 's8'}, {name: 'level', type: 's16V'}]
        },
        mode: {
          cmd: 6,
          arg: [{name: 'mode', type: 's8'}]
        },
        tick: {
          cmd: 7,
          arg: [{name: 'clock or bpm', type: 's8'}]
        },
        play_voice: {
          cmd: 8,
          arg: [{name: 'pitch or divs', type: 's16V'}, {name: 'level or repeats', type: 's16V'}]
        },
        play_note: {
          cmd: 9,
          arg: [{name: 'pitch or divs', type: 's16V'}, {name: 'level or repeats', type: 's16V'}]
        },
        god_mode: {
          cmd: 10,
          arg: [{name: 'state', type: 's8'}]
        },
        retune: {
          cmd: 11,
          arg: [{name: 'channel', type: 's8'}, {name: 'numerator', type: 's8'}, {name: 'denominator', type: 's8'}]
        },
        quantize: {
          cmd: 12,
          arg: [{name: 'divisions', type: 's8'}]
        },
        pitch: {
          cmd: 13,
          arg: [{name: 'channel', type: 's8'}, {name: 'pitch', type: 's16V'}]
        },
        address: {
          cmd: 14,
          arg: [{name: 'index', type: 's8'}]
        },

      }
    },

    txo: {
      address: [0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67],
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
        },
        // TXo Trigger Output (TR) Extended Commands
        tr_time_s: {
          cmd: 0x3,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },        
        tr_time_m: {
          cmd: 0x4,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },
        // TXo Trigger Output (TR) Experimental Commands - Divider + Metronomes
        tr_pulse_div: {
          cmd: 0x7,
          arg: [{name: 'port', type: 'u8'}, {name: 'pulses', type: 's16'}]
        },
        tr_m: {
          cmd: 0x8,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        tr_m_s: {
          cmd: 0x9,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },
        tr_m_m: {
          cmd: 0x0A,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },
        tr_m_bpm: {
          cmd: 0x0B,
          arg: [{name: 'port', type: 'u8'}, {name: 'bpm', type: 's16'}]
        },
        tr_m_act: {
          cmd: 0x0C,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        tr_m_sync: {
          cmd: 0x0D,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        tr_m_width: {
          cmd: 0x0E,
          arg: [{name: 'port', type: 'u8'}, {name: 'width', type: 's16'}]
        },
        tr_m_count: {
          cmd: 0x0F,
          arg: [{name: 'port', type: 'u8'}, {name: 'count', type: 's16'}]
        },
        tr_m_mul: {
          cmd: 0x17,
          arg: [{name: 'port', type: 'u8'}, {name: 'mult', type: 's16'}]
        },
        tr_pulse_mute: {
          cmd: 0x16,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        // TXo Control Voltage (CV) Extended Commands
        cv_slew_s: {
          cmd: 0x13,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },        
        cv_slew_m: {
          cmd: 0x14,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },        
        cv_qt: {
          cmd: 0x30,
          arg: [{name: 'port', type: 'u8'}, {name: 'qt', type: 's16'}]
        },        
        cv_qt_set: {
          cmd: 0x31,
          arg: [{name: 'port', type: 'u8'}, {name: 'qt', type: 's16'}]
        },        
        cv_n: {
          cmd: 0x32,
          arg: [{name: 'port', type: 'u8'}, {name: 'note', type: 's16'}]
        },        
        cv_n_set: {
          cmd: 0x33,
          arg: [{name: 'port', type: 'u8'}, {name: 'note', type: 's16'}]
        },        
        cv_scale: {
          cmd: 0x34,
          arg: [{name: 'port', type: 'u8'}, {name: 'scale', type: 's16'}]
        },        
        cv_log: {
          cmd: 0x35,
          arg: [{name: 'port', type: 'u8'}, {name: 'scale', type: 's16'}]
        }, 
        // TXo Control Voltage (CV) Experimental Commands - Oscillator Functions
        osc: {
          cmd: 0x40,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },               
        osc_set: {
          cmd: 0x41,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },               
        osc_qt: {
          cmd: 0x42,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },               
        osc_qt_set: {
          cmd: 0x43,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16V'}]
        },               
        osc_n: {
          cmd: 0x46,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16'}]
        },               
        osc_n_set: {
          cmd: 0x47,
          arg: [{name: 'port', type: 'u8'}, {name: 'volts', type: 's16'}]
        },               
        osc_fq: {
          cmd: 0x44,
          arg: [{name: 'port', type: 'u8'}, {name: 'fq', type: 's16'}]
        },               
        osc_fq_set: {
          cmd: 0x45,
          arg: [{name: 'port', type: 'u8'}, {name: 'fq', type: 's16'}]
        },               
        osc_lfo: {
          cmd: 0x48,
          arg: [{name: 'port', type: 'u8'}, {name: 'fq', type: 's16'}]
        },               
        osc_lfo_set: {
          cmd: 0x49,
          arg: [{name: 'port', type: 'u8'}, {name: 'fq', type: 's16'}]
        },               
        osc_wave: {
          cmd: 0x4A,
          arg: [{name: 'port', type: 'u8'}, {name: 'wave', type: 's16'}]
        },               
        osc_sync: {
          cmd: 0x4B,
          arg: [{name: 'port', type: 'u8'}, {name: 'sync', type: 's16'}]
        },               
        osc_phase: {
          cmd: 0x53,
          arg: [{name: 'port', type: 'u8'}, {name: 'phase', type: 's16'}]
        },               
        osc_width: {
          cmd: 0x4C,
          arg: [{name: 'port', type: 'u8'}, {name: 'width', type: 's16'}]
        },               
        osc_rect: {
          cmd: 0x4D,
          arg: [{name: 'port', type: 'u8'}, {name: 'pol', type: 's16'}]
        },               
        osc_slew: {
          cmd: 0x4F,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },               
        osc_slew_s: {
          cmd: 0x50,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },               
        osc_slew_m: {
          cmd: 0x51,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },               
        osc_scale: {
          cmd: 0x4E,
          arg: [{name: 'port', type: 'u8'}, {name: 'scale', type: 's16'}]
        },               
        osc_cyc: {
          cmd: 0x54,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },               
        osc_cyc_s: {
          cmd: 0x55,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },               
        osc_cyc_m: {
          cmd: 0x56,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },               
        osc_cyc_set: {
          cmd: 0x57,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },               
        osc_cyc_s_set: {
          cmd: 0x58,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },               
        osc_cyc_m_set: {
          cmd: 0x59,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },               
        osc_ctr: {
          cmd: 0x5A,
          arg: [{name: 'port', type: 'u8'}, {name: 'ctr', type: 's16'}]
        },
        // TXo Control Voltage (CV) Experimental Commands - Envelope Generator               
        env_act: {
          cmd: 0x60,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        env_att: {
          cmd: 0x61,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        env_att_s: {
          cmd: 0x62,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },
        env_att_m: {
          cmd: 0x63,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },
        env_dec: {
          cmd: 0x64,
          arg: [{name: 'port', type: 'u8'}, {name: 'ms', type: 's16'}]
        },
        env_dec_s: {
          cmd: 0x65,
          arg: [{name: 'port', type: 'u8'}, {name: 's', type: 's16'}]
        },
        env_dec_m: {
          cmd: 0x66,
          arg: [{name: 'port', type: 'u8'}, {name: 'm', type: 's16'}]
        },
        env_trig: {
          cmd: 0x67,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        env_eoc: {
          cmd: 0x6B,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        env_eor: {
          cmd: 0x6A,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        env_loop: {
          cmd: 0x6C,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        env: {
          cmd: 0x6D,
          arg: [{name: 'port', type: 'u8'}, {name: 'state', type: 's16'}]
        },
        // Txo global commands
        kill: {
          cmd: 0x20,
          arg: [{name: 'port', type: 'u8'}]
        },        
        tr_init: {
          cmd: 0x22,
          arg: [{name: 'port', type: 'u8'}]
        },        
        cv_init: {
          cmd: 0x23,
          arg: [{name: 'port', type: 'u8'}]
        },        
        cv_callib: {
          cmd: 0x6E,
          arg: [{name: 'port', type: 'u8'}]
        },        
        cv_reset: {
          cmd: 0x6F,
          arg: [{name: 'port', type: 'u8'}]
        },        
        init: {
          cmd: 0x24,
          arg: [{name: 'port', type: 'u8'}]
        },        

      }
    }
  }

  module.exports = modules;