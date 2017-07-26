import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';

import NoteListItem from './NoteListItem';

if(Meteor.isClient) {
  describe('NoteListItem', function() {

    it('should render title and timestamp', function() {
      const title = 'My title here';
      const updatedAt = 1501102209660;
      const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('7/27/17');
    });

    it('should set default title if no title set', function() {
      const defaultTitle = 'Untitled note';
      const updatedAt = 1501102209660;
      const wrapper = mount(<NoteListItem note={{updatedAt}}/>);

      expect(wrapper.find('h5').text()).toBe(defaultTitle);
    });

  });
}
