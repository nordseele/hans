const midimap = {

    cc: {
        115: function() {return ['er301', 1, 'cv', 1, this.value.map(0, 127, 0, 16383)-774]}
    },
    note_on: {
        23 : function() {return ['er301', 1, 'tr_pulse', 1, 1]},
        34 : function() {return ['er301', 1, 'tr_pulse', this.number, 1]},
        35 : function() {return ['er301', 1, 'tr_pulse', 2, this.velocity]}
    },
    note_off: {
        23 : function() {return [['er301', 1, 'cv', 1, 3280], ['er301', 1, 'cv', 2, 3280]]},
        25 : function() {return [['er301', 1, 'cv', this.number, 3280]]},
        26 : function() {return [['er301', 1, 'cv', 1, this.velocity]]}
    },
    transport: {

    },
    clock: {

    }
}

module.exports = midimap;