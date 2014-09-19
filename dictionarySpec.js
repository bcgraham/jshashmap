define(['dictionary'], function(dictionary) {

    describe('A Dictionary', function() {
        beforeEach(function() {

            this.dictionary = dictionary.getDictionary();

        });

        xit('test get index', function() {
            this.dictionary.Map.push(['a',0], ['e',1], ['f',1], ['n', 7], ['p', 4]);
            expect(this.dictionary.get_index('a')[0]).toEqual(0);
            expect(this.dictionary.get_index('e')[0]).toEqual(1);
            expect(this.dictionary.get_index('f')[0]).toEqual(2);
            expect(this.dictionary.get_index('n')[0]).toEqual(3);
            expect(this.dictionary.get_index('p')[0]).toEqual(4);

            expect(this.dictionary.get_value('a')).toEqual(0);
            expect(this.dictionary.get_value('e')).toEqual(1);
            expect(this.dictionary.get_value('f')).toEqual(1);
            expect(this.dictionary.get_value('n')).toEqual(7);
            expect(this.dictionary.get_value('p')).toEqual(4);

        });

        it('add a value and expect it to exist in map', function() {
            this.dictionary.add_key_value_pair('a', 45);
            expect(this.dictionary.get_value('a')).toEqual(45);
            this.dictionary.add_key_value_pair('b', 55);
            expect(this.dictionary.get_value('b')).toEqual(55);

            // this.dictionary.remove_key('a');
            // console.log(this.dictionary.get_value('a'))
            // expect(this.dictionary.get_value('a')).toBeFalsy();
            // expect(this.dictionary.get_value('b')).toEqual(55);

            // this.dictionary.add_key_value_pair('b', 66);
            // expect(this.dictionary.get_value('b')).toEqual(66);

            // this.dictionary.remove_key('c');
            // expect(this.dictionary.get_value('a')).toBeFalsy();
            // expect(this.dictionary.get_value('b')).toEqual(66);
            // expect(this.table.getNumberOfPlayers()).toEqual(allPlayers.length);

        });

    });
});