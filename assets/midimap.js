// For Txo and er301: Port numbers start from 0
// CC value accessible via this.value | Note number -> this.number and velocity -> this.velocity
// Follow the structure of the object, you must return an array, even if a cc only returns one command.

const midimap = {

    cc: {
        115: value => ([
            { device: 'er301', unit_number: '1', command: 'cv', args: [0, value.mapped(0, 127, 0, 16383) - 774] }
        ]),

        112: value => ([
            { device: 'er301', unit_number: '1', command: 'cv_slew', args: [0, value.mapped(0, 127, 0, 16383) - 774] }
        ]),

        105: value => ([
            { device: 'er301', unit_number: '1', command: 'cv_set', args: [0, value.mapped(0, 127, 0, 16383) - 774] },
            { device: 'er301', unit_number: '1', command: 'cv', args: [0, value.mapped(0, 127, 0, 16383) - 774] },
            { device: 'er301', unit_number: '1', command: 'cv_slew', args: [0, value.mapped(0, 127, 0, 16383) - 774] }
        ])
    },
    note_on: {
        23 : (note, velocity) => ([
            { device: 'er301', unit_number: '1', command: 'tr_pulse', args: [note - 1, 1] }, 
            { device: 'er301', unit_number: '1', command: 'cv', args: [note - 1, velocity.mapped(0, 127, 0, 16383)] }
        ]),

        25 : (note, velocity) => ([
            { device: 'er301', unit_number: '1', command: 'tr_pulse', args: [2, 1] }
        ])
    },
    note_off: {
 
    },
    transport: {

    },
    clock: {

    }
}

module.exports = midimap;