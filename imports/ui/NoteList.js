import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

import {Notes} from '../api/notes';

export const NoteList = (props) => {
  const renderList = (notes) => {
    return notes.map((note) => {
      return (
        <NoteListItem key={note._id} note={note}/>
      );
    });
  };
  return (
    <div>
      <NoteListHeader/>
      NoteList {props.notes.length}
      {renderList(props.notes)}
    </div>
  );
};

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');
  return {
    notes: Notes.find().fetch()
  };
}, NoteList);
