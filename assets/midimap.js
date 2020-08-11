// For Txo and er301: Port numbers starts from 0
// CC 
// Follow the structure of the object, you must return an array, even if a cc only returns one command.

const midimap = {

    cc: {
        
        112: value => ([
            { device: 'er301', unit_number: '1', command: 'cv', args: [0, value.mapped(0, 127, 0, 16383) - 774] }
        ]),
        
        113: value => ([
            { device: 'er301', unit_number: '1', command: 'cv', args: [1, value.mapped(0, 127, 0, 16383) - 774] }
        ]),
        
        114: value => ([
            { device: 'er301', unit_number: '1', command: 'cv', args: [2, value.mapped(0, 127, 0, 16383) - 774] }
        ]),
        
        115: value => ([
            { device: 'er301', unit_number: '1', command: 'cv', args: [3, value.mapped(0, 127, 0, 16383) - 774] }
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
